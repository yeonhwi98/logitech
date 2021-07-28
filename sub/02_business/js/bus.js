$(document).ready(function(){


    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);


        if(sct >= 600){
            $('.con_wrap_2 .con_box').addClass('active_1');
        }

    });


});