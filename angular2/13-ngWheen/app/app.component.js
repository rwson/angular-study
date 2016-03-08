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
                    this.choice = 1;
                }
                AppComponent.prototype.nextChoice = function () {
                    this.choice++;
                    if (this.choice > 6) {
                        this.choice = 1;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<h4>\u5F53\u524D\u9009\u62E9: {{ choice }}</h4>\n                <div class=\"ui raised segment\">\n                    <ul [ngSwitch]=\"choice\">\n                        <li *ngSwitchWhen=\"1\">\u7B2C\u4E00\u9879</li>\n                        <li *ngSwitchWhen=\"2\">\u7B2C\u4E8C\u9879</li>\n                        <li *ngSwitchWhen=\"3\">\u7B2C\u4E09\u9879</li>\n                        <li *ngSwitchWhen=\"4\">\u7B2C\u56DB\u9879</li>\n                        <li *ngSwitchWhen=\"5\">\u7B2C\u4E94\u9879</li>\n                        <li *ngSwitchDefault>\u9ED8\u8BA4\u9009\u62E9</li>\n                    </ul>\n                </div>\n                <div style=\"margin-top: 20px;\">\n                    <button (click)=\"nextChoice()\">\u4E0B\u4E00\u9879</button>\n                </div>"
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