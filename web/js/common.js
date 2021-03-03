// $(document).ready(function(){
    
    menu();
    mainSlider();
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
}