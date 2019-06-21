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
            }.bind(this)
        });
    },

    headerCutting: function() {
        const $man = $('.uit-header__man');

        if ($man.position().top + $man.height() > scrollTop) {
            var frame = Math.floor(scrollTop / 50 % 3) + 1;
            $man.attr('class', 'uit-header__man show-frame-' + frame);
        }
    }
};
