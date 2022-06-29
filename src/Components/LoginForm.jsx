import React from 'react'
import { Link }  from 'react-router-dom'
import Api from '../Api/Api';

const LoginForm = () => {

    const signInHandler = (e) =>{
        e.preventDefault();
        
    Api.get('users/:id', {
    

    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    }


  return (
    <div className="login-form-container" style={{
        maxWidth: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    }}>
        <h4>Sign In</h4>
        <form onSubmit={signInHandler}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
 
        <button type="submit" className="btn btn-warning btn-block">Sign In</button>
        </form>        

        <div>
            <p style={{marginBottom: 0, marginTop: 10}}>Don't have an account?</p>
            <Link className="btn btn-light text-dark btn-block" to="/signup">Create Account Now</Link>
        </div>
    </div>
  )
}

export default LoginForm