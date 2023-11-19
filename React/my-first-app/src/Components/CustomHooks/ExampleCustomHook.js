import React from "react";
import useAuth from "./useAuth";

const ExampleCustomHook = () => {
    const {user, login, logout} = useAuth();

    const handleLogin = () => {
        login({username:'user', name:'ABC'})
    }

    const handleLogout = () =>{
        logout();
    }

    return(
        <div>
            {user ? (
                <div>
                    <p>Welcome {user.name}</p>
            <button onClick={handleLogout}>Logout</button>
                </div>
            ):(
                <div>
                    <p>Please Login</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}            
        </div>
    )
}

export default ExampleCustomHook;