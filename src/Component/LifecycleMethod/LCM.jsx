import React, { Component } from 'react'

export default class LCM extends Component {

    // First method

    constructor() {
        super();
        console.log("1.Construcor phase:");
    }
    // Second method

    static getDerivedStateFromProps(props, state) {
        console.log("2. Getderived phase:");
        return 0;
    }

    // fourth method

    componentDidMount() {
        console.log("4. Component phase:");
    }

    // third method
    render() {
            console.log("3. Render phase");
        return (
            <div>
                <h1>Life Cycle Method:</h1>
                <hr/>
            </div>
        )
    }
}
