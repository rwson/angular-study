/**
 * 组件嵌套
 */

import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `<h4>当前选择: {{ choice }}</h4>
                <div class="ui raised segment">
                    <ul [ngSwitch]="choice">
                        <li *ngSwitchWhen="1">第一项</li>
                        <li *ngSwitchWhen="2">第二项</li>
                        <li *ngSwitchWhen="3">第三项</li>
                        <li *ngSwitchWhen="4">第四项</li>
                        <li *ngSwitchWhen="5">第五项</li>
                        <li *ngSwitchDefault>默认选择</li>
                    </ul>
                </div>
                <div style="margin-top: 20px;">
                    <button (click)="nextChoice()">下一项</button>
                </div>`
})

export class AppComponent {

    choice:number;

    constructor() {
        this.choice = 1;
    }

    nextChoice():void {
        this.choice ++;
        if(this.choice > 6){
            this.choice = 1;
        }
    }

}