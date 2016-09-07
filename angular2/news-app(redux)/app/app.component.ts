import {Component} from "@angular/core";
import {NgClass} from '@angular/common'
import {NgRedux, select} from "ng2-redux";
import {Observable} from "rxjs/Observable";

import {CounterActions} from "./actions";

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li *ngFor="let item of data$ | async">
                <a href="test/{{item.id}}">{{item.title}}</a>
            </li>
        </ul>
        <p>
            <button (click)="actions.fetchPage(1)">1</button>
            <button (click)="actions.fetchPage(2)">2</button>
            <button (click)="actions.fetchPage(3)">3</button>
            <button (click)="actions.fetchPage(4)">4</button>
            <button (click)="actions.fetchPage(5)">5</button>
        </p>
    `,
    directives: [NgClass]
})

export class AppComponent {
    @select() curPage$: Observable<number>;
    @select() data$: Observable<any>;

    constructor(private ngRedux: NgRedux<any>, private actions: CounterActions) {
        this.actions.fetchPage(1);
    }

}
