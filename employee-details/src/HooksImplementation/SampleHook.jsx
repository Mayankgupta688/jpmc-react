import React, { useState } from "react";

function updatePropertyData(inputFunction) {
    inputFunction("Anshul Gupta...")
}

export default function SampleHook(props) {

    const [name, setName] = useState("Mayank Gupta...");
    const [age, setAge] = useState(0);

    function updateProperty(input) {
        if(input == "name") {
            updatePropertyData(setName)
        }

        if(input == "age") {
            updatePropertyData(setAge)
        }
    }

    return (
        <div>
            <h1>User Name: {name}</h1>
            <h1>User Age: {age}</h1>
            <OtherComponent username={name}></OtherComponent>
            <input type="button" value="Update Name" onClick={() => updateProperty("name")} />
            <input type="button" value="Update Age" onClick={() => updateProperty("age")} />
        </div>
    )
}

export function OtherComponent(props){
    return <h2>Child User Name: {props.username}</h2>
}