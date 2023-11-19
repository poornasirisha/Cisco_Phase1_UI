import React, {useEffect, useRef,useState} from "react";

const UseRefHook = () =>{
    const countRef = useRef(0);
    const inputRef = useRef(null);

    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        //it will update the ref without triggering a re-render
        countRef.current += 1;

        setCount((prevState) => prevState + 1);

    }

    useEffect(() => {
        inputRef.current.focus();
    },[])

    return (
        <>
            <p>count with Ref: {countRef.current}</p>
            <p>count with state:{count}</p>

            <button onClick={handleIncrement}>+</button>

            <input type="text" ref={inputRef}></input>
        </>
    )
}

export default UseRefHook;