import React, { Component } from 'react'

export default class Counterchild extends Component {
  render() {
    console.log("Value through props", this.props);
    let { children, incF, decF, resetF } = this.props
    return (
      <div>
        <h1>{children}</h1>

        <button onClick={incF}>Increment</button>
        <button onClick={resetF}>Reset</button>
        <button onClick={decF}>Decrement</button>
      </div>
    )
  }
}
