import React, { useState } from "react";

export default function UsingObjects(props) {

    const [age, setAge] = useState(0)

    const [user, setUser] = useState({
        name: "Mayank",
        age: 10,
        designation: "Developer"
    })

    function updateUserInfo() {
        setAge(0)
    }
    
    return (
        <div>
            <h1>User Name: {user.name}</h1>
            <h1>User Age: {user.age}</h1>
            <h1>User Designation: {user.designation}</h1>
            <input type="button" value="Update Data" onClick={updateUserInfo} />
        </div>
    )
}