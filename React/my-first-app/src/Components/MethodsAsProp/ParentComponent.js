import React, {Component} from 'react';

const ChildComponent = (props) =>{
    return(
        <div>
            <button onClick={props.onButtonClick}>Click me in Child</button>
        </div>
    )
}


class ParentComponent extends Component{
    //Method to be passed as prop

    handleButtonClick = () =>{
        console.log("Button clicked in Parent");
    }

    render(){
        return(
            <div>
            <h2>Parent Component</h2>
            <ChildComponent onButtonClick={this.handleButtonClick} />
            </div>
        )
    }

}

export default ParentComponent;