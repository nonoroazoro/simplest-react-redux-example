/**
 * Actions Creators.
 */

import * as types from "./ActionTypes";

export function onIncrement(p_num = 1)
{
    return {
        type: types.COUNTER_INCREMENT,
        payload: p_num
    };
}

export function onDecrement(p_num = 1)
{
    return {
        type: types.COUNTER_DECREMENT,
        payload: p_num
    };
}
