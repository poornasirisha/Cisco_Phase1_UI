import React, {useState} from 'react';
const UseStateHookForm = () =>{
    const [user, setUser] = useState('');
    const [email,setEmail] = useState('');
    const[count, setCount] = useState(0);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
    }
    const handleIncrement = () =>{
        setCount(count + 1);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' 
                onChange={(event)=>{setUser(event.target.value)}} value={user} />
                <button type="submit">Submit</button>
            </form>

            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UseStateHookForm;