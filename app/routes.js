define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            template: '<articles-list></articles-list>',
        });

        // $routeProvider.when('/view2', {
        //     templateUrl: 'partials/partial2.html',
        //     controller: 'MyCtrl2'
        // });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
});