$(function(){

    $(".clicker").click(function(){
        $output1 = $(".output1").val();
        $output11 = $output1.length;
        if($output1.length >= 6){
            console.log("Yes");
        }else{
            console.log("No");
        }
    });
    console.log('fffff');
    var apsWidth = $('.aps p').width();
    var realWidth = 'calc(50% - (' + apsWidth + 'px / 2))';
    $('.aps p').css('left',realWidth);

});