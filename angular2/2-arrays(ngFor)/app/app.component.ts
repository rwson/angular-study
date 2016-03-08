/**
 * app组件
 */

import {Component} from "angular2/core";
import {ngFor} from "angular2/common";

@Component({
    "selector": "my-app",
    "template": `
            <ul>
                <li *ngFor="#name of names">{{name}}</li>
                <li *ngFor="#n of numArrs; #i = index">
                    <span>{{n + i}}</span>
                </li>
            </ul>
            `,
    "directive": [ngFor]
})

export class AppComponent {

    names:string[];
    numArrs:number[];

    constructor() {
        this.names = ["HTML5", "CSS3", "JavaScript", "Angular.js", "Node.js"];
        this.numArrs = [1, 2, 3];
    }

}