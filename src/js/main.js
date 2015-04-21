define([
    'libs/jquery.js',
    'text!templates/testTemplate.html'
], function(
    jQuery,
    testTemplate
) {
    'use strict';

    function handleRequestError(err, msg) {
        console.error('Failed: ', err, msg);
    }
    function afterRequest(resp) {
        //console.log('Finished', resp);
    }


    function init(el) {
        console.log(testTemplate);
        $('.element-interactive').html(testTemplate);
    }

    return {
        init: init
    };
});
