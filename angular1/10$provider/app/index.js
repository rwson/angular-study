/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [], function ($provide) {

    //  自定义服务
    //  CustomService就是它里面的$get方法的返回值，且必须是一个对象
    $provide.provider("CustomService", function () {
        this.$get = function () {
            return {
                "擦":"擦擦擦"
            };
        }
    });

    $provide.provider("CustomService2", function () {
        this.$get = function () {
            return {
                "message": "擦擦擦x2"
            };
        }
    });
});

//  在myApp下面声明控制器
myApp.controller("firstController", function ($scope,CustomService, CustomService2) {
    $scope.name = "小宋";
    console.log(CustomService);
    console.log(CustomService2);
});