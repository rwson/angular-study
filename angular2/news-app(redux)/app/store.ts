import {Action} from "redux";
import {CounterActions} from "./actions";

export interface AppState {
    curPage: number;
    data: any;
}

export const INITIAL_STATE: AppState = {
    curPage: 1,
    data: []
}

export function rootReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case CounterActions.RELOAD_PAGE:
            return {
                curPage: action.curPage,
                data: action.data
            };
        default:
            return state;
    }
}
