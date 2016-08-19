/**
 * counter is a Reducer of Counter.
 */

import * as types from "../actions/ActionTypes";

export default function counter(p_state = { value: 0 }, p_action)
{
    switch (p_action.type)
    {
        case types.COUNTER_INCREASE:
        case types.COUNTER_INCREASE_ASYNC:
            return { value: p_state.value + p_action.payload.num };

        case types.COUNTER_DECREASE:
        case types.COUNTER_DECREASE_ASYNC:
            return { value: p_state.value - p_action.payload.num };

        default:
            return p_state;
    }
}
