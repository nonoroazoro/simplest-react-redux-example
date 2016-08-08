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

    incrementIfOdd()
    {
        if (this.props.value % 2 !== 0)
        {
            this.props.onIncrement();
        }
    }

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
                <button onClick={onIncrement}>+</button>
                {" "}
                <button onClick={onDecrement}>-</button>
                {" "}
                <button onClick={this.incrementIfOdd.bind(this)}>Increment Of Odd</button>
                {" "}
                <button onClick={this.incrementAsync.bind(this)}>Increment Async</button>
            </p>
        );
    }
}

export default Counter;
