/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

var firstController = function($scope){
    var date = new Date();
    $scope.date = date.getFullYear() + "年" + (1 + date.getMonth()) + "月" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    //setInterval(function(){
        //  这里date虽然发生改变，但是没有主动出发脏检查
    //var date = new Date();
    //$scope.date = date.getFullYear() + "年" + (1 + date.getMonth()) + "月" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    //    console.log($scope.date);
    //},1000);
    setInterval(function(){
//        /*
//            $sope.$apply(function(){
//                ...
//            });
//            执行脏检查，并通知view层
//         */
        $scope.$apply(function(){
            var date = new Date();
            $scope.date = date.getFullYear() + "年" + (1 + date.getMonth()) + "月" + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        });
    },1000);
};