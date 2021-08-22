$( document ).ready(function() {    

    $('#log-in').click(function() {

      var myLink = 'POST.php';

        var request = $.ajax({
            url: myLink,
            method: "POST",
            data: $('#form').serialize(),
            dataType: "html"

          }).done(function( data ) {

            $(location).attr('href', data);

          }).fail(function( data ) {
            
            $(location).attr('href', data);
            
          });

    });
    
    
    // ======== Enter To Ajax
    
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
          event.preventDefault();
          $("#log-in").click();
          return false;
        }
     });
    
    
});

