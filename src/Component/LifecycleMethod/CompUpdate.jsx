import React, { Component } from 'react'

export default class CompUpdate extends Component {
    constructor(){
        super();
        this.state={active:null,name:null,contact:null}
    }
    click=()=>{
        this.setState({active:"True"})
    }
componentDidUpdate(){
    console.log("update call:",);
    if(this.state.name===null){
        this.setState({name:"Pakhi",contact:"9635388970"});
    }
}
  render() {
    console.log("Render call:");
    return (
      <div>
        <h1>User Name:{this.state.name}</h1>
        <p>Contact Number:{this.state.contact}</p>
        <button onClick={this.click}>Click</button>
      </div>
    )
  }
}
