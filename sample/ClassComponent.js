import React from "react";

export default class ClassComponent extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            name: "Mayank",
            counter: 1,
            data: [1, 2, 3]
        }
    }

    updateData = () => {
        this.setState({
                ...this.state,
                name: "Mayank1"
        }) 
    }
    render() {
        debugger;

        return <input type="button" value="Click" onClick={this.updateData}/>
        // if(this.state.counter % 2 == 0) {
        //     return <b>This is Even Number...</b>
        // }
        // return (
        //     <div>
        //         <h1>Hello {this.state.name}...{this.state.counter}</h1>
        //         <input type="button" value="Click" onClick={this.updateData}/><br/><br/>

        //         {this.state.counter % 3 == 0 && (
        //             <b>This is Even Number...</b>
        //         )}

        //         {this.state.data.map((val) => {
        //             return <b>Data Value: {val}<br/></b>
        //         })}
        //     </div>
        // )
    }
}