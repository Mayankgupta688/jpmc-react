import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function UseStateHooks(props) {

    var [name, setName] = useState("Mayank");
    var [age, setAge] = useState(0);
    var [employees, setEmployees] = useState([]);

    var [user, setUser] = useState({
        name: "Mayank",
        age: 10
    })

    useEffect(() => {
        Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            debugger;
            setEmployees(response.data);
        })
    }, [])

    function updateUseName(event) {
        setUser({
            [event.target.className]: event.target.value
        })
    }
    debugger;
    return (
        <div>
            <h1>Hello {user.name}...</h1>
            <h1>User Age: {user.age}...</h1>
            {props.children[1]}<br/>

            {employees.map((employee) => {
                return (
                    <div>
                        <h1>Name: {employee.name}</h1>
                    </div>
                )
            })}

            <input type="text" value={user.name} class="name" onChange={updateUseName} />
            <input type="text" value={user.age} class="age" onChange={updateUseName} />
            <input type="button" value="Update Name" onClick={updateUseName} />
        </div>   
    )
}