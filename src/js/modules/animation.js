import Skrollr from 'skrollr';
let scrollTop;

export default {
    init: function() {
        this.createSkrollr();
    },

    createSkrollr: function() {
        Skrollr.init({
            forceHeight: false,
            skrollrBody: 'uit',
            render: function(data) {
                scrollTop = data.curTop;
                this.headerCutting();
                this.dividerCutting();
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
            console.log($(this));
            $(this).removeClass('show-frame-1 show-frame-2 show-frame-3').addClass('show-frame-' + frame)
        });
    }
};
