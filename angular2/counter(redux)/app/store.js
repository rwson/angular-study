"use strict";
var actions_1 = require("./actions");
exports.INITIAL_STATE = {
    counter: 0
};
function rootReducer(state, action) {
    switch (action.type) {
        case actions_1.CounterActions.INCREMENT:
            return { counter: state.counter + 1 };
        case actions_1.CounterActions.DECREMENT:
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}
exports.rootReducer = rootReducer;
//# sourceMappingURL=store.js.map