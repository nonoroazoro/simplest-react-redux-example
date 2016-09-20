/**
 * Actions Creators.
 */

import { createAction }  from "redux-actions";

import AsyncAPI from "../utils/AsyncAPI";

/**
 * Sync Action.
 */
const increase = createAction("COUNTER_INCREASE", (p_num = 1) => p_num);

/**
 * Sync Action.
 */
const decrease = createAction("COUNTER_DECREASE", (p_num = 1) => p_num);

/**
 * Async Action.
 */
const increaseAsync = createAction("COUNTER_INCREASE_ASYNC", AsyncAPI.doSomeAsyncJob);

/**
 * Async Action.
 */
const decreaseAsync = createAction("COUNTER_DECREASE_ASYNC", AsyncAPI.doSomeAsyncJob);

export default {
    increase,
    decrease,
    increaseAsync,
    decreaseAsync
};
