/**
 *  Configure store.
 */

import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import reducers from "../reducers";

export default function configureStore(p_initialState)
{
    const composeEnhancers = (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

    const store = createStore(
        reducers,
        p_initialState,
        composeEnhancers(
            applyMiddleware(
                reduxImmutableStateInvariant(),
                promiseMiddleware
            )
        )
    );

    // Enable Webpack HMR for Redux reducers.
    if (module.hot)
    {
        module.hot.accept("../reducers", () =>
        {
            const nextReducers = require("../reducers").default;
            store.replaceReducer(nextReducers);
        });
    }

    return store;
}
