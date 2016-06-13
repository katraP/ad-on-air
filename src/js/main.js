/**
 * Created by Kateryna_Porkhun on 4/24/2016.
 */
$(function() {
    var anchorMap = {
        l1: 'wall',
        l2: 'media',
        l3: 'contact',
        l4: 'team',
        l5: 'event'
    }

    var media = '.cl-media';
    var map = $('.cl-contact');
    var currentBannerTranslate = 0;
    var banner = $('.cl-wall__bg');
    var menuLink = $('.cl-nav__link');
    var contactForm = $('.cl-contact-form');
    var contactFormBut = $('.cl-contact__button');

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
            var offsetTop = $('.cl-'+anchorMap[type]).offset().top - 40;
        }
        $('html, body').animate({
            scrollTop: offsetTop
        }, 600);
    }

    function initFormValidation() {
        contactForm.find('.cl-form').validate({
            rules: {
                email: 'required',
                name: 'required'
            },
            errorElement: 'span',
            onkeyup: false,
            focusCleanup: true,
            focusInvalid: false,
            onfocusout: function(element) {
                console.log('dsdsds');
                $(element).valid();
            },
            submitHandler: function(form, e) {
                e.preventDefault();
                contactForm.addClass('cl-contact-form--submitted');
            },
            errorClass: 'invalid-item'
        });
    }

    menuLink.on('click', function(e) {
        animateMenu(e, this);
    });

    menuScroll();
    showMedia();
    showMap();
    initFormValidation();
});