import React, { Component } from 'react'
import Counterchild from './Counterchild'
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.inc = () => {
      this.setState({ ...this.state, count: this.state.count + 1 })
    }

    this.dec = () => {
      if(this.state.count > 0)
      this.setState({ ...this.state, count: this.state.count - 1 })
    }
    this.reset = () => {
      this.setState({ ...this.state, count: 0 })
    }
  }
  render() {
    return (
      <div>
      <Counterchild 
      incF={this.inc}
      decF={this.dec}
      resetF={this.reset}>{this.state.count}</Counterchild>
      <hr/>






        {/* <h1>Count:{this.state.count}</h1>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.dec}>Decrement</button> */}
      </div>
      
    )
  }
}
