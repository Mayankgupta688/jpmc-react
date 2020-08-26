import React from 'react';

function DisplayUser(props) {
    return (
        <div>
            <h1>Updated Employee Name is: {props.employee.name}</h1>
            <h2>Employee Age is: {props.employee.age}</h2>
            <h3>Employee Designation is: {props.employee.designation}</h3><hr/>
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
            employeeList: [this.userObject, {
                name: this.userName[1],
                age: 10,
                designation: "developer"
            }, {
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
                    name: "djhfdsokf",
                    age: 100,
                    designation: "jsagdkaj"
                },{
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
                    this.state.employeeList.map((employee) => {
                        return <DisplayUser employee={employee}></DisplayUser>
                    }) 
                }

                <input type="button" onClick={this.addEmployee} value="Add Employee" />
            </div>
        )
    }
}