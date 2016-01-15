/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [],function($filterProvider,$provide,$controllerProvider){
    /*
    *   自定义服务共享数据
    * */
    $provide.service("Data",function(){
        return [
            {
                "name":"小宋",
                "age":"20",
                "place":"NanJing"
            },
            {
                "name":"小明",
                "age":"18",
                "place":"BeiJing"
            },
            {
                "name":"小高",
                "age":"25",
                "place":"NanJing"
            },
            {
                "name":"小松",
                "age":"19",
                "place":"HangZhou"
            }
        ];
    });
    /*
    *   自定义过滤器
    * */
    $filterProvider.register("filterAge",function(){
        return function(obj,argu){
            var Obj = [];
            angular.forEach(obj,function(o){
                if(o.age <= 20){
                    Obj.push(o);
                }
            });
            return Obj;
        };
    });
    /*
    *   自定义控制器
    * */
    $controllerProvider.register("firstController",function($scope,Data){
        $scope.data = Data;
    });
});

/*
*
*   自定义过滤器实现法2(简写):
*
*   myApp.filter("filterAge",function(){
*       return function(obj){
*           var Obj = [];
*           angular.forEach(obj,function(o){
*               if(o["age"] > 20){
*                   Obj.push(o);
*               }
*           });
*           return Obj;
*       };
*   });
* */