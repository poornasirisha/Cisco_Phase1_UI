import React, {useEffect, useState} from 'react';

const UseEffectHook = () =>{
    const [count, setCount] = useState(0);

    //useEffect is called after the component renders
    useEffect(() =>{
        console.log('Component did mount (Initial render');

        return() =>{
            console.log('component will unmount')
        }
    },[]);//empty dependency array means this effect runs once after the initial render

    useEffect(() =>{
        console.log('Count has changed',count);
    },[count]);

    return(
        <div>
            <p>Count: {count}</p>
            <button onCanPlay={()=>setCount(count+1)}>Increment</button>
        </div>
    )

}