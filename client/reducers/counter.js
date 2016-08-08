/**
 * counter is a Reducer of Counter.
 */

import actions from "./actions";

export default function counter(p_state = { value: 0 }, p_action)
{
    switch (p_action.type)
    {
        case actions.COUNTER_INCREMENT.type:
            return { value: p_state.value + 1 };

        case actions.COUNTER_DECREMENT.type:
            return { value: p_state.value - 1 };

        default:
            return p_state;
    }
}
