// $(document).ready(function(){
    
    menu();
    popup();
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
        autoplay:{
            delay: 3000
        }
    });

    // 메인 베나
    var swiper = new Swiper('.mainBannerArea .swiper-container', {
        pagination: {
          el: '.mainBannerArea .swiper-pagination',
        },
    });
}

function tab(){
    var tabIndex = 0;
    $('.tabBtn li').click(function(){
        tabIndex = $(this).index();
        $('.tabBtn li').removeClass('active');
        $(this).addClass('active');
        $('.tabContants li').removeClass('active');
        $('.tabContants').each(function(){
            $(this).children('li').eq(tabIndex).addClass('active');
        })
    });
}

function popup(){
    $('.popupShowBtn').click(function(e){
        e.preventDefault();
        $('.receptionArea').eq(0).addClass('active');
    })

    $('.popupArea').click(function(){
        $(this).removeClass('active');
    })
    $('.popupArea > *').click(function(e){
        e.stopPropagation();
    })

    $('.receptionArea .closeBtn').click(function(e){
        $('.receptionArea').removeClass('active');
    })

    $('.receptionArea .finishBtn').click(function(e){
        e.preventDefault();
        $('.receptionArea').removeClass('active');
        $('.receptionFinishArea').addClass('active');
    })

    $('.receptionFinishArea .closeBtn').click(function(){
        $('.receptionFinishArea').removeClass('active');
    })

    $('.receptionFinishArea .finishBtn').click(function(){
        $('.receptionFinishArea').removeClass('active');
    })
}