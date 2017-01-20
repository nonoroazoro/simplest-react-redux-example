/**
 * Actions Creators.
 */

import { createAction } from "redux-actions";

import { doSomeAsyncJob } from "../utils/AsyncAPI";

/**
 * Sync Action Creator.
 */
export const increase = createAction("COUNTER_INCREASE", (p_num = 1) => p_num);

/**
 * Sync Action Creator.
 */
export const decrease = createAction("COUNTER_DECREASE", (p_num = 1) => p_num);

/**
 * Async Action Creator.
 */
export const increaseAsync = createAction("COUNTER_INCREASE_ASYNC", doSomeAsyncJob);

/**
 * Async Action Creator.
 */
export const decreaseAsync = createAction("COUNTER_DECREASE_ASYNC", doSomeAsyncJob);

export default {
    increase,
    decrease,
    increaseAsync,
    decreaseAsync
};
