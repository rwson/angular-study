/**
 * 添加,删除
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
                    this.todos = [
                        {
                            "title": "小宋是帅比",
                            "id": 1,
                            "completed": false
                        },
                        {
                            "title": "小宋是大帅比",
                            "id": 2,
                            "completed": false
                        },
                        {
                            "title": "小宋是超级帅比",
                            "id": 3,
                            "completed": false
                        },
                        {
                            "title": "小宋是超级大帅比",
                            "id": 4,
                            "completed": false
                        }
                    ];
                    this.todosBack = this.todos;
                    this.todoTitle = "";
                    this.checkCompleted = false;
                }
                /**
                 * 添加一个新的todo项
                 */
                AppComponent.prototype.addTodo = function () {
                    if (!this.todoTitle) {
                        alert("请输入标题");
                        return;
                    }
                    this.todos.push({
                        "title": this.todoTitle,
                        "id": (+new Date()).toString(36),
                        "completed": this.checkCompleted
                    });
                    this.todosBack = this.todos;
                    this.todoTitle = "";
                    this.todosBack = this.todos;
                };
                /**
                 * 根据id切换组件的完成状态
                 * @param id    被切换todo项的id
                 */
                AppComponent.prototype.toggleCompleted = function (id) {
                    this.todos = this.todos.map(function (todo) {
                        return todo.id === id ? Object.assign({}, todo, {
                            "completed": !todo.completed
                        }) : todo;
                    });
                };
                /**
                 * 改变追加todo时的完成状态
                 */
                AppComponent.prototype.toggleStatus = function () {
                    this.checkCompleted = !this.checkCompleted;
                };
                /**
                 * 根据id删除一个todo
                 * @param id    被删除项的id
                 */
                AppComponent.prototype.destoryTodo = function (id) {
                    var _this = this;
                    var todos = this.todos;
                    this.todos = [];
                    todos.forEach(function (todo) {
                        if (todo.id !== id) {
                            _this.todos.push(todo);
                        }
                    });
                    this.todosBack = this.todos;
                    todos = null;
                };
                /**
                 * 处理输入框键盘抬起事件
                 * @param ev    事件句柄
                 */
                AppComponent.prototype.handleKeyUp = function (ev) {
                    if (ev.keyCode === 13) {
                        if (!this.todoTitle) {
                            alert("请输入标题");
                            return;
                        }
                        this.todos.push({
                            "title": this.todoTitle,
                            "id": (+new Date()).toString(36),
                            "completed": this.checkCompleted
                        });
                        this.todosBack = this.todos;
                        this.todoTitle = "";
                    }
                };
                /**
                 * 根据过滤条件显示todo项
                 * @param filter    过滤条件
                 */
                AppComponent.prototype.showFilter = function (filter) {
                    var _this = this;
                    if (Object.prototype.toString.call(filter) === "[object Boolean]") {
                        //  传进来的是true/false
                        this.todos = [];
                        this.todosBack.forEach(function (todo) {
                            if (filter === todo.completed) {
                                _this.todos.push(todo);
                            }
                        });
                    }
                    else {
                        //  所有的
                        this.todos = this.todosBack;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "<div>\n                    <ul>\n                       <li *ngFor=\"#todo of todos\" [ngClass]=\"{completed:todo.completed}\">\n                           <span>{{todo.title}}</span>\n                           <input type=\"checkbox\" [checked]=\"todo.completed\" (click)=\"toggleCompleted(todo.id)\" />\n                           <input type=\"button\" (click)=\"destoryTodo(todo.id)\" value=\"\u5220\u9664\"/>\n                       </li>\n                    </ul>\n                    <div>\n                        <input type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u6807\u9898\" (keyup)=\"handleKeyUp($event)\" [(ngModel)]=\"todoTitle\" />\n                        <label (click)=\"toggleStatus()\">\u5B8C\u6210<input type=\"checkbox\" [checked]=\"checkCompleted\" /></label>\n                        <input type=\"button\" value=\"\u6DFB\u52A0\" (click)=\"addTodo()\" />\n                    </div>\n                    <div>\n                        <a href=\"javascript:;\" (click)=\"showFilter()\">\u5168\u90E8</a>\n                        <a href=\"javascript:;\" (click)=\"showFilter(false)\">\u672A\u5B8C\u6210</a>\n                        <a href=\"javascript:;\" (click)=\"showFilter(true)\">\u5DF2\u5B8C\u6210</a>\n                    </div>\n               </div>",
                        styles: [
                            "\n        .completed{\n            text-decoration:line-through;\n            color:#ccc;\n        }\n        "
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