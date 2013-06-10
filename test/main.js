/*global require*/
'use strict';

//namespace
var App = {};

// Require.js allows us to configure shortcut alias
require.config({
    baseUrl: "../js/",
    
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            exports: 'bootstrap',
            deps: ['jquery']
        },
        jasmine: {
            exports: 'jasmine'
        },
        jasmine_html: {
            exports: 'jasmine_html',
            deps: ['jasmine']
        }
    },
    paths: {
        jquery: 'lib/jquery-1.9.1.min',
        bootstrap: 'lib/bootstrap.min',
        jasmine: '../test/lib/jasmine-1.3.1/jasmine',
        jasmine_html: '../test/lib/jasmine-1.3.1/jasmine-html',
        testRunner: '../test/testRunner',
        spec: '../test/spec/'
    }
});

require([
    'testRunner',
    'core/Log',
    'app',
    'bootstrap',
    'jasmine',
    'jasmine_html'
], function (TestRunner, Log) {
    Log.write('MAIN loaded');
    
    //init
    TestRunner.init();
});
