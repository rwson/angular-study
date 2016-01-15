/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [],function(){

})
.factory("customFactory",["$window",function(a){
        return a;
    }])

/**
 *  隐式的依赖注入
 */
.controller("firstController",function($scope){})

/**
 *  显式依赖注入,推荐使用
 */
.controller("secondController",["$scope","$filter","customFactory",function(a,b,c){
        console.log(b("json")([1,2,3,4]));
        console.log(c);
    }]);

/**
 *  在声明时不直接注入,而是在控制器后面指定控制器的$inject属性来注入
 */
function otherController(a){
    a.data = {
        "name":"小宋",
        "age":"22",
        "sex":"male"
    };
    console.log(a);
    console.log(a.data);
}
otherController.$inject = ["$scope"];
