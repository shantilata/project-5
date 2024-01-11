import React, { Component } from 'react'

export default class ChildCount2 extends Component {
    shouldComponentUpdate(prevProps,nextState){
        if(prevProps.val2!==this.props.val2){
            return true;
        }
        else{
            return false;
        }
    }
    render() {
        console.log("Get coun2:", this.props)
        let { val2, DecF } = this.props
        return (
            <div>
                <h1>Decrement:{val2}</h1>
                <button onClick={DecF}>Click</button>
            </div>
        )
    }
}
