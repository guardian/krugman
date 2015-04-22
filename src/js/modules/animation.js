define([
    'libs/jquery'
], function(
    jQuery
) {
    return {

        init: function() {
            var scrollTop = 0;
            this.scrolling();
            this.cutting();
        },

        drawing: function(target) {
            var $path = $(target);
            var length = path.getTotalLength();
            path.getBoundingClientRect();
            path.addClass('animate');
        },

        cutting: function() {
            var topOfMan = $('.krugman-header__man').position().top,
                bottomOfMan = topOfMan + $('.krugman-header__man').height();
            $(window).scroll(function() {
                if (bottomOfMan > scrollTop) {
                    var frame = Math.floor(scrollTop / 30 % 3) + 1;
                    $('.krugman-header__man').attr('class', 'krugman-header__man show-frame-' + frame);
                }
            });
        },

        scrolling: function() {
            $(window).scroll(function() {
                scrollTop = $(window).scrollTop();
            });
        }
    };
});