import React from "react";

export default function WorkingWithChildren(props) {
    debugger;
    return (
        <div>
            <h1>Hello, Welcome To React Session..</h1>
            { props.children? props.children: <h2>No Children</h2> }
        </div>
    )
}