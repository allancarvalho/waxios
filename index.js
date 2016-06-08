'use strict';

const axios = require('axios');
const retry = require('retry-promise').default;
const axiosMethods = ['get', 'post'];
const methods = {};

axiosMethods.forEach((method) => {
    return methods[method] = function() {
        let args = Array.prototype.slice.call(arguments);
        let retries = args[1] && args[1].retry ? args[1].retry : 3;
        return retry({ max: retries, backoff: 1000 }, function (attempt) {
            return axios[method].apply(this, args)
        });
    };
});

module.exports = methods;



