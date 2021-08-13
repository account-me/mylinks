$(function(){

    var fullUrl = window.location.href;
    var myStr = fullUrl.split("=");
    if(myStr.length > 1){
        var Directy = myStr[myStr.length - 1];
    }else{
        var Directy = 'default';
    }

    $("#rel").val(Directy);

});