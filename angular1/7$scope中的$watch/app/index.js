/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

var firstController = function($scope){
    $scope.name = "张三";
    $scope.data = {
        "name":"李四",
        "count":20
    };
    $scope.count = 0;
    //  监听一个model，当一个model发生变化时，就会出发第二个函数
    /*
        $scope.$watch(model/object,function(old,new){},(true));
        第一个参数为$scope下的数据(单个数据或对象)
        第二个参数为第一个参数发生改变时触发的事件
        第三个参数只有在第一个参数为对象的时候才填写，并且为true
     */
    $scope.$watch("name",function(newValue,oldValue){
        console.log("old" + oldValue);
        console.log("new" + newValue);
        ++ $scope.count;
        if($scope.count > 10){
            $scope.name = "已经大于10次了！";
        }
    });
    //  监听一个对象，指定监听对象内部属性
    $scope.$watch("data",function(){},true);
};