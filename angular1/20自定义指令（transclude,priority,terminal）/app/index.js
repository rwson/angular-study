/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [], ["$compileProvider", function () {
}])
    .directive("customTags", function () {
        console.log("customTags");
        return {
            "restrict": "ECAM",
            "template":"<div>新数据<span ng-transclude></span></div>",
            //  在模板中指定ng-transclude属性，保留原始数据
            "replace": true,
            "priority":0,
            "transclude":true
            //  指定transclude属性为true保留原始数据
        };
    })
    .directive("customTags2", function () {
        console.log("customTags2");
        return {
            "restrict": "ECAM",
            "template":"<div>2</div>",
            "replace": true,
            "priority":-100,
            //  优先级
            "terminal":true
        };
    })
    .directive("customTags3", function () {
        console.log("customTags3");
        return {
            "restrict": "ECAM",
            "template":"<div>3</div>",
            "replace": true,
            "priority":0,
            "terminal":true
            //  指定了terminal属性，小于0的directive(指令)都不会被执行,比如customTags2
        };
    })
    .controller("firstController", ["$scope", function ($scope) {
        $scope.name = "小宋";
    }]);