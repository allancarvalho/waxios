'use strict';

const axios = require('axios');
const retry = require('retry-promise').default;
const axiosMethods = ['get', 'post', 'delete', 'head', 'put', 'patch', 'all', 'spread'];
const methods = {};

axiosMethods.forEach((method) => {
    return methods[method] = function() {
        let args = Array.prototype.slice.call(arguments);
        let retries = args[1] && args[1].retry ? args[1].retry : 1;
        let backoff = args[1] && args[1].backoff ? args[1].backoff : 1000;

        return retry({ max: retries, backoff: backoff }, 
        	() => axios[method].apply(this, args)
    	);
    };
});

module.exports = methods;



