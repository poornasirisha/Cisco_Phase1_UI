import React, {createContext, useContext, useReducer, useEffect} from 'react';


//create a context for user Authentication
const AuthContext = createContext();

//custom hook to hookto use the autentication context
const useAuth = () =>{
    const contextValue = useContext(AuthContext);
    if(!contextValue){
        throw new Error('useAuth must be used within AuthProvider');
    }
    return contextValue;
}

//Action types for form reducer
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const INPUT_CHANGE = 'INPUT_CHANGE';
const LOGIN_ERROR = 'LOGIN_ERROR'

//Reducer function for form State
const formReducer = (state, action) => {
    switch(action.type){
        case LOGIN:
            return {...state, authenticated:true, userInfo:action.payload};
        case LOGOUT:
            return {...state, authenticated:false, userInfo:null};
        case INPUT_CHANGE:
            return {...state, [action.payload.name]:action.payload.value,error:''};
        case LOGIN_ERROR:
            return {...state, error:action.payload}
        default:
            return state;
    }
}

//Provider component for user Authentication
const AuthProvider = ({children}) => {
    const[user, dispatch] = useReducer(formReducer, {
        authenticated:false,
        userInfo:null
    });

    const login = (userInfo) => {
        dispatch({type:LOGIN, payload:userInfo})
    }

    const logout = () =>{
        dispatch({type:LOGOUT});
    }
    const contextValue = {
        user,
        login,
        logout
    }
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

//UserProfile component using the authentication context
const UserProfile = () =>{
    const {user, logout} = useAuth();

    return(
        <div>
            {user.authenticated ? (
                <div>
                    <h2>Welcome, {user.userInfo.name}</h2>
                    <button onClick={logout}>Logout</button>
                    </div>
            ):(<LoginForm />)}
        </div>
    )
}

//Login form component using useReducer
const LoginForm = () =>{
    const {login} = useAuth();

    const[formState, dispatch] = useReducer(formReducer, {
        username:'',
        password:'',
        error:''
    });

    const handleInputChange = (e) => {
        dispatch({type:INPUT_CHANGE, payload: {name:e.target.name, value:e.target.value}});
    }

    const handleLogin = async() => {
        const {username, password} = formState;

        try{
            const response = await fetch('http://localhost:5000/api/login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({username, password})
            });
            if(!response.ok){
                throw new Error("Invalid username or password")
            }

            const userData = await response.json();
            login(userData.user)
        }
        catch(error){
            dispatch({type:LOGIN_ERROR, payload:'Invalid username or password'})
        }        
    }

    useEffect(() =>{
        if(formState.username && formState.password && !formState.authenticated){
            handleLogin();
        }
    },[]);

    return (
        <div>
            <h2>Login Form</h2>
            <div>
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" name="username" 
                value={formState.username} onChange={handleInputChange} />
            </div>

             <div>
                <label htmlFor='password'>Password</label>
                <input type="text" id="password" name="password" 
                value={formState.password} onChange={handleInputChange} />
            </div>
            {formState.error && <p style={{color:'red'}}>{formState.error}</p>}
            <button onClick={handleLogin}>Login</button>            
        </div>
    )
}

//Component using AuthProvider
const LoginFormContextReducerEffect = () =>{
    return(
        <AuthProvider>
            <div>
                <h1>Authentication App</h1>
                <UserProfile />
            </div>
        </AuthProvider>
    )
}

export default LoginFormContextReducerEffect;