define([
    'angular',
    'ngRoute',
    './articles-list/index'
    // './controllers/index',
    // './directives/index',
    // './filters/index',
    // './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ngRoute',
        'articlesList'
        // 'app.services',
        // 'app.controllers',
        // 'app.filters',
        // 'app.directives'
    ]);
});