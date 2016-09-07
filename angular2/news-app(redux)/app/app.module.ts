import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {NgRedux, NgReduxModule} from "ng2-redux";
import {AppState, INITIAL_STATE, rootReducer} from "./store";
import {CounterActions} from "./actions";

@NgModule({
    imports: [BrowserModule, HttpModule, NgReduxModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [NgRedux, CounterActions]
})

export class AppModule {
    constructor(ngRedux: NgRedux<AppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
