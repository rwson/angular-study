/**
 * 添加,删除
 */

import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `<div>
                    <ul>
                       <li *ngFor="#todo of todos" [ngClass]="{completed:todo.completed}">
                           <span>{{todo.title}}</span>
                           <input type="checkbox" [checked]="todo.completed" (click)="toggleCompleted(todo.id)" />
                           <input type="button" (click)="destoryTodo(todo.id)" value="删除"/>
                       </li>
                    </ul>
                    <div>
                        <input type="text" placeholder="请输入标题" (keyup)="handleKeyUp($event)" [(ngModel)]="todoTitle" />
                        <label (click)="toggleStatus()">完成<input type="checkbox" [checked]="checkCompleted" /></label>
                        <input type="button" value="添加" (click)="addTodo()" />
                    </div>
                    <div>
                        <a href="javascript:;" (click)="showFilter()">全部</a>
                        <a href="javascript:;" (click)="showFilter(false)">未完成</a>
                        <a href="javascript:;" (click)="showFilter(true)">已完成</a>
                    </div>
               </div>`,
    styles: [
        `
        .completed{
            text-decoration:line-through;
            color:#ccc;
        }
        `
    ]
})

export class AppComponent {

    todos:object[];         //  todo列表
    todosBack:object[];     //  todo项列表
    todoTitle:string;       //  添加todo项输入的标题
    checkCompleted:boolean; //  组件的完成状态

    constructor() {
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
    addTodo():void {
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
    }

    /**
     * 根据id切换组件的完成状态
     * @param id    被切换todo项的id
     */
    toggleCompleted(id):void {
        this.todos = this.todos.map((todo) => {
            return todo.id === id ? Object.assign({}, todo, {
                "completed": !todo.completed
            }) : todo;
        });
    }

    /**
     * 改变追加todo时的完成状态
     */
    toggleStatus():void {
        this.checkCompleted = !this.checkCompleted;
    }

    /**
     * 根据id删除一个todo
     * @param id    被删除项的id
     */
    destoryTodo(id):void {
        var todos = this.todos;
        this.todos = [];
        todos.forEach((todo) => {
            if (todo.id !== id) {
                this.todos.push(todo);
            }
        });
        this.todosBack = this.todos;
        todos = null;
    }

    /**
     * 处理输入框键盘抬起事件
     * @param ev    事件句柄
     */
    handleKeyUp(ev):void {
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
    }

    /**
     * 根据过滤条件显示todo项
     * @param filter    过滤条件
     */
    showFilter(filter):void {
        if (Object.prototype.toString.call(filter) === "[object Boolean]") {
            //  传进来的是true/false
            this.todos = [];
            this.todosBack.forEach((todo) => {
                if (filter === todo.completed) {
                    this.todos.push(todo);
                }
            });
        } else {
            //  所有的
            this.todos = this.todosBack;
        }
    }

}