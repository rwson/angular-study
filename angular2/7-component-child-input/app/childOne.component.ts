/**
 * 子组件
 */
import {Component} from "angular2/core";

@Component({
    "selector": "child-one",
    "template": `<div>传入的数据为:{{data}}</div>`,
    "inputs":["data"]
})

export class ChildOneComponent {

    constructor() {

    }

}