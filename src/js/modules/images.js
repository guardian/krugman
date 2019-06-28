export default {
    init: function() {
        this.loadImages();
    },

    loadImages: function() {
        $('.uit-body__illustration').each(function(i, el) {
            var url = $(el).data('url');
            $.get(url, function(svg) {
                $(el).append(svg.documentElement.outerHTML);
            })
        })
    }
};
