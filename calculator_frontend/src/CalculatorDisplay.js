import React from "react";

function CalculatorDisplay(props){

    return (
        <input 
        value={props.text}
        readOnly={true}
        className="Calculator-display" />
    );
}

export default CalculatorDisplay;