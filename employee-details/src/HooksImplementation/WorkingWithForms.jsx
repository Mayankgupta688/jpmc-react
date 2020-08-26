import React, { useState } from "react";

export default function WorkingWithForms() {
    const [name, setName] = useState("Mayank");
    const [age, setAge] = useState(20);

    function updateName(event) {
        console.log("Name Updated...")
        setName(event.target.value)
    }

    function updateAge(event) {
        console.log("Age Updated...")
        setAge(event.target.value)
    }

    function getData() {
        alert(name)
        alert(age)
    }

    return (
        <div>
            <b>Update User Name: </b><input type="text" value={name} onChange={updateName} /><br/><br/>
            <b>Update User Age: </b><input type="text" value={age}  onChange={updateAge} />

            <input type="button" value="Get Values" onClick={getData} />
        </div>
    )
}