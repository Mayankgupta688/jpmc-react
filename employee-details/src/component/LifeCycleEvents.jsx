import React from 'react';

export default class LifeCycleEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)

        console.log("Initial Rendering...")
    }

    componentDidUpdate() {
        console.log("Next Rendering...")
    }

    render() {
        return (
            <h1>Updated Counter: {this.state.counter}</h1>
        )
    }
}