/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [])
    .factory("Data", function () {
        return {
            "message": "共享的数据",
            "testFn":function(){
                console.log("我是");
            }
        };
    })
    //  factory 实现数据共享，可以返回任何类型的数据
    /*
        angular.factory("Data",function(){}) 为 $provide.factory("Data",function(){}) 的简写模式
     */
    .service("Service", function () {
        return {
            "string": "我擦擦擦擦擦擦",
            "testFn":function(){
                console.log(1111);
            }
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
        Data.testFn();
    })
    .controller("secondController", function ($scope, Data, Service) {
        $scope.data = $scope.$$prevSibling.data;
        console.log($scope);
        //  通过寻找上下兄弟节点来共享数据
        $scope.Data = Data;
        $scope.Service = Service;
    });
//  链式调用angular下面的方法