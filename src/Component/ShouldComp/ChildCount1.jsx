import React, { PureComponent } from 'react'

export default class ChildCount1 extends PureComponent {
    // shouldComponentUpdate(prevProps,nextState){

    //     if(prevProps.val1!==this.props.val1){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    render() {
        console.log("Get coun1:", this.props)
        let { val1, IncF } = this.props
        return (
            <div>
                <h1>Increment:{val1}</h1>
                <button onClick={IncF}>Click</button>
            </div>
        )
    }
}
