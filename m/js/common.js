// $(document).ready(function(){
    
    menu();
    popup();
    mainSlider();
    tab();    
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

    // var mainBenefitIdx = 0;
    // var mainBenefitTabIdx = 0;
    // $('.mainBenefitArea > .tabBtnArea button').click(function(e){
    //     $('.tabBtn li').each(function(){
    //         if($(this).hasClass('active')){
    //             mainBenefitIdx = $(this).index();
    //         }
    //     })
    //     if($(this).hasClass('nextBtn')){
    //         if($('.tabBtn li').length -2 >= mainBenefitIdx){
    //             $('.tabContants li').removeClass('active');
    //             $('.tabContants li').eq(mainBenefitIdx + 1).addClass('active');
    //             $('.tabBtn li').eq(mainBenefitIdx).removeClass('active');
    //             $('.tabBtn li').eq(mainBenefitIdx + 1).addClass('active');
    //             mainBenefitTabIdx = mainBenefitIdx + 1;
    //         }
    //     }else{
    //         if(0 < mainBenefitIdx){
    //             $('.tabContants li').removeClass('active');
    //             $('.tabContants li').eq(mainBenefitIdx - 1).addClass('active');
    //             $('.tabBtn li').eq(mainBenefitIdx).removeClass('active');
    //             $('.tabBtn li').eq(mainBenefitIdx - 1).addClass('active');
    //             mainBenefitTabIdx = mainBenefitIdx - 1;
    //         }
    //     }
    //     $('.mainBenefitArea > .tabBtnArea > div').scrollLeft(0);
    //     $('.mainBenefitArea > .tabBtnArea > div').scrollLeft($('.tabBtn li').eq(mainBenefitTabIdx).position().left );
    // })
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