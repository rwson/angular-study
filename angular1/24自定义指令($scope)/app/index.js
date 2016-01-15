/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [], ["$compileProvider", function () {
}])
    .directive("bookList", function () {
        return {
            "restrict": "ECAM",
            "controller":function($scope){
//                &books
//                $scope.books = $scope.a();
//                $scope.books = $scope.b;
//                $scope.b.push({
//                    "name":"HTML5"
//                });
                $scope.name = $scope.c;
            },
            //  创建一个有继承性的独立作用域
            "scope":{
//                "a":"&books"
//                "b":"=parentBooks"
                "c":"@scopeNames"
            },
            /*
                scope属性值：
                scope:true
                true:创建一个独立作用域，继承父节点的内容
                scope:false
                false:两个scope相同，共享一个作用域
                scope:{}
                对象:创建一个独立的作用域，但是没法享受到父元素的
                &:作用域把父作用域的属性包装成函数，从而以函数的方式去读取父作用域的属性
                =:作用域的属性和父元素的属性进行双向绑定，任何一方的修改都会影响到对方(相当于引用)
                @:只读取父作用域里的值单项绑定，改变不了父元素(但是只能为属性，不能为对象类型)
             */
            "controllerAs":"bookListController",
            "template":"<div><ul><li ng-repeat='book in books'>{{book.name}}</li></ul></div>",
            "replace":true
        };
    })
    //  自定义事件指令
    .directive("customEvent",function(){
        return {
            "restrict": "ECAM",
            "link":function(scope,ele,attr){
                ele.on("click",function(ev){
                    scope.$apply(attr["customEvent"],ev);
                });
            }
        };
    })
    .controller("firstController", ["$scope", function ($scope) {
        $scope.books = [
            {
                "name":"PHP"
            },{
                "name":"javaScript"
            },{
                "name":"java"
            }
        ];
        $scope.name = "小宋";

        $scope.showName = function(name){
            alert(name);
        };
    }]);