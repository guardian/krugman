define([
    'libs/jquery',
    'libs/skrollr',
    'modules/confetti'
], function(
    jQuery,
    Skrollr,
    Confetti
) {
    var scrollTop = 0;

    return {

        init: function() {
            this.scrolling();
            if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
                Skrollr.init({
                    forceHeight: false,
                    skrollrBody: 'js-context',
                    render: function(data) {
                        scrollTop = data.curTop;
                        this.cutting(scrollTop);
                        this.divider(scrollTop);
                        this.illustrations(scrollTop);
                        this.blinky(scrollTop);
                    }.bind(this)
                });
            } else {
                $(window).scroll(function() {
                    scrollTop = $(window).scrollTop();
                        this.cutting(scrollTop);
                        this.divider(scrollTop);
                        this.illustrations(scrollTop);
                        this.blinky(scrollTop);
                }.bind(this));
            }
            Confetti.init();
/*
                $(window).scroll(function() {
                    scrollTop = $(window).scrollTop();
                    this.cutting(scrollTop);
                    this.divider(scrollTop);
                    this.illustrations(scrollTop);
                    this.blinky(scrollTop);
                });
*/
        },

        drawing: function(target) {
            var $path = $(target);
            var length = path.getTotalLength();
            path.getBoundingClientRect();
            path.addClass('animate');
        },

        cutting: function(scrollTop) {
            var bottomOfMan = $('.krugman-header__man').position().top + $('.krugman-header__man').height();
            if (bottomOfMan > scrollTop) {
                var frame = Math.floor(scrollTop / 100 % 3) + 1;
                $('.krugman-header__man').attr('class', 'krugman-header__man show-frame-' + frame);
            }
        },

        divider: function() {
            $('.krugman-body__divider').each(function() {
                var frame = Math.floor(scrollTop / 50 % 3) + 1;
                var classes = $(this).attr('class').split(" ").filter(function(c) {
                    return c.lastIndexOf('show-frame-', 0) !== 0;
                });
                $(this).attr('class', classes.join(" ") + ' show-frame-' + frame);
            });
        },

        illustrations: function() {
            $('.krugman-body__illustration--framey').each(function() {
                var frame = Math.floor(scrollTop / 50 % 3) + 1;
                var classes = $(this).attr('class').split(" ").filter(function(c) {
                    return c.lastIndexOf('show-frame-', 0) !== 0;
                });
                $(this).attr('class', classes.join(" ") + ' show-frame-' + frame);
            });
        },

        blinky: function() {
            $('.krugman-body__illustration--blinky').each(function() {
                var frame = Math.floor(scrollTop / 100 % 5) + 1;
                var classes = $(this).attr('class').split(" ").filter(function(c) {
                    return c.lastIndexOf('show-frame-', 0) !== 0;
                });
                $(this).attr('class', classes.join(" ") + ' show-frame-' + frame);
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
            viewportHeight = $(window).height();
            $(window).resize(function() {
                viewportHeight = $(window).height();
            });
        }
    };
});
