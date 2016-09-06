import { Component, Input } from "@angular/core";
import { NgRedux, select } from "ng2-redux";
import { Observable } from "rxjs/Observable";
import { CounterActions } from "./actions";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular Counter App With Redux</h1>
        <p>Current Value: {{ counter$ | async }}</p>
        <p>
            <button (click)="actions.increment()">+</button>
            <button (click)="actions.decrement()">-</button>
        </p>
    `
})

export class AppComponent { 
    @select() counter$: Observable<number>;
    num: Number;

    constructor(private ngRedux: NgRedux<any>,private actions: CounterActions) {
    }

}
