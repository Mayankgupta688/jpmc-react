import React from "react";

class ChildComponent extends React.Component {

    updateIncorrect = () => {
        this.props.user.name = "Updated";
        this.forceUpdate();
    }

    render() {
        debugger;
        return (
            <div>
                <h2>Input Inside Child Component: {this.props.user.name}</h2>
                <input type="button" value="Click to Update Name" onClick={this.props.updatename} />
                <input type="button" value="Click to Update Age" onClick={this.props.updateage} />
                <input type="button" value="Update User Data" onClick={this.updateIncorrect} />
            </div>
        )
    }
}

export default class PassingDataToParent extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "Random",
                age: 10
            }, 
            username: "Mayank",
            age: 10
        }
    }

    updateName = () => {
        this.setState({
            username: "Anshul"
        })
    }

    updateAge = () => {
        this.forceUpdate()
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Data from Parent: {this.state.user.name}</h1>
                <h1>Data from Parent AGe: {this.state.age}</h1>
                <ChildComponent user={this.state.user} updatename={this.updateName} updateage={this.updateAge} username={this.state.username}></ChildComponent>
            </div>
        )
    }
}