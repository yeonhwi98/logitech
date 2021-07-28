$(document).ready(function(){
    
    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);

        // *최종정리
        // 1. sct를 이용해서 gage가 할 수 있게 작업
        // 2. 전체 높이 - 브라우저 높이 = 실제 사용 높이값
        // 3. 실제 사용 높이값을 백분율로 잡기 = 변경하고 싶은 값 / 전체높이값 * 100
        // 4. useScroll = sct / wrapH - innerHeight * 100


        // * wrap의 높이값과 브라우저(스크롤바)의 높이값이 필요
        // * window.innerHeight 는 현재 브라우저 높이값을 알아옴
        // * wrap 높이값에서 innerHeight를 해 주면 내가 실제 쓸 수 있는 높이값이 나옴
        
        // console.log(innerHeight);
        var wrapH = $('.wrap').height();
        var useScroll = sct / (wrapH - innerHeight);
        // console.log(sct / (wrapH - innerHeight));

        //마지막에 한 것
        $('.right').css({
            right: -useScroll * 100 + '%',
        });

        if(sct >= 510){
            $('.up1').addClass('up1_active')
        }

        if(sct >= 1300){
            $('.product2_desc').addClass('product2_desc_active')
        }

        if(sct >= 2500){
            $('.up2').addClass('up2_active')
        }

        if(sct >= 4300){
            $('.up3').addClass('up3_active')
        }

    });

  
  

});//end