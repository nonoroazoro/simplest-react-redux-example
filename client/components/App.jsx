/**
 * App is a Presentational Component (Root Component).
 */

import React from "react";
import CounterContainer from "../containers/CounterContainer";

export default function App()
{
    return (
        <div>
            <CounterContainer />
        </div>
    );
}
