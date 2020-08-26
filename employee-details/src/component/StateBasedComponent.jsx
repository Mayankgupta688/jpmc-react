import React from "react";

function Sample(props) {
    return <h1>Hello {props.username}...</h1>
}

export default class StateBasedComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    updateCounterValue = () => {
        this.setState({
            
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                
                counter: this.state.counter + 1
            }, () => {
                this.setState({
                
                    counter: this.state.counter + 1
                })
            })
        })
        
    }

    render() {
        return (
            <div>
                <h1>Initial Counter Value: {this.state.counter}</h1>
                <input type="button" value="Click to Increment" onClick={this.updateCounterValue} />
            </div>
        )
    }
}

