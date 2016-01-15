/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [], ["$compileProvider", function () {
}])
    .directive("customTags", function () {
        return {
            "restrict": "ECAM",
            "templateUrl": "tmp/tmp.html",
            "replace": true
            /*

             参数解释:

             restrict:指令在模板中的使用方式
             E:元素，custom-tags可以做标签名
             C:样式，元素的类名
             A:属性，元素的属性
             M:注释形式
             四个属性值可以同时使用

             template:模板内容，该内容会根据replace参数的设置替换节点或只替换节点内容

             replace:通常定义为true

             templateUrl:模板的路径，注意(当replace属性为true时，模板文件里面替换的内容外面一定需要标签)
             <div>
             {{param.getArg}}
             </div>

             */
        };
    })
    .directive("customTags2", function () {
        return {
            "restrict": "ECAM",
            "templateUrl": "tmp/tmp.html",
            "replace": true
            //  当指定templateUrl并且replace为true的时候，模板文件里面需要加上一层标签
        };
    })
    .controller("firstController", ["$scope", function ($scope) {
        $scope.name = "小宋";

        $scope.fuck = function(){
            alert("fuck");
        }
    }]);