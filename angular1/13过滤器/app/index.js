/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [])
    .factory("Data", function () {
        return {
            "message": "共享的数据"
        };
    })
    //  factory-1 实现数据共享，可以返回任何类型的数据
    .service("Service", function () {
        return {
            "string": "我擦擦擦擦擦擦"
        };
    })
    //   service 实现共享数据，只能返回对象类型的数据
    .controller("firstController", function ($scope, Data, Service) {
        //  将Data注入到控制器里面
        $scope.data = {
            "name": "小宋"
        };
        $scope.Data = Data;
        $scope.Service = Service;
        $scope.today = new Date();
    });