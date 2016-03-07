/**
 * 模板字符串
 * */

import {Component} from "angular2/core";

@Component({
    "selector": "my-app",
    "template": `<h1>Hello {{name}}</h1>`
    //    "template":"<h1>Hello {{name}}</h1>",上面这种也可以
})

export class AppComponent {

    name:string;

    constructor() {
        this.name = "宋帅比!";
    }

}