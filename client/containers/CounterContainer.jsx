/**
 * CounterContainer is a Container Component.
 */

import { connect } from "react-redux";

import Counter from "../components/Counter";
import * as CounterActionCreators from "../actions/CounterActionCreators";

function mapStateToProps(p_state)
{
    return { value: p_state.counter.value };
}

// Connected Component.
export default connect(mapStateToProps, CounterActionCreators)(Counter);
