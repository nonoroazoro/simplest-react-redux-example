/**
 * Counter is a Presentational Component.
 */

import React, { PropTypes } from "react";

const Counter = (p_props) =>
{
    const { value, actions: { increase, decrease, increaseAsync, decreaseAsync } } = p_props;
    return (
        <p>
            <span>{value}</span>
            {" "}
            <button onClick={() => increase()}>+</button>
            {" "}
            <button onClick={() => decrease()}>-</button>
            {" "}
            <button onClick={() => increase(2)}>+2</button>
            {" "}
            <button onClick={() => decrease(3)}>-3</button>
            {" "}
            <button onClick={() => increaseAsync()}>Increment Async</button>
            {" "}
            <button onClick={() => decreaseAsync()}>Decrement Async</button>
        </p>
    );
};

Counter.propTypes =
{
    value: PropTypes.number.isRequired,
    actions: PropTypes.shape({
        increase: PropTypes.func.isRequired,
        decrease: PropTypes.func.isRequired,
        increaseAsync: PropTypes.func.isRequired,
        decreaseAsync: PropTypes.func.isRequired
    })
};

export default Counter;
