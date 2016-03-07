/**
 * 子组件
 */
import {Component} from "angular2/core";

@Component({
    "selector": "child-one",
    "template": `<div>传入的数据为:{{data}}</div>`,
    "inputs": ["data"]
})

export class ChildOneComponent {

    data:number;

    constructor() {
        this.data = 100000;
    }

}