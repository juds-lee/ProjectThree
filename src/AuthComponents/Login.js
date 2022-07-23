import React, { useState } from "react";
// import { useRef } from "react";
import { UserAuth } from "../contexts/AuthContexts";
import { Link, useNavigate } from "react-router-dom";

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
   <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h2>Sign In</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' />
        </div>
        <div>
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)}  type='password' />
        </div>
        <button>
          Sign In
        </button>
      </form>
      <div>
            <Link to="/forgotpassword">Forgot Password</Link>
        </div>
      <div>
        Need an Account? <Link to="/signup">Sign Up</Link>
      </div>
   

    </div>
  )
}

export default Login;