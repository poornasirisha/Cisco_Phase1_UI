import React, { Component } from 'react';

class UpdatingLifecycleExample extends Component{
    constructor(props){
        super(props);

        this.state = {
            count:0
        }
    }

    shouldComponentUpdate(props, state){
        return state.count % 2 ===0;
    }

    componentDidUpdate(){
        console.log("component updated")
    }

    getSnapshotBeforeUpdate(props,state){
        console.log(state.count);
        return state;      
    }

    

    handleClick = () =>{
        this.setState({count:this.state.count + 1})
    }

    render(){
        console.log("render");
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        )
    }
}

export default UpdatingLifecycleExample;