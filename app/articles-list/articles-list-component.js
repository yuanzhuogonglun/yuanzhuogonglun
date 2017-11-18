define([
    './articles-list-module',
], function (articlesList) {
    'use strict';
    return articlesList.
    component('articlesList', {
      templateUrl: './articles-list/articles-list.template.html',
      controller: [
        function articlesListController() {
        }
      ]
    });
});