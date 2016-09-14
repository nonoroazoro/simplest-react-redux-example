/**
 * counter is a Reducer of Counter.
 */

import { handleActions } from "redux-actions";

import CounterActionCreators from "../actions/CounterActionCreators";

export default handleActions(
    {
        [CounterActionCreators.increase]: (state, action) =>
        {
            return {
                value: state.value + action.payload
            };
        },
        [CounterActionCreators.increaseAsync]: (state, action) =>
        {
            return {
                value: state.value + action.payload
            };
        },
        [CounterActionCreators.decrease]: (state, action) =>
        {
            return {
                value: state.value - action.payload
            };
        },
        [CounterActionCreators.decreaseAsync]: (state, action) =>
        {
            return {
                value: state.value - action.payload
            };
        }
    },
    { value: 0 }
);
