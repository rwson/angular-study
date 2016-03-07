/**
 * 子组件
 */
System.register(["angular2/core", "./sub.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sub_component_1;
    var ChildOneComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sub_component_1_1) {
                sub_component_1 = sub_component_1_1;
            }],
        execute: function() {
            ChildOneComponent = (function () {
                function ChildOneComponent() {
                }
                ChildOneComponent = __decorate([
                    core_1.Component({
                        "selector": "child-one",
                        "template": "<div>\u6211\u662F\u5B50\u7EC4\u4EF61</div><sub-component></sub-component>",
                        "directives": [sub_component_1.SubComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildOneComponent);
                return ChildOneComponent;
            }());
            exports_1("ChildOneComponent", ChildOneComponent);
        }
    }
});
//# sourceMappingURL=childOne.component.js.map