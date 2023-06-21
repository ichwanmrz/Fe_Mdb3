import React from 'react';

import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("username")); 
    console.log(watch("password")); 
    
  return (
    <div className='container'>
           
        <Form className='col-lg-4 col-7 bg-success mx-auto p-5 mt-5 rounded fw-bold' 
        onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-center mb-4 '>Register Form</h3>
            <label> Username : </label><br/>
            <input className='w-100' type='text' {...register("username", { required: true })}/>
            <br/><br/> 
            <label>Password :  </label><br/>
            <input className='w-100' type='password' {...register("password", { required: true })}/>
            <br/><br/> 
            <label>Address :    </label><br/> 
            <input className='w-100' type='text' {...register("address")}/>
            <br/> 
            <Button type='submit' className='btn btn-info mt-3'>Submit</Button><br/>
            {errors.username && <span>Username belum dimasukkan</span>}<br/>
            {errors.password && <span>Password belum dimasukkan</span>}
        </Form>
    </div>
  )
}

export default Register