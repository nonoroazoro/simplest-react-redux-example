/**
 *  Configure store.
 */

import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import reducers from "../reducers";

export default function configureStore(p_initialState)
{
    return createStore(
        reducers,
        p_initialState,
        applyMiddleware(promiseMiddleware) // Apply redux-promise as a middleware.
    );
}
