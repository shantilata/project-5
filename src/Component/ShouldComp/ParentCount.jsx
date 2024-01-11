import React, { Component } from 'react'
import ChildCount1 from './ChildCount1'
import ChildCount2 from './ChildCount2'


export default class ParentCount extends Component {
    constructor(){
        super();
        this.state={count1:0,count2:0}

    }

    Inc=()=>
    {
        this.setState({...this.state,count1:this.state.count1+1})
    }
    Dec=()=>{
        this.setState({...this.state,count2:this.state.count2-2})
    }
  render() {
    return (
      <div>
        <ChildCount1 val1={this.state.count1} IncF={this.Inc}/>
        <ChildCount2 val2={this.state.count2} DecF={this.Dec}/>
        <hr/>
        </div>
    )
  }
}
