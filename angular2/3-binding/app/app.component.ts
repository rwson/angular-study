/**
 * 绑定事件
 */

import {Component} from "angular2/core";
import {ngFor} from "angular2/common";

@Component({
    "selector":"my-app",
    "template":`
            <form>
                <div>
                    <label for="title">Title:</label>
                    <input name="title" #newtitle>
                    <button (click)="addTitle(newtitle)">Submit</button>
                </div>
            </form>
               `
})

export class AppComponent{

    /**
     * 注册addTitle事件
     * @param title
     */
    addTitle(title: HTMLInputElement):void{
        console.log(`title addded ${title.value}`);
    }

}