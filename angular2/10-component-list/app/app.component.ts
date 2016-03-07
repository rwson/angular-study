/**
 * 组件嵌套
 */

import {Component} from "angular2/core";
import {NgFor} from "angular2/common";
import {pair} from "./pair";
import {PairComponent} from "./pair.component";

@Component({
    "selector": "my-app",
    "template": `
                <div>我是父组件</div>
                <pair-component *ngFor="#mypair of pairs" [nameValue]="mypair"></pair-component>
                `,
    directives: [NgFor,PairComponent]
})

export class AppComponent {

    pairs: pair[];

    constructor() {
        this.pairs = [
            new pair("foo", 6),
            new pair("bar", 9)
        ];

    }

}
