/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [], function ($provide) {

    //  自定义服务，必须返回一个对象，不能返回基本类型的(string,number,boolean,undefined,null)
    //  且该服务就是里面$get方法的返回值
    $provide.provider("CustomService", function () {
        this.$get = function () {
//            return {
//                "message": "customService"
//            };
            return function (win) {
                win.mess = "我是AngularJs中CustomService服务!"
            }(window);
        }
    });

    //  factory方法，可返回任何类型(基本类型和对象)
    $provide.factory("CustomFactory", function () {
        return "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊";
    });

    $provide.factory("CustomFactory2", function () {
        return {
            "name":"123",
            "age":22
        };
    });
    /*
     *
     *   简写
     *   myApp.factory("CustomFactory",function(){
     *       return [1,2,3,4,5];
     *   });
     *
     * */

    //  自定义服务，必须返回一个对象，不能返回基本类型的(string,number,boolean,undefined,null)
    $provide.service("CustomService2", function () {
        return ["1", "2"];
    });

    $provide.service("CustomService3", function () {
        return "1";
    });
    /*
     *
     *   简写
     *   myApp.service("CustomService2",function(){
     *       return [1,2];
     *   });
     *
     * */
});

//  在myApp下面声明控制器
myApp.controller("firstController", function ($scope, CustomService, CustomService2, CustomFactory,CustomFactory2,CustomService3) {
    $scope.name = "小宋";
    console.log(CustomFactory);
    console.log(CustomFactory2);
});