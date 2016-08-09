/**
 * CounterContainer is a Container Component.
 */

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Counter from "../components/Counter";
import * as CounterActionCreators from "../actions/CounterActionCreators";

function mapStateToProps(p_state)
{
    return { value: p_state.counter.value };
}

function mapDispatchToProps(p_dispatch)
{
    return {
        actions: bindActionCreators(CounterActionCreators, p_dispatch)
    };
}

// Connected Component.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
