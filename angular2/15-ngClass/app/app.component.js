/**
 * 组件嵌套
 */
System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.hasBored = false;
                    this.classList = ["bordered", "fuck"];
                }
                AppComponent.prototype.addClass = function () {
                    this.classList.push((+new Date()).toString(36));
                };
                AppComponent.prototype.toggleBool = function () {
                    this.hasBored = !this.hasBored;
                };
                AppComponent.prototype.testFn = function () {
                    return true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<div>\n                    <p [ngClass]=\"{bordered:true}\">\u5566\u5566\u5566</p>\n                    <p [ngClass]=\"{bordered:testFn()}\">\u5566\u5566\u5566</p>\n                    <p (click)=toggleBool() [ngClass]=\"{bordered:hasBored}\">\u5566\u5566\u5566\uFF0C\u70B9\u6211\u554A</p>\n                    <p (click)=addClass() [ngClass]=\"classList\">\u4E48\u4E48\u54D2\uFF0C\u70B9\u6211\u554A</p>\n                </div>",
                        styles: [
                            "\n        .bordered{\n            border:1px solid red;\n            background:red;\n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map