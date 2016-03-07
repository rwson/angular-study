/**
 * 子组件
 */

import {Component} from "angular2/core";
import {SubComponent} from "./sub.component";

@Component({
    "selector": "child-one",
    "template": `<div>我是子组件1</div><sub-component></sub-component>`,
    "directives":[SubComponent]
})

export class ChildOneComponent {

    constructor() {
    }

}