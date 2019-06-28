import animation from '../modules/animation.js';

export default {
    init: function() {
        this.loadImages();
    },

    loadImages: function() {
        var totalImages = $('.uit-body__illustration').length;
        var loadedImages = 0;

        $('.uit-body__illustration').each(function(i, el) {
            var url = $(el).data('url');
            $.get(url, function(svg) {
                $(el).append(svg.documentElement.outerHTML);
                loadedImages++;
                if (totalImages === loadedImages) {
                    console.log(animation);
                    animation.refreshOnImageLoad();
                }
            })
        })
    }
};
