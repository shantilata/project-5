import React, { Component } from 'react'

export default class UnmountComp extends Component {
    state={active:true}
    componentWillUnmount(){
        console.log("unmount call:");
        alert("user has been deleted");
    }
  render() {
    return (
      <div>
        {this.state.active?<h1>User name:Shanti</h1>:""}
        <button onClick={()=>{this.setState({active:false})}}>Delete user info:</button>
      </div>
    )
  }
}
