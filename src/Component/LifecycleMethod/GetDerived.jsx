import React, { Component } from 'react'

export default class GetDerived extends Component {
    constructor() {
        super();
        this.state = { academyState: "Webskitters" }

    }
    static getDerivedStateFromProps(props, state) {
        // console.log("Props is getdrive", props);
        // console.log("State in getderive",state);
        if(state.academyState!==props.academyProps ){
            return({academyState:props.academyProps})
        }
    }
    render() {
        return (
            <>
                <h1>My academy name: {this.state.academyState}</h1>
                <hr/>
            </>
        )
    }
}
