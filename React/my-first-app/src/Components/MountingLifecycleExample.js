import React, { Component } from 'react';

class MountingLifecycleExample extends Component{
    constructor(props){
        super(props);
        console.log("constructor called");
        this.state = {
            count:0,
            derivedValue:null
        }

        //constructor binding of this
        this.handleClick = this.handleClick.bind(this);
    }
    //dynamic binding
    //handleClick = this.handleClick.bind(this);
    handleClick(){
        this.setState(prevState => ({
            count:prevState.count + 1
        }))
    }

    static getDerivedStateFromProps(props, state){
        if(props.initialValue !== state.derivedValue){
            return {
                derivedValue: props.initialValue
            }
        }
        console.log('getDerivedStateFromProps called');
        return null;
    }

    render(){
        console.log("render called");
        return(
            <div>
                <p>Count {this.state.count}</p>
                <p>Derived Value: {this.state.derivedValue}</p>
            </div>
        )
    }
}

export default MountingLifecycleExample;