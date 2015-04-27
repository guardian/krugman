define([
    'libs/jquery',
    'libs/skrollr',
    'modules/confetti'
], function(
    jQuery,
    Skrollr,
    Confetti
) {
    return {

        init: function() {
            var scrollTop = 0;
            this.scrolling();
            this.cutting();
            this.divider();
            this.illustrations();
            Confetti.init();
            Skrollr.init({forceHeight: false});
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
                    var frame = Math.floor(scrollTop / 100 % 3) + 1;
                    $('.krugman-header__man').attr('class', 'krugman-header__man show-frame-' + frame);
                }
            });
        },

        divider: function() {
            $(window).scroll(function() {
                $('.krugman-body__divider').each(function() {
                    var frame = Math.floor(scrollTop / 50 % 3) + 1;
                    var classes = $(this).attr('class').split(" ").filter(function(c) {
                        return c.lastIndexOf('show-frame-', 0) !== 0;
                    });
                    $(this).attr('class', classes.join(" ") + ' show-frame-' + frame);
                });
            });
        },

        illustrations: function() {
            $(window).scroll(function() {
                $('.krugman-body__illustration').each(function() {
                    var frame = Math.floor(scrollTop / 50 % 3) + 1;
                    var classes = $(this).attr('class').split(" ").filter(function(c) {
                        return c.lastIndexOf('show-frame-', 0) !== 0;
                    });
                    $(this).attr('class', classes.join(" ") + ' show-frame-' + frame);
                });
            });
        },

        percentageSeen: function(element) {
            var elementOffsetTop = element.offset().top,
                elementHeight = element.height();

                if (elementOffsetTop > (scrollTop + viewportHeight)) {
                    return 0;
                } else if ((elementOffsetTop + elementHeight) < scrollTop) {
                    return 100;
                } else {
                    var distance = (scrollTop + viewportHeight) - elementOffsetTop;
                    var percentage = distance / ((viewportHeight + elementHeight) / 100);
                    return percentage;
                }
        },

        scrolling: function() {
            $(window).scroll(function() {
                scrollTop = $(window).scrollTop();
            });
            viewportHeight = $(window).height();
            $(window).resize(function() {
                viewportHeight = $(window).height();
            })
        }
    };
});