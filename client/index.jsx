import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

/**
 * Apply redux-promise as a middleware.
 */
const store = createStore(
    reducers,
    applyMiddleware(promiseMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("main")
);
