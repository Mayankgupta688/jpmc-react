import React from 'react';

function DisplayUser(props) {
    return (
        <div>
            <h1>Updated Employee Name is: {props.employee.name}</h1>
            <h2>Employee Age is: {props.employee.age}</h2>
            <h3>Employee Designation is: {props.employee.designation}</h3>
            Additional Employee Details: <input type="text" /><hr/>
        </div>
    )
}

export default class RenderEmployeeList extends React.Component {
    constructor() {
        super();
        this.userName = ["MAyank Updated", "Ankit Updated", "Aniket Updated"]
        this.userObject = {
            name: this.userName[0],
            age: 10,
            designation: "developer Updated..."
        }
        this.state = {
            employeeList: [
            {
                id: 5,
                name: this.userName[0],
                age: 10,
                designation: "developer Updated..."
            }, {
                id: 2,
                name: this.userName[1],
                age: 10,
                designation: "developer"
            }, {
                id: 2,
                name: this.userName[2],
                age: 10,
                designation: "developer"
            }]
        }
    }

    addEmployee = () => {
        this.setState({
            employeeList: [
                {
                    id: 3,
                    name: "djhfdsokf",
                    age: 100,
                    designation: "jsagdkaj"
                },{
                    id: "4",
                    name: "dfhdskhfslkfhkdhfldskhfl",
                    age: 100,
                    designation: "jsagdkaj"
                },
                ...this.state.employeeList
            ]
        })
    }

    render() {
        return (
            <div>
                { 
                    this.state.employeeList.map((employee, index) => {
                        return <DisplayUser key={index + "_" + employee.id} employee={employee}></DisplayUser>
                    }) 
                }

                <input type="button" onClick={this.addEmployee} value="Add Employee" />
            </div>
        )
    }
}