import React from "react";
import { configure } from "@testing-library/react";

function PresentationComponent(props) {
    debugger;
    return <h1>Hello From Child Component {props.username}</h1>
}

export default class PassingStateDataToProps extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Mayank"
        }
    }

    updateName = () => {
        this.setState({
            username: "Ankit"
        })
    }

    render() {
        return (
            <div>
                <h1>User Name from Parent: {this.state.username}</h1>
                <PresentationComponent username={this.state.username}></PresentationComponent>
                <input type="button" value="Click to Update" onClick={this.updateName} />
            </div>
        )
    }
}