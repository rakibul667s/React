import React, { Component } from 'react'

export default class HOOKS_USESTATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    handelIncrement = () => {
        this.setState({ 
            count : this.state.count + 1

        })
    }
    
    render() {
        const { count } = this.state;
        return (
        <div style={{marginBottom:'20px'}}>
            <h1>Count : {count}</h1>
            <button onClick={this.handelIncrement}>Increment</button>
        </div>
        )
    }
}
