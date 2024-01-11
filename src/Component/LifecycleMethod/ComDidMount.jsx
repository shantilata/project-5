import React, { Component } from 'react'

export default class ComDidMount extends Component {
    constructor() {
        super();
        this.state = { data: "Hello world" }
    }
    componentDidMount() {
        console.log("Comp Did Mount");
        setTimeout(() => {
            alert("Comp mount worked")
            console.warn("data shown");
            console.error("data shown");
            console.log("data shown");
        },5000);
    }

    render() {
        console.log("render:");
        return (
            <div>
                <h3>{this.state.data}</h3>
                <hr/>
            </div>

        )
    }
}
