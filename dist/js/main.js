/**
 * Created by Kateryna_Porkhun on 4/24/2016.
 */
$(function() {
    var anchorMap = {
        l1: 'banner',
        l2: 'media',
        l3: 'contact',
        l4: 'team',
        l5: 'event'
    }

    var media = '.ad-media';
    var map = $('.ad-contact');
    var currentBannerTranslate = 0;
    var banner = $('.ad-banner__bg');
    var menuLink = $('.ad-nav__link');
    var contactFormBut = $('.ad-contact__button');

    $(window).on('scroll', function() {
        menuScroll();
        bannerScroll();
        showMedia();
        showMap();
    });

    function menuScroll() {
        if($(window).scrollTop() >= 90) {
            $('body').addClass('scrolled');
        }
        else {
            $('body').removeClass('scrolled');
        }
    }
    function bannerScroll() {
        currentBannerTranslate = $(window).scrollTop()/3;
        banner.css('transform', 'translate(0,'+currentBannerTranslate+'px)')
    }

    function showMedia() {
        if($(window).height() + $(window).scrollTop() >= $(media).offset().top + 250 ) {
            $(media).addClass('animated');
        }
    }
    function showMap() {
        if($(window).height() + $(window).scrollTop() >= map.offset().top + 400 ) {
            map.addClass('animated');
        }
    }
    function animateMenu(event, el) {
        event.preventDefault();
        var element = $(el);
        var type = element.attr('class').split(' ')[1];
        if(type === 'l1') {
            var offsetTop = 0;
        }
        else {
            var offsetTop = $('.ad-'+anchorMap[type]).offset().top - 40;
        }
        $('html, body').animate({
            scrollTop: offsetTop
        }, 600);
    }
    function submitForm(e) {
        e.preventDefault();
        contactFormBut.addClass('ad-contact__button--clicked').val('Success!');
    }


    menuLink.on('click', function(e) {
        animateMenu(e, this);
    });
    contactFormBut.on('click', submitForm);
    menuScroll();
    showMedia();
    showMap();
});