/**
 * 绑定标签上的相关属性
 */

import {Component} from "angular2/core";

@Component({
    "selector": "my-app",
    "template": `<input [value]="'Hello ' + name">`
})

export class AppComponent {

    name:string;

    constructor() {
        this.name = "宋帅比";
    }

}