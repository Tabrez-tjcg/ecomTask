import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Api from '../Api/Api'

// const axios = require('axios').default;


const CreateAccountForm = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });



    const nameChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value });
    }

    const onRegisterHandler = (e) =>{
        e.preventDefault();
        
    Api.post('users/register', {
        name: user.name,
        email: user.email,
        password: user.password

    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    }




    return (
        <div className="create-account-form-container" style={{
            maxWidth: '30%',
            margin: '40px auto'
            
        }}>
        <h4>Create Account</h4>
        <form onSubmit={onRegisterHandler}>

        <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input type="text" name="name" onChange={(e) => nameChange(e)} className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name="email" onChange={(e) => nameChange(e)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" onChange={(e) => nameChange(e)}  className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword2">Re-Enrer Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" />
        </div>
 
        <button type="submit" className="btn btn-warning btn-block">Register</button>
        </form>        

        <div>
            <p style={{marginBottom: 0, marginTop: 10}}>Already have an account?</p>
            <Link className="btn btn-light text-dark btn-block" to="/signin">Login Now</Link>
        </div>
    </div>
  )
}

export default CreateAccountForm

