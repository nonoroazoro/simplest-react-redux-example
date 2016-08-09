/**
 * counter is a Reducer of Counter.
 */

import * as types from "../actions/ActionTypes";

export default function counter(p_state = { value: 0 }, p_action)
{
    console.log(p_action);
    switch (p_action.type)
    {
        case types.COUNTER_INCREMENT:
            return { value: p_state.value + p_action.payload };

        case types.COUNTER_DECREMENT:
            return { value: p_state.value - p_action.payload };

        default:
            return p_state;
    }
}
