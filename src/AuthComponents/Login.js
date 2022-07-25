import React, { useState } from "react";
// import { useRef } from "react";
import { UserAuth } from "../contexts/AuthContexts";
import { Link, useNavigate } from "react-router-dom";
import './formstyling.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn} = UserAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
    e.preventDefault()
    
    try {
      setError("")
      setLoading(true)
      await signIn(email, password)
      navigate("/")
    }catch(error) {
      console.log(error)
     setError("Failed to log in")
    }
     setLoading(false)
     }
   
    return (
   <div className='directory'>
    <div className="form">
        <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
          <input onChange={(e) => setEmail(e.target.value)} type='email'
           placeholder="Enter your email" />
          <input onChange={(e) => setPassword(e.target.value)}  type='password'
           placeholder="Enter your password" />
        <button className="formButton">
          Sign In
        </button>
      </form>
      <div className="directoryButton">
        <div className="password">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
        <div className="white">
        Need an Account? <Link className="password" to="/signup">Sign Up</Link>
        </div>
    </div>
   </div>

    </div>
  )
}

export default Login;