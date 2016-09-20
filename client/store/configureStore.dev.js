/**
 *  Configure store.
 */

import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import reducers from "../reducers";

export default function configureStore(p_initialState)
{
    const store = createStore(
        reducers,
        p_initialState,
        compose(
            applyMiddleware(
                reduxImmutableStateInvariant(),
                promiseMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : (f) => f // Add support for redux-devtools.
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
