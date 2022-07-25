import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContexts";
import './formstyling.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const {createUser} = UserAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e){
       e.preventDefault()
    
      try {
        setError("")
        setLoading(true)
        await createUser(email, password)
        navigate("/")
      }catch(error) {
        console.log(error)
        setError("failed to create account")
      }
      setLoading(false)
      }
   
      return (
    <div className='directory'>
      <div className="form">
        <h2>Sign up for an account</h2>
      <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder="Enter your email"
            
          />
      
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder="Enter your password"
          />
        {/* <div>
          <label>Password Confirm</label>
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type='password'
          />
        </div> */}
        <button className="formButton">
          Sign Up
        </button>
      </form>
      <div className="directoryButton">

          <div className="white">
        Already have an account? <Link className="password" to="/login">Log In</Link>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;
