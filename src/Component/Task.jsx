import React, { Component } from 'react'

export default class Task extends Component {
    constructor() {
        super();
        this.state = { value1: "Black", isVisible: true }
    }

    changeHandler2 = () => {
        // if (this.state.value1 === "Pink") 
        //     this.setState({ ...this.state,value1:"Lips"})

        // else 
        //     this.setState({ ...this.state,value1:"Red"})
        this.setState({ ...this.state, isVisible: !this.state.isVisible })
    }

    render() {
        return (
            <div>
                {this.state.isVisible ? <h2>{this.state.value1}</h2> : ""}
                <button onClick={this.changeHandler2}>Click here</button>
                <hr/>
            </div>
        )
    }
}
