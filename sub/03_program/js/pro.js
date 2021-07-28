$(document).ready(function(){


    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);


        // if(sct >= 50){
        //     $('.section_1 .txt_box_1').addClass('active_1');
        // }

        if(sct >= 700){
            $('.section_2 .img_box_2').addClass('active_2');
        }

        if(sct >= 900){
            $('.section_2 .txt_wrap_2').addClass('active_3');
        }

        if(sct >= 1900){
            $('.section_3 p').addClass('active_4');
        }

        if(sct >= 2200){
            $('.section_4 .txt_wrap_4').addClass('active_5');
        }

        if(sct >= 2800){
            $('.section_4 .img_box_4').addClass('active_6');
        }

        if(sct >= 3260){
            $('.section_5 .img_wrap_5').addClass('active_7');
        }

    });


});