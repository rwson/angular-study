var myApp = angular.module("myApp", [])
    .controller("firstController", ["$scope", "$http", function ($scope, $h) {
        $h({
            "method":"get",
            "url":"data/data.json"
        }).success(function(res){
            $scope.data = res;
        }).error(function(){
            $scope.data = {};
        });
    }]);
//    自定义控制器