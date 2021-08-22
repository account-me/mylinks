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
    
    
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $(".btnSend").click();    
        }
    });
    
});
