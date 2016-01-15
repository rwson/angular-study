var myApp = angular.module("myApp", [])
    .factory("Data", function () {
        return [
            {
                "title": "No.1",
                "content": "No.1 content"
            },
            {
                "title": "No.2",
                "content": "No.2 content"
            },
            {
                "title": "No.3",
                "content": "No.3 content"
            }
        ];
    })
//    factory实现数据共享
    .controller("firstController", ["$scope", "Data", function ($scope, Data) {
        $scope.data = Data;
    }])
//    自定义控制器
    .directive("kittencupGroup", function () {
        return {
            "restrict": "E",
            //  做为HTML元素标签使用
            "replace": true,
            "template": "<div class='panel-group' ng-transclude></div>",
            //  指定ng-transclude属性来注入二级标签
            "transclude":true,
            "controllerAs":"kittencupGroupController",
            "controller":function(){
                this.groups = [];
                this.closeOther = function(now){
                    angular.forEach(this.groups,function(scope){
                        if(scope !== now){
                            scope.open = false;
                        }
                    });
                };
            }
        };
    })
//    自定义指令kittencupGroup，最外层标签
    .directive("kittencupCollapse",function(){
        return {
            "restrict": "E",
            "replace": true,
            "require":"^kittencupGroup",
            "templateUrl":"tmp/tmp.html",
            "scope":{
//                "heading":"@heading"
                "heading":"@"
                //  此处的@headding和@作用相同
            },
            "link":function(scope,element,attrs,kittencupGroupController){
                scope.open = false;
                scope.changeOpen = function(){
                    scope.open = !scope.open;
                    kittencupGroupController.closeOther(scope);
                };
                kittencupGroupController.groups.push(scope);
            },
            "transclude":true
        };
    });