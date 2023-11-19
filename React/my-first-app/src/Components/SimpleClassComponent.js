import React, { Component } from 'react';

class SimpleClassComponent extends Component{
    constructor(props){
        super(props);
        console.log(this.props.someProp);
    }
    state = {
        count:0
    }

    
    handleClick = () =>{
        this.setState({count: this.state.count + 1});
    }
    render(){
        return(
           <div>
           <h1>Class Component</h1>
           <p>Count: {this.state.count}</p>
           <button onClick={this.handleClick}>Increment Count</button>
            </div>
        )
    }
}

export default SimpleClassComponent;