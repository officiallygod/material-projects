async function submitFormFunc() {

    var name = document.getElementById( "name" ).value;
    var email = document.getElementById( "email" ).value;
    var phone = document.getElementById( "phone" ).value;
    var message = document.getElementById( "message" ).value;

    console.log( name );
    console.log( email );
    console.log( phone );
    console.log( message );

    if ( ! name || ! email || ! phone || ! message ) {

        console.log( "EMPTY" );
        window.alert( "Enter all the Fields correctly..." )
    } else {
        const Url = "https://konnect-js.herokuapp.com/konnectsnd";

        const dataObject = {
            "uid": "DfDMxNhG9nbgvclOh4YxjQ9NX9H2",
            "name": name,
            "email": email,
            "phone": phone,
            "message": message
        };

        var myHeaders = new Headers();
        myHeaders.append( "Content-Type", "application/json" );

        var raw = JSON.stringify( dataObject );

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        console.log( "ELSE" );

        fetch( Url, requestOptions ).then( response => {
            response.text();
            console.log( "WORKED" );
            window.alert( "Thank You for Contacting Me :)" );
        } ).then( result => console.log( result ) ).catch( error => console.log( 'error', error ) );


    }

}
