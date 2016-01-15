/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

var shopCar = function($scope){
    $scope.cart = [
        {
            "id":"1000",
            "name":"iphone 5s",
            "quality":3,
            "price":4600
        },
        {
            "id":"2001",
            "name":"iphone 5",
            "quality":30,
            "price":4000
        },
        {
            "id":"3002",
            "name":"Apple MAC",
            "quality":4,
            "price":13000
        },
        {
            "id":"4003",
            "name":"Apple iPad",
            "quality":5,
            "price":6300
        }
    ];

    /*
    *   计算总价
    * */
    $scope.totalPrice = function(){
        var totalPrice = 0;
        angular.forEach($scope.cart,function(item){
            totalPrice += parseInt(item.quality * item.price);
        });
        return totalPrice;
    };

    /*
    *   计算总数
    * */
    $scope.totalCount = function(){
        var totalCount = 0;
        angular.forEach($scope.cart,function(item){
            totalCount += parseInt(item.quality);
        });
        return totalCount;
    };

    /*
     *   找到一个元素的索引
     * */
    var findIndex = function(id){
        var index = -1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id === id){
                index = key;
            }
        });
        return index;
    };

    /*
    *   删除某项
    * */
    $scope.remove = function(id){
        var index = findIndex(id);
        if(index != -1){
            $scope.cart.splice(index,1);
        }
        //  通过ng-开头的都会执行脏检查
    };

    /*
    *   添加一个
    * */
    $scope.add = function(id){
        var index = findIndex(id);
        if(index != -1){
            ++ $scope.cart[index]["quality"];
        }
    };

    /*
    *   删除一个
    * */
    $scope.reduce = function(id){
        var index = findIndex(id);
        if(index != -1){
            var item = $scope.cart[index];
            if(item["quality"] > 1){
                -- $scope.cart[index]["quality"];
            }else{
                var confirmKey = confirm("你真的要从购物车中删除该产品么？");
                if(confirmKey){
                    $scope.remove(id);
                }
            }
        }
    };

    /*
     *  给对象添加$watch方法，监视对象内部属性是否发生变化
     */
    $scope.$watch("cart",function(newVal,oldVal){
        angular.forEach(newVal,function(item,key){
            if(item["quality"] <= 0){
                var confirmKey = confirm("你真的要从购物车中删除该产品么？");
                if(confirmKey){
                    $scope.remove(item["id"]);
                }else{
                    item["quality"] = oldVal[key]["quality"];
                }
            }else{
            }
        });
    },true);
  };