import React from "react";
import { UseSelector, useSelector } from "react-redux";

const ComponentB = () => {
    const storeValue = useSelector((state) => state.value);

    return(
        <div>
            <h2>Component B</h2>
            <p>Received from Store : {storeValue}</p>
        </div>
    )
}

export default ComponentB;
