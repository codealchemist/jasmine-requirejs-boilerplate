define([
    "core/Log",
    "jasmine",
    "spec/storage",
    "spec/namespace"
], function(Log){
    Log.write('TEST RUNNER loaded');

    //init jasmine
    var init = function(){
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();
        jasmineEnv.addReporter(htmlReporter);
        jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
        };

        jasmineEnv.execute();
    };
    
    return {
        init: init
    };
});