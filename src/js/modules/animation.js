let scrollTop;

export default {
    init: function() {
        this.bindings();
    },

    bindings: function() {
        $(window).scroll(function() {
            scrollTop = $(window).scrollTop();
            this.headerCutting();
            this.dividerCutting();
            this.illustrationFrames();
        }.bind(this))
    },

    headerCutting: function() {
        const $man = $('.uit-header__man');

        if ($man.position().top + $man.height() > scrollTop) {
            var frame = Math.floor(scrollTop / 50 % 3) + 1;
            $man.attr('class', 'uit-header__man show-frame-' + frame);
        }
    },

    dividerCutting: function() {
        $('.uit-body__divider').each(function() {
            var frame = Math.floor(scrollTop / 50 % 3) + 1;
            $(this).removeClass('show-frame-1 show-frame-2 show-frame-3').addClass('show-frame-' + frame);

            //data-bottom-top="left: -30%;" data-top-bottom="left: 150%;"

            var $scissors = $(this).find('.uit-body__divider-scissors');
            var position = $(this).offset().top;
            var windowHeight = $(window).height();
            var elHeight = $(this).height();

            if (scrollTop > position - windowHeight && !(position + elHeight < scrollTop)) {
                console.log('in view');
            }
        });
    },

    illustrationFrames: function() {
        $('.uit-body__illustration--frames').each(function() {
            var frame = Math.floor(scrollTop / 50 % 3) + 1;
            $(this).removeClass('show-frame-1 show-frame-2 show-frame-3 show-frame-4 show-frame-5').addClass('show-frame-' + frame)
        });
    },

    refreshOnImageLoad: function() {
        // console.log(s);
        // s.refresh($('.uit-body__illustration path'));
        // s.refresh($('.uit-body__illustration g'));
    }
};
