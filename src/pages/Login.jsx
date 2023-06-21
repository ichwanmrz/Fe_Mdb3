import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
        const navigate = useNavigate();
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")

        const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/profile')

        console.log(username);
        console.log(password);
}

  return (
    <div className='container'>
        <Form className='col-lg-4 col-7 bg-success mx-auto  p-5 mt-5 rounded fw-bold' 
        onSubmit={handleSubmit}>
            <h3 className='text-center mb-4 '>Login Form</h3>
            <label> Username :
            <input type='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </label>
            <br/><br/> 
            <label>Password :
            <input type='username' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <Button type='submit' className='btn btn-info mt-3'>Submit</Button>
        </Form>
    </div>
  )
}

export default Login