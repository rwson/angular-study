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
                    $scope.$apply(function(){
                        $scope.books.push({
                            "name":"AngularJs"
                        });
                    });
                };
                /*$scope.addBook = function(){
                    console.log(11);
                };*/
            },
            "controllerAs":"bookListController",
            "template":"<div><ul><li ng-repeat='book in books'>{{book.name}}</li></ul><book-add></book-add></div>",
            "replace":true
        };
    })
    .directive("bookAdd",function(){
        return {
            "restrict":"ECAM",
            "require":"^bookList",
            "template":"<button type='button'>添加</button>",
            "replace":true,
            "link":function(scope,iElements,iAttrs,bookListController){
                iElements.on("click",function(){
                    bookListController.addBook();
                });
            }
        };
    })
    .controller("firstController", ["$scope", function ($scope) {
//        console.log($scope);
    }]);