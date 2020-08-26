import React from "react";

export default class SimpleCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 10,
            salary: 10
        }
    }

    render() {

        if(this.state.age >= 15 || this.state.salary > 20) {
            return <h1>Hello, Eligible</h1>
        } else {
            return <h1>Not Working for You...</h1>
        }
        // debugger
        // return (
        //     <div>
        //         <h1>Welcome To Application..</h1>
        //         <h2>User Age is: {this.state.age}</h2>

        //         {(this.state.age >= 15 || this.state.salary > 20) && (
        //             <h2>You are Eligible....</h2>
        //         )}

        //         {this.state.age < 15 && (
        //             <h2>You are not Eligible</h2>
        //         )}
        //     </div>
        // )
    }
}