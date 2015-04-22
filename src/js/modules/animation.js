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
            this.divider();
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
        
        divider: function() {
            var dividerPos = $('.krugman-body__divider').position().top,
                dividerHeight = dividerPos + $('krugman-body__divider').height();

            $(window).scroll(function() {
                if (scrollTop > dividerPos) {
                    var frame = Math.floor(scrollTop / 30 % 3) + 1,
                        percentage = Math.floor((scrollTop - dividerHeight) / dividerHeight * 100);
                    $('.krugman-body__divider').attr('class', 'krugman-body__divider show-frame-' + frame);
                    $('.krugman-body__divider-scissors').css({'left' : percentage + '%'});
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