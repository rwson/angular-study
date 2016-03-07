import {Component} from "angular2/core";
import {pair} from "./pair";

@Component({
    selector: "pair-component",
    template: `<div>
                    <span>{{nameValue.name}}: </span>
                    <span>{{nameValue.value}}</span>
               </div>`,
    inputs: ["nameValue"]
})
export class PairComponent {

    nameValue: pair;

    constructor() {

    }

}