/**
 * Counter is a Presentational Component.
 */

import React, { Component, PropTypes } from "react";

class Counter extends Component
{
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    };

    incrementAsync()
    {
        setTimeout(this.props.onIncrement, 1000);
    }

    render()
    {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                <span>{value}</span>
                {" "}
                <button onClick={() => onIncrement()}>+</button>
                {" "}
                <button onClick={() => onDecrement()}>-</button>
                {" "}
                <button onClick={() => onIncrement(2)}>+ 2</button>
                {" "}
                <button onClick={() => onDecrement(3)}>- 3</button>
                {" "}
                <button onClick={this.incrementAsync.bind(this)}>Increment Async</button>
            </p>
        );
    }
}

export default Counter;
