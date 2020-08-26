import React from "react";

export default class ConditionalUpdates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.username,
            age: 10
        }
    }

    callRandomFunction = () => {
        alert(this.state.name)
    }

    updateData = () => {
        this.setState({
            name: "jhsgshdk"
        })  
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <h2>Age of User is {this.state.age}</h2>
                <input type="button" value="Click" onClick={this.updateData} />
            </div>
        )
    }
}