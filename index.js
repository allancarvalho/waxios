'use strict';

let axios = require('axios');
let retry = require('retry-promise').default;
const axiosMethods = ['get', 'post'];
let methods = {};

axiosMethods.forEach((method) => {
    return methods[method] = function() {
        let args = Array.prototype.slice.call(arguments);
        return retry({ max: 3, backoff: 1000 }, function (attempt) {
            // console.log('Attempt', attempt, 'at creating user');
            return axios[method].apply(this, args)
        });
    };
});

module.exports = methods;



