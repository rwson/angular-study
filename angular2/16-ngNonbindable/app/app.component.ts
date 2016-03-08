/**
 * 组件嵌套
 */

import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `<div>
                    <div *ngFor="#j of js; #i = index">
                    <span ngNonBindable>{{i + j}}</span>
                        <span>{{i + j}}</span>
                    </div>
                </div>`
})

export class AppComponent {

    js:number[];

    constructor() {
        this.js = [1,2,3];
    }

}