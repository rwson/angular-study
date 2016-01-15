/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */
var product = angular.module("product",[])

.service("productData",function(){
        return [{
            "id":"1000",
            "name":"iphone 5s",
            "price":4600
        },
            {
                "id":"2001",
                "name":"iphone 5",
                "price":4000
            },
            {
                "id":"3002",
                "name":"Apple MAC",
                "price":13000
            },
            {
                "id":"4003",
                "name":"Apple iPad",
                "price":6300
            }];
    })


.controller("productController",function($scope,productData){
        $scope.data = productData;

        $scope.orderType = "id";

        $scope.order = "-";

        $scope.changeOrderType = function(col){
            $scope.orderType = col;
            $scope.order = $scope.order == "-" ? "" : "-";
        };
    });
