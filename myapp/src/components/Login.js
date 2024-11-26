import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [message,setMessage] = useState('');
    const authenticate=(e)=>{
        e.preventDefault();
        if(e.uname === 'admin'){
            //navigate('/dashboard')
            setMessage("correct username or password")
            const navigate = useNavigate();
            navigate('/dashboard')
        }else{
            setMessage("Incorrect username or password")
        }
    }
  return (
    <>
        <div>Login here</div>
        

        <form onSubmit={authenticate}>
            <input type='text'
            placeholder='Username' 
            name='uname'/>

            <input type='password'
            placeholder='Password' 
            name='password'/>

            <button onClick={authenticate}>Login Here</button>
        </form>
        <p>{message}</p>
    </>
  )
}

export default Login