/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [],function(){

})
.controller("firstController",["$scope",function($s){
        $s.status = false;
        $s.styles = {
            "color":"red",
            "margin":"50px"
        };
        $s.changeStatus = function(event){
            angular.element(event.target).text("切换为" + !$s.status);
            $s.status = !$s.status;
        };
        $s.src = "1111.jpg";
    }])
.controller("secondController",["$scope",function($sc){
        $sc.imgData = {
            "src":"1111.jpg",
            "width":200,
            "height":300
        };
    }]);