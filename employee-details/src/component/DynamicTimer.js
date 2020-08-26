import React from "react";
import WorkingWithProps from "./WorkingWithProps";

export default function DynamicTimer(props) {
    return <h1>Current Second Counter: {props.seconds}</h1>
}