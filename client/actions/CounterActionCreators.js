/**
 * Actions Creators.
 */

import * as types from "./ActionTypes";
import AsyncAPI from "../utils/AsyncAPI";

/**
 * Sync Action.
 */
export function increase(p_num = 1)
{
    return {
        type: types.COUNTER_INCREASE,
        payload: {
            num: p_num
        }
    };
}

/**
 * Sync Action.
 */
export function decrease(p_num = 1)
{
    return {
        type: types.COUNTER_DECREASE,
        payload: {
            num: p_num
        }
    };
}

/**
 * Async Action.
 */
export async function increaseAsync(p_num = 1)
{
    let num = p_num;
    try
    {
        num = await AsyncAPI.doSomeAsyncJob(p_num);
    }
    catch (e)
    {
    }

    return {
        type: types.COUNTER_INCREASE_ASYNC,
        payload: {
            num: num
        }
    };
}

/**
 * Async Action.
 */
export async function decreaseAsync(p_num = 1)
{
    let num = p_num;
    try
    {
        num = await AsyncAPI.doSomeAsyncJob(p_num);
    }
    catch (e)
    {
    }

    return {
        type: types.COUNTER_DECREASE_ASYNC,
        payload: {
            num: num
        }
    };
}
