/**
 * Counter is a Presentational Component.
 */

import React, { Component, PropTypes } from "react";

class Counter extends Component
{
    static propTypes = {
        value: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    incrementAsync()
    {
        setTimeout(this.props.actions.increase, 1000);
    }

    render()
    {
        const { value, actions } = this.props;
        return (
            <p>
                <span>{value}</span>
                {" "}
                <button onClick={() => actions.increase()}>+</button>
                {" "}
                <button onClick={() => actions.decrease()}>-</button>
                {" "}
                <button onClick={() => actions.increase(2)}>+2</button>
                {" "}
                <button onClick={() => actions.decrease(3)}>-3</button>
                {" "}
                <button onClick={this.incrementAsync.bind(this)}>Increment Async</button>
            </p>
        );
    }
}

export default Counter;
