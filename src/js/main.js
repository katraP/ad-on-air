/**
 * Created by Kateryna_Porkhun on 4/24/2016.
 */
$(function() {
    var media = '.ad-media';
    var currentBannerTranslate = 0;
    var banner = $('.ad-banner__bg');
    $(window).on('scroll', function() {
        if($(window).scrollTop() >= 90) {
            $('body').addClass('scrolled');
        }
        else {
            $('body').removeClass('scrolled');
        }
        bannerScroll();
        showMedia();
    });

    function bannerScroll() {
        currentBannerTranslate = $(window).scrollTop()/3;
        banner.css('transform', 'translate(0,'+currentBannerTranslate+'px)')
    }

    function showMedia() {
        if($(window).height() + $(window).scrollTop() >= $(media).offset().top + 250 ) {
            $(media).addClass('animated');
        }
    }
    showMedia();

});