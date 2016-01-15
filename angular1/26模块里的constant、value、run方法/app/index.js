var myApp = angular.module("myApp", [], ["$provide", function ($p) {
    console.log("config");
}])
    .constant("APIKEY", "XXXX")
    //  可以注入任何方法,全局变量

    .value("version", "1.0.0")
    //  只能注入controller

    .run(function(){
        console.log("run");
    })

    .config(function(APIKEY){
        console.log("config1");
        console.log(APIKEY);
    })

    .controller("firstController", ["APIKEY","version", function (APIKEY,v) {
        console.log(APIKEY);
        console.log(v);
        console.log("controller");
    }]);