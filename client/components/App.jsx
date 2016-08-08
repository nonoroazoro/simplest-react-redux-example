/**
 * App is a Container Component.
 */

import { connect } from "react-redux";

import Counter from "./Counter";
import actions from "../reducers/actions";

// Map Redux state to component props.
function mapStateToProps(p_state)
{
    // Attention: must use the corresponding reducer name (here "counter") to access reducer
    // cause we used combineReducers before.
    return {
        value: p_state.counter.value
    };
}

// Map Redux actions to component props.
function mapDispatchToProps(p_dispatch)
{
    return {
        onIncrement: () => p_dispatch(actions.COUNTER_INCREMENT),
        onDecrement: () => p_dispatch(actions.COUNTER_DECREMENT)
    };
}

// Connected Component.
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default App;
