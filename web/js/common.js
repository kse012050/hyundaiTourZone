// $(document).ready(function(){
    
    menu();
    mainSlider();
    tab();    
// });

function menu(){
    $(window).scroll(function(){
        
        if($(window).scrollTop() > $('.header_top').height()){
            $('nav').addClass('active');
        }else{
            $('nav').removeClass('active')
        }
    });
}

function mainSlider(){
    // 메인 슬라이더
    var mainSlider = new Swiper('.mainSliderArea .swiper-container', {
        pagination: {
            el: '.mainSliderArea .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 메인 베나
    var swiper = new Swiper('.mainBannerArea .swiper-container', {
        pagination: {
          el: '.mainBannerArea .swiper-pagination',
        },
    });
}

function tab(){
    $('.tabBtn li').click(function(){
        $('.tabBtn li').removeClass('active');
        $(this).addClass('active');
        $('.tabContants li').removeClass('active');
        $('.tabContants li').eq($(this).index()).addClass('active');
    });
}