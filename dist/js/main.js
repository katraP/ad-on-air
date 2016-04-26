/**
 * Created by Kateryna_Porkhun on 4/24/2016.
 */
$(function() {
    var media = '.ad-media';
    $(window).on('scroll', function() {
        if($(window).scrollTop() >= 90) {
            $('body').addClass('scrolled');
        }
        else {
            $('body').removeClass('scrolled');
        }
        showMedia();
    });

    function showMedia() {
        //alert($(window).height());
        //alert($(media).offset().top);
        if($(window).height() + $(window).scrollTop() >= $(media).offset().top + 250 ) {
            $(media).addClass('animated');
        }
    }
    showMedia();

});