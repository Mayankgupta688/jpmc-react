import React from 'react';

export default class ShouldCompontUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 20
        }
    }

    updateAge = () => {
        debugger;
        this.setState({
            ...this.state,
            age: 100
        }, () => {
            console.log(this.state.age)
        })
    }
    updateName = () => {
        debugger;
        this.setState({
            ...this.state,
            name: "Random"
        }, () => {
            console.log(this.state.age)
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.name === nextState.name) {
            return false
        } else return true;
    }

    forceToUpdate = () => {
        this.forceUpdate();
    }

    render() {
        debugger;
        return (
            <div>
                <h1>This is the Header Name: {this.state.name}</h1>
                <input type="button" value="Update User Age" onClick={this.updateAge} />
                <input type="button" value="Update User Name" onClick={this.updateName} />
                <input type="button" value="Force" onClick={this.forceToUpdate} />
            </div>
        )
    }
}