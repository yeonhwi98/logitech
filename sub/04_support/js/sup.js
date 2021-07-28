$(document).ready(function(){


    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct >= 1000){
            $('.con_wrap_3 .txt_box').addClass('active_1');
        }

    });


});