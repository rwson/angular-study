/**
 * 组件嵌套
 */

import {Component} from "angular2/core";
import {ChildOneComponent} from "./childOne.component";

@Component({
    "selector": "my-app",
    "template": `<div>我是父组件1</div>
        <child-one data={{mydata}}></child-one>`,
    "directives": [ChildOneComponent]
})

export class AppComponent {

    mydata: number = 10;

    constructor() {
        setInterval(()=> this.mydata ++, 1000);
    }

}