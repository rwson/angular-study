/**
 * app组件
 */

import {Component} from "angular2/core";
import {ngFor} from "angular2/common";

@Component({
    "selector":"my-app",
    "template": `
            <ul>
                <li *ngFor="#name of names">{{name}}</li>
            </ul>
            `,
    "directive":[ngFor]
})

export class AppComponent{

    names:string[];

    constructor(){
        this.names = ["HTML5","CSS3","JavaScript","Angular.js","Node.js"];
    }

}