import React, { Component } from 'react'


export default class FirstComp extends Component {
    // state = { Fname: "Pakhi", Lname: "Dey" }
    constructor() {
        super();
        this.state = { Fname: "Pakhi", Lname: "Dey" }


    }
    changeHandler1 = () => {

        this.setState({ ...this.state, Fname: "Shantilata" })
    }




    render() {
        return (
            
            <>
                <h1>Full Name:{this.state.Fname} {this.state.Lname}</h1>
                <button onClick={this.changeHandler1}>Click</button>
                <hr/>
            </>
            
        )
    }
}

