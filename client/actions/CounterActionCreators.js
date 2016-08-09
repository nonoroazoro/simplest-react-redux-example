/**
 * Actions Creators.
 */

import * as types from "./ActionTypes";

export function increase(p_num = 1)
{
    return {
        type: types.COUNTER_INCREASE,
        payload: p_num
    };
}

export function decrease(p_num = 1)
{
    return {
        type: types.COUNTER_DECREASE,
        payload: p_num
    };
}
