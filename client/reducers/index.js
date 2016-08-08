/**
 * Combine Reducers.
 */

import { combineReducers } from "redux";
import counter from "./counter";

export default combineReducers({
    counter // the name "counter" is a key of reducer counter。
});
