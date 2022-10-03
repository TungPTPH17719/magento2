require(['jquery', 'jquery/ui'], function($){
    $(document).ready( function() {
        // $('.page-footer').click(function () {
        //     $('.page-footer').css("background-color", "yellow")
        // })
        $('.info1').click( function() {
            if(window.innerWidth<980){
                if($('.info2').css("display") === 'none'){
                    $('.info2').css("display", 'block')
                }else{
                    $('.info2').css("display", 'none')
                }
            }
        })
        if(window.innerWidth<980){
            $('.info2').css("display", 'none')
        }
    });
});
