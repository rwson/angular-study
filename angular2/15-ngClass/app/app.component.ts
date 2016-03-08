/**
 * 组件嵌套
 */

import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `<div>
                    <p [ngClass]="{bordered:true}">啦啦啦</p>
                    <p [ngClass]="{bordered:testFn()}">啦啦啦</p>
                    <p (click)=toggleBool() [ngClass]="{bordered:hasBored}">啦啦啦，点我啊</p>
                    <p (click)=addClass() [ngClass]="classList">么么哒，点我啊</p>
                </div>`,
    styles: [
        `
        .bordered{
            border:1px solid red;
            background:red;
        }
        `
    ]
})

export class AppComponent {

    hasBored:boolean;

    classList:string[];

    constructor() {
        this.hasBored = false;
        this.classList = ["bordered","fuck"];
    }

    addClass():void {
        this.classList.push((+new Date()).toString(36));
    }

    toggleBool():void {
        this.hasBored = !this.hasBored;
    }

    testFn():boolean {
        return true;
    }

}