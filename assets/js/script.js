const button = document.getElementById( 'sendMessageButton' )

console.log( button );

async function submitFormFunc() {

    var name = document.getElementById( "name" ).value;
    var email = document.getElementById( "email" ).value;
    var phone = document.getElementById( "phone" ).value;
    var message = document.getElementById( "message" ).value;

    if ( ! name || ! email || ! phone || ! message ) {

        window.alert( "Enter all the Fields correctly..." )
    } else {
        jQuery( ".loader_div" ).show();

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


        fetch( Url, requestOptions ).then( response => {
            response.text();
            window.alert( "Thank You for Contacting Me :)" );
        } ).then( result => console.log( result ) ).catch( error => console.log( 'error', error ) ).then( function () {
            jQuery( ".loader_div" ).hide();
        } );


    }

}
