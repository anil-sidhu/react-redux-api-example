import React, { Component } from 'react';

class App extends Component {
  render() {
    console.warn("check api data",this.props.todos)
    return (
      <div >
         <button onClick={()=>this.props.addTodo()} > click</button>
      </div>
 
    )
  }  
}
export default App


