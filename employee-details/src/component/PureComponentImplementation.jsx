import React from 'react';

export default class PureComponentImplementation extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            address: [10, 20, 30]
        }
    }

    updateName = () => {
        this.state.address.push(40)
        this.setState({
            ...this.state,
            address: this.state.address
        }, () => {
            this.forceUpdate()
        })
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Name: {this.state.name} {this.state.address}</h1>
                <input type="button" onClick={this.updateName} value="Update Name" />
            </div>
        )
    }
}