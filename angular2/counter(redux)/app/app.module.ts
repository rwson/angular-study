import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { NgRedux }       from "ng2-redux";
import { AppState, INITIAL_STATE, rootReducer } from "./store";
import { CounterActions } from "./actions";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ NgRedux, CounterActions ],
})
export class AppModule { 
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
