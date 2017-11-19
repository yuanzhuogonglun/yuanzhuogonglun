require.config({

  // alias libraries paths
    paths: {
        'domReady': '../bower_components/requirejs-domReady/domReady',
        'angular': '../bower_components/angular/angular',
        'ngRoute': '../bower_components/angular-route/angular-route'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ngRoute': {
            exports: 'ngRoute',
            deps: ['angular']
        }
    },

    // kick start application
    deps: ['./bootstrap']
});