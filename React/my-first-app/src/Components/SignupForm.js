import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';

const SignUpForm = () => {
    const navigate = useNavigate();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[message, setMessage] = useState('');

    const handleSignup = async() => {
        try{
            if(!username || !password || !name){
                setMessage('Please fill out ncessary fields')
                return;
            }

            //Make a POST Request to signup API

            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    username,password, name
                })
            });
            const data = await response.json();

            if(data.success){
                setMessage(data.message);
                alert(data.message);
                navigate('/login-context-reducer-effect');
            }
            else{
                setMessage('User registeration failed')
            }
            
        }
        catch(error){
            console.log('Error during signup', error);
            setMessage('An error occurred during registration')
        }
    };

    return(
        
    <div>
    <h2>Signup Form</h2>
    <form>
      {/* Bootstrap input controls */}
      <div className='container'>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary" type="button" onClick={handleSignup}>
        Sign Up
      </button>
      </div>
    </form>
    {/* Display the response message */}
    {message && <p>{message}</p>}
  </div>

    )

}

export default SignUpForm;
