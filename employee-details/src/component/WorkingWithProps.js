import React from "react";

export default function WorkingWithProps(props) {

    function sampleFunction(props) {
        return props.userObject.username + " Some Random String..."
    }

    props.address.street = 100

    return (
        <div>
            <h1>Hello {sampleFunction(props)}</h1>
            <h2>User Age is {props.userObject.userage}</h2>
            <h2>User Designation is {props.userObject.userdesignation}</h2>
            <b>Street: {props.address.street}</b>
        </div>
    )
}