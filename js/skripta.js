var prvigumbkliknut;
var drugigumbkliknut;
$(document).ready(function(){
    $('#prikazikec').click(function(){
        if(prvigumbkliknut!=true)
            {
                prvigumbkliknut=true;
                $('#odvedimetu1').css( {display: 'inline-block'} );
                $('#prikazikec').text('Read Less');
            }
            else{
                $('#odvedimetu1').css( {display: 'none'} );
                $('#prikazikec').text('Read More');
                prvigumbkliknut=false;
            }
    })
    $('#prikazidvica').click(function(){
        if(drugigumbkliknut!=true)
        {
            drugigumbkliknut = true;
            $('#odvedimetu2').css( {display: 'inline-block'} );
            $('#prikazidvica').text('Read Less');
        }
        else{
            $('#odvedimetu2').css( {display: 'none'} );
            $('#prikazidvica').text('Read More');
            drugigumbkliknut=false;
        }
    })
});
function myFunction() {
    open("stonefruit.html", "_self");
    // myWindow.document.write("<p>I replaced the current window.</p>");
}

function myFunction1() {
    open("index1.html", "_self");
    // myWindow.document.write("<p>I replaced the current window.</p>");
}
