import React, {createContext, useContext} from 'react';

//step1:create a context
const MyContext = createContext();
const MyContext1 = createContext();
//step2. Create a provide component
const MyProvider = ({children}) => {
    const sharedValue = "Hello from Context";

    return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>
}

//step3: Consume the context value using useContext
const MyComponent = () =>{
    const contextValue = useContext(MyContext);
    const contextValue1 = useContext(MyContext1);
    return <div>{contextValue}</div>
}

const UseContextHook = () =>{
    return (
        <MyProvider>
            <div>
                <MyComponent />
            </div>
        </MyProvider>
    )
}

export default UseContextHook;