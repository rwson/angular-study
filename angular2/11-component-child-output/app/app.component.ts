/**
 * 组件嵌套
 */

import {Component} from "angular2/core";
import {ImageComponent} from "./image.component";

@Component({
    selector: "my-app",

    template: ` <div>我是父组件,点击图片吧!</div>
                <clickable-image (clicked)="pressed($event)"></clickable-image>`,

    directives: [ImageComponent]
})

export class AppComponent {

    constructor() {

    }

    pressed(event: MouseEvent){
        alert("Image has been clicked");
    }
}