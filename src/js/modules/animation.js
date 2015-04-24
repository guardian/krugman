define([
    'libs/jquery',
    'modules/confetti'
], function(
    jQuery,
    Confetti
) {
    return {

        init: function() {
            var scrollTop = 0;
            this.scrolling();
            this.cutting();
            this.divider();
            this.header();
            Confetti.init();
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
                if (scrollTop + viewportHeight > $('.krugman-body__divider').offset().top) {
                    var frame = Math.floor(scrollTop / 50 % 3) + 1;
                    $('.krugman-body__divider').attr('class', 'krugman-body__divider show-frame-' + frame);
                    $('.krugman-body__divider-scissors').css({'left' : Math.round(this.percentageSeen($('.krugman-body__divider'))) + '%'});
                }
            }.bind(this));
        },

        header: function() {
            $(window).scroll(function(){
                $('.krugman-header__crowd').css({
                    'background-position': 'center ' + (200 - this.percentageSeen($('.krugman-header__crowd'))) + '%'
                });
                $('.krugman-header__man').css({
                    'margin-top' : '-' + (scrollTop + 200) + 'px'
                });
            }.bind(this));
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