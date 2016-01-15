/**
 *index.js
 *build by rwsong
 *build @ 2014/12/7
 */

//  创建一个模块
var myApp = angular.module("myApp", [],["$compileProvider",function($compileProvider){
    //  自定义属性
    //  如果名字为"xxx-yyy"，应该定义成"xxxYyy"，即驼峰命名法
    $compileProvider.directive("customTags",function(){
        return {
//            "restrict":"E",
//            "restrict":"C",
//            "restrict":"A",
//            "restrict":"M",
            "restrict":"ECAM",
            "template":"<div>custom-tags</div>",
            "replace":true
        };
        /*

            参数解释:

            restrict:指令在模板中的使用方式
            E:元素，custom-tags可以做标签名
            C:样式，元素的类名 class="custom-tags"
            A:属性，元素的属性 custom-tags
            M:注释形式 一般不用
            四个属性值可以同时使用 ECAM

            template:模板内容，该内容会根据replace参数的设置替换节点或只替换节点内容

            replace:通常定义为true，意思是替换该指令对应的标签/属性，因为该指令对应的标签/属性可能不是标准的

         */
    });
}])
.controller("firstController",function($scope){

});
//.directive("customTags",function(){

//    })
//  自定义指令的简写方法