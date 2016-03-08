/**
 * 组件嵌套
 */

import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `<div>
                    <p [style.background-color]="'yellow'" [style.font-size.px]="fontSize">啦啦啦</p>
                    <button (click)="biggerFont()">加大</button>
                </div>`
})

export class AppComponent {

    fontSize:number;

    constructor() {
        this.fontSize = 12;
    }

    biggerFont():void {
        this.fontSize ++;
    }

}