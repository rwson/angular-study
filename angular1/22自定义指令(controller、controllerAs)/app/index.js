/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

var time = 1;

//  创建一个模块
var myApp = angular.module("myApp", [], ["$compileProvider", function () {
}])
    .directive("bookList", function () {
        return {
            "restrict": "ECAM",
            "controller":function($scope){
                $scope.books = [
                    {
                        "name":"PHP"
                    },{
                        "name":"javaScript"
                    },{
                        "name":"java"
                    }
                ];
                this.addBook = function(){
                    alert("擦擦擦 x" + time++);
                };
                /*$scope.addBook = function(){
                    console.log(11);
                };*/
            },
            "controllerAs":"bookListController",
            "template":"<ul><li ng-repeat='book in books'>{{book.name}}</li></ul>",
            "replace":true,
            "link":function($scope,iElement,iAttrs,bookListController){
                iElement.on("click",function(){
                    bookListController.addBook();
                    /*$scope.addBook();*/
                });
            }
        };
    })
    .controller("firstController", ["$scope", function ($scope) {
//        console.log($scope);
    }]);