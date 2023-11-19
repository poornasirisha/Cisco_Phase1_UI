import React, { Component} from 'react';

const UserGreeting = () =>{
    return <p>Welcome ABC (Logged In)</p>
}

const GuestGreeting = () => {
    return <p>Welcome Guest (Not Logged In)</p>
}

const ConditionalRenderingIfElse = ({isLoggedIn}) =>{
    if(isLoggedIn){
        return <p>If Else Welcome ABC (Logged In)</p>
    }
    else{
        return <p>If Else Welcome Guest (Not Logged In)</p>

    }
}


class Greeting extends Component{
    state={
        isLoggedIn:false
    }
    render(){
        return(
            <div>
                {this.state.isLoggedIn ? <UserGreeting />: <GuestGreeting />}

                <ConditionalRenderingIfElse isLoggedIn = {this.state.isLoggedIn} />
                {this.state.isLoggedIn && <UserGreeting />}
                {!this.state.isLoggedIn && <GuestGreeting />}
            
            </div>
        )
    }
}

export default Greeting;