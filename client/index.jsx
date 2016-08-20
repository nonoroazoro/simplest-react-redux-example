import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(
    reducers,
    compose(
        applyMiddleware(promiseMiddleware), // Apply redux-promise as a middleware.
        window.devToolsExtension ? window.devToolsExtension() : (f) => f // Add support for redux-devtools.
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("main")
);
