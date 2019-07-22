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
            this.armTransition();
            this.graphTransition();
            this.illustrationFrames();
        }.bind(this));
    },

    headerCutting: function() {
        const $man = $('.uit-header__man');

        if ($man.position().top + $man.height() > scrollTop) {
            var frame = Math.floor(scrollTop / 50 % 3) + 1;
            $man.attr('class', 'uit-header__man show-frame-' + frame);

            var $parent = $('.uit-header');
            var windowHeight = $(window).height();
            var elHeight = $parent.height();

            if (elHeight > scrollTop) {
                var interimValue = (((elHeight - scrollTop) / elHeight) * 80) + 120;
                $parent.attr('style', `background-position-y: ${interimValue}%`)
            }
        }
    },

    armTransition: function() {
        $('.is-transformable').each(function(i, el) {
            var $parent = $(el).parent();
            var start = $parent.offset().top - $(window).height();
            var end = $parent.offset().top - ($(window).height() / 2)

            if (scrollTop > start && scrollTop < end) {
                var startValues = $(el).data('start').split(',');
                var endValues = $(el).data('end').split(',');
                var unit = $(el).data('unit') || 'px';
                var percentage = (end - scrollTop) / ($(window).height() + $parent.outerHeight()) * 100;

                var xDifferencePoint = (startValues[0] - endValues[0]) / 100;
                var yDifferencePoint = (startValues[1] - endValues[1]) / 100;

                $(el).css("transform", `translate(${xDifferencePoint * percentage}${unit}, ${yDifferencePoint * percentage}${unit})`)
            }
        });
    },

    graphTransition: function() {
        var $parent = $('.has-graph');
        var start = $parent.offset().top - $(window).height();
        var end = $parent.offset().top;

        if (scrollTop > start && scrollTop < end) {
            var percentage = (end - scrollTop) / ($(window).height() + $parent.outerHeight()) * 100;


            if (percentage > 50) {
                $('.stroke--first').css('stroke-dashoffset', ((percentage - 50) * -2) + '%');
            } else {
                $('.stroke--second').css('stroke-dashoffset', (percentage * -2) + '%');
            }
        }
    },

    dividerCutting: function() {
        $('.uit-body__divider').each(function() {
            var frame = Math.floor(scrollTop / 50 % 3) + 1;
            $(this).removeClass('show-frame-1 show-frame-2 show-frame-3').addClass('show-frame-' + frame);

            var $scissors = $(this).find('.uit-body__divider-scissors');
            var position = $(this).offset().top;
            var windowHeight = $(window).height();
            var elHeight = $(this).height();

            if (scrollTop > position - windowHeight && !(position + elHeight < scrollTop)) {
                var interimValue = 180 - (((position + elHeight - scrollTop) / (windowHeight + elHeight)) * 180) - 30;
                $scissors.attr('style', `left: ${interimValue}%`)
            }
        });
    },

    illustrationFrames: function() {
        $('.uit-body__illustration--frames').each(function() {
            var frame = Math.floor(scrollTop / 50 % 3) + 1;
            $(this).removeClass('show-frame-1 show-frame-2 show-frame-3 show-frame-4 show-frame-5').addClass('show-frame-' + frame)
        });
    }
};
