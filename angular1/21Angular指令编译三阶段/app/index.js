/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

/*
 AngularJs 指令编译三阶段
 1、标准浏览器API转化
 2、Angular compile
 3、Angular link
 */

//  创建一个模块
var i = 0;
var myApp = angular.module("myApp", [], ["$compileProvider", function () {
}])
    .directive("customTags", function () {
        return {
            "restrict": "ECAM",
            "template": "<div>{{user.name}}</div>",
            "replace": true,
            /**
             *  tElement    当前元素的jQuery对象
             *  tAttrs      当前元素的属性
             *  transclude  当前没有，默认false
             */
            "compile":function(tElement,tAttrs,transclude){
                tElement.append(angular.element("<div>{{user.name}}<br/>{{user.count}}</div>"));
                //  改变DOM结构
                console.log("customTags compile 编译阶段...");
                /*return function(){
                    console.log("returned compile");
                };
                postLink
                */
                return {
                    /**
                     *
                     * @param scope     当前scope的作用域
                     * @param iElement  当前元素
                     * @param iAttrs    当前元素的属性
                     * @param controller
                     */
                    "pre":function preLink(scope,iElement,iAttrs,controller){
/*                        console.log("scope");
                        console.log(scope);
                        console.log("iElement");
                        console.log(iElement);
                        console.log("iAttrs");
                        console.log(iAttrs);
                        console.log("controller");
                        console.log(controller);*/
                        iElement.on("click",function(){
                            scope.$apply(function(){
                                scope.user.name = "aaaaaaaaaaa123";
                                scope.user.count = ++ i;
                            });
                        });
                        console.log("customTags preLink...");
                    },
                    /*
                        preLink:表示在编译阶段之后，指令连接到子元素之前执行
                     */
                    "post":function postLink(scope,iElement,iAttrs,controller){
                        console.log("customTags all child directive postLink...");
                    }
                    /*
                        postLink:所有子元素的指令连接后才执行
                     */
                };
            }
        };
    })

    .directive("customTags2", function () {
        return {
            "restrict": "ECAM",
            "replace": true,
            "compile":function(){
                console.log("customTags2 compile 编译阶段...");
                return {
                    "pre":function preLink(){
                        console.log("customTags2 preLink...");
                    },
                    /*
                     preLink:表示在编译阶段之后，指令连接到子元素之前执行
                     */
                    "post":function postLink(){
                        console.log("customTags2 all child directive postLink...");
                    }
                    /*
                     postLink:所有子元素的指令连接后才执行
                     */
                };
            },
            "link":function(){
            }
            /*
            *   link的作用就是作用域(scope)绑定和事件绑定,相当于postLink
            * */
        };
    })

    //  简写
    .directive("customTags3", function () {
        return function(){};
        //  这边返回的function就是postLink
    })

    .controller("firstController", ["$scope", function ($scope) {
        $scope.users = [
            {
                "id": 10,
                "name": "张三"
            },{
                "id": 20,
                "name": "李四"
            }
        ];
    }]);