import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {NgRedux} from "ng2-redux";
import {AppState} from "./store";

@Injectable()
export class CounterActions {

    static RELOAD_PAGE = "RELOAD_PAGE";

    constructor(private ngRedux: NgRedux<AppState>, private http: Http) {
    }

    fetchPage(page:any) {
        page = page || 1;
        this.http.get(`data/${page}.json`)
            .map((res: Response) => {
                return res.json();
            })
            .subscribe((res) => {
               if(res.status == 1) {
                   this.ngRedux.dispatch({
                       type: CounterActions.RELOAD_PAGE,
                       curPage: page,
                       data: res.data
                   });
               }  
            }, (ex) => {
               throw ex;
           });
    }
}
