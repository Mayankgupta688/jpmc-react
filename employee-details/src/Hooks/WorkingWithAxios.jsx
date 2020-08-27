import React, { useState } from "react"
import Axios from "axios";

export default function WorkingWithAxios() {
    const [employeeList, setEmployeeList] = useState([])

    function getEmployeeList() {
        fetch("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(response => {
            return response.json()
        }).then((data) => {
            setEmployeeList(data);
        })
    }
    return (
        <div>
            { employeeList.length == 0 && (
                <div>
                    <h1>No Employee Available in database</h1>
                    <input type="button" onClick={getEmployeeList} value="Get Employee Data" />
                </div>
            )}

            {employeeList.map((employee) => {
                return (
                    <div key={employee.id}>
                        <img src={employee.avatar} alt={employee.name} />
                        <h1>User Name: {employee.name}</h1><hr/>
                    </div>
                )
            })}

            
        </div>
    )
}