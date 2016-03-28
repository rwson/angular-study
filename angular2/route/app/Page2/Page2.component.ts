/**
 * Page2.component
 * build by rwson @3/28/16
 * mail:rw_Song@sina.com
 */

import { Component } from "angular2/core";

@Component({
    "template":`<div>
        <a href="javascript:;" (click)="clickedCallback()">点我啊</a>
    </div>`
})

export class Page2 {

    constructor() {
        this.message = "Page1";
    }

    clickedCallback() {
        alert("点我干啥!");
    }

}
