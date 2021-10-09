// $(document).ready(function(){
    
    menu();
    popup();
    mainSlider();
    tab();    
    videoPopup();
// });

function menu(){
    $('.menuBtn').click(function(){
        $('header').toggleClass('active');
    });
    $('header .header_center nav > ul > li > a').click(function(e){
        $('header .header_center nav > ul > li > a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
        $('header .header_center nav > ul > li > ul').slideUp();
        $(this).siblings().slideDown();
    })
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
            delay: 5000
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
        $('.page-sub span').html($(this).children().html());
        $('.tabContants li').removeClass('active');
        $('.tabContants').each(function(){
            $(this).children('li').eq(tabIndex).addClass('active');
        })

        $('.new').addClass('active')
        $('.finish').removeClass('active')

        if($(this).attr('data-tab') == 'finish'){
            $('.new').removeClass('active')
            $('.finish').addClass('active')
        }
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

function videoPopup(){
    $('.videoPopupBtn').click(function(){
        $('.videoPopup').addClass('active');
        $('.mainVideoArea figure iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
        $('.videoPopup iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');
    });
    $('.videoPopup , .videoPopup .closeBtn').click(function(){
        $('.videoPopup').removeClass('active');
        $('.videoPopup iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
    });
    $('.videoPopup > div').click(function(e){
        e.stopPropagation();

    })
}