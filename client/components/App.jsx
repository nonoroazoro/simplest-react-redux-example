/**
 * App is a Presentational Component (Root Component).
 */

import React from "react";
import CounterContainer from "../containers/CounterContainer";

const App = (p_props) =>
{
    return (
        <div>
            <CounterContainer />
        </div>
    );
};

export default App;
