define([
    'libs/jquery',
    'modules/animation',
    'text!templates/template.html'
], function(
    jQuery,
    animation,
    template
) {
    'use strict';

    function handleRequestError(err, msg) {
        console.error('Failed: ', err, msg);
    }
    function afterRequest(resp) {
        // console.log('Finished', resp);
    }

    function init(el) {
        $('.content--interactive').html(template);
        $('.content-footer, .l-footer').hide();
        animation.init();
    }

    return {
        init: init
    };
});
