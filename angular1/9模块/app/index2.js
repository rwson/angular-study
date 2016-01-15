/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", []);

//  在myApp下面声明控制器(firstController)
/*
*
*   也就是说firstController只能在myApp模块中使用，不再属于全局
*   <div ng-app="myApp">
*       <div ng-controller="firstController">
*           <input type="text" ng-model="name">
*           {{name}}
*       </div>
*   </div>
*
*   如果不指定控制器所在模块，则该控制器属于全局
*
*   var firstController = function($scope){
*       $scope.name = "小宋";
*   };
*
* */

myApp.controller("firstController", function ($scope) {
    $scope.name = "小宋";
});

angular.bootstrap(document,["myApp"]);