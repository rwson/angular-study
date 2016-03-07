/**
 * 组件嵌套
 */

import {Component} from "angular2/core";
import {ChildOneComponent} from "./childOne.component";
import {ChildTwoComponent} from "./childTwo.component";

@Component({
    "selector": "my-app",
    "template": `<div>我是父组件1</div>
        <child-one></child-one><child-two></child-two>`,
    "directives": [ChildOneComponent,ChildTwoComponent]
})

export class AppComponent {

    constructor() {

    }

}