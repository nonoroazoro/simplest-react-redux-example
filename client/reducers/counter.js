/**
 * counter is a Reducer of Counter.
 */

import { combineActions, handleActions } from "redux-actions";

import { increase, increaseAsync, decrease, decreaseAsync } from "../actions/CounterActionCreators";

export default handleActions(
    {
        [combineActions(increase, increaseAsync)]: (p_state, p_action) =>
        {
            return {
                ...p_state,
                value: p_state.value + p_action.payload
            };
        },
        [combineActions(decrease, decreaseAsync)]: (p_state, p_action) =>
        {
            return {
                ...p_state,
                value: p_state.value - p_action.payload
            };
        }
    },
    { value: 0 }
);
