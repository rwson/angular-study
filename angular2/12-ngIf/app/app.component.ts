/**
 * 组件嵌套
 */

import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `<div>
                    <p [style.background-color]="'yellow'" [style.font-size.px]="fontSize">啦啦啦</p>
                    <input type="button" value="加大字体" (click)="bigerFont()"/>
               </div>`
})

export class AppComponent {

    fontSize:number;

    constructor() {
        this.fontSize = 12;
    }

    bigerFont():void {
        ++ this.fontSize;
    }

}