import Skrollr from 'skrollr';
let scrollTop;
let s;

export default {
    init: function() {
        this.createSkrollr();
    },

    createSkrollr: function() {
        s = Skrollr.init({
            forceHeight: false,
            skrollrBody: 'uit',
            render: function(data) {
                scrollTop = data.curTop;
                this.headerCutting();
                this.dividerCutting();
                this.illustrationFrames();
            }.bind(this)
        });
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
            $(this).removeClass('show-frame-1 show-frame-2 show-frame-3').addClass('show-frame-' + frame)
        });
    },

    illustrationFrames: function() {
        $('.uit-body__illustration--frames').each(function() {
            var frame = Math.floor(scrollTop / 50 % 3) + 1;
            $(this).removeClass('show-frame-1 show-frame-2 show-frame-3 show-frame-4 show-frame-5').addClass('show-frame-' + frame)
        });
    },

    refreshOnImageLoad: function() {
        console.log(s);
        s.refresh($('.uit-body__illustration path'));
        s.refresh($('.uit-body__illustration g'));
    }
};
