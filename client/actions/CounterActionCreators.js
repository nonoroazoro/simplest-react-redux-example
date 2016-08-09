/**
 * Actions Creators.
 */

import * as types from "./ActionTypes";

export function increase(p_num = 1)
{
    return {
        type: types.COUNTER_INCREASE,
        payload: {
            num: p_num
        }
    };
}

export function decrease(p_num = 1)
{
    return {
        type: types.COUNTER_DECREASE,
        payload: {
            num: p_num
        }
    };
}
