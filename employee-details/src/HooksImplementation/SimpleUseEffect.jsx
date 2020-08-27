import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function SimpleUseEffect() {

    const [user, setUser] = useState({
        name: "Mayank",
        age: 20
    });

    const [employeeList, setEmployeeList] = useState([])

    const [username, setUsername] = useState("Ankit...")

    useEffect(() => {
        Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            debugger;
            setEmployeeList(response.data)
        })
    }, [])

    useEffect(() => {
        console.log("Simple User Name Updated")
    }, [username])

    useEffect(() => {
        console.log("Complex User Name Updated")
    }, [user])

    useEffect(() => {
        console.log("Common useEffect Created...")
    }, [user, username])

    function updateStateNameSimple() {
        setUsername("Xyz....")
    }

    function updateStateNameObject() {
        setUser({
            ...user,
            name: "Mayank"
        }) 
    }

    return (
        <div>
            <h1>This is React Component Using useEffect... {user.name}</h1>
            <h2>Other Name: {username}</h2>
            <input type="button" onClick={updateStateNameObject} value="Update Name Object" /><br/><br/>
            <input type="button" onClick={updateStateNameSimple} value="Update Name Simple" /><br/><br/>

            {/* {employeeList.map((employee) => {
                return (
                    <div key={employee.id}>
                        <img src={employee.avatar} alt={employee.name} />
                        <h1>User Name: {employee.name}</h1><hr/>
                    </div>
                )
            })} */}
        </div>
    )
}
