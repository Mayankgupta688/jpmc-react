import React, { useRef } from "react";

export default function UncontrolledElements() {

    const inputRef = useRef(null);

    function updateInput() {
        inputRef.current.style.color = "red";
    }

    return (
        <div>
            <h1>Hello World..</h1>
            <input type="text" /><br/><br/>
            <input type="button" ref={inputRef} onClick={updateInput} value="Change Uncontrolled Element" />
        </div>
    )
}