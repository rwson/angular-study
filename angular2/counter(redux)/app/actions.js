"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_redux_1 = require("ng2-redux");
var CounterActions = (function () {
    function CounterActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    CounterActions.prototype.increment = function () {
        this.ngRedux.dispatch({ type: CounterActions.INCREMENT });
    };
    CounterActions.prototype.decrement = function () {
        this.ngRedux.dispatch({ type: CounterActions.DECREMENT });
    };
    CounterActions.INCREMENT = "INCREMENT";
    CounterActions.DECREMENT = "DECREMENT";
    CounterActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], CounterActions);
    return CounterActions;
}());
exports.CounterActions = CounterActions;
//# sourceMappingURL=actions.js.map