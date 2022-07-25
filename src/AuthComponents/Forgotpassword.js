import React, { useState } from "react";
import { UserAuth } from "../contexts/AuthContexts";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const {resetPassword} = UserAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e){
    e.preventDefault()
    
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(email)
      setMessage("Check your inbox for further instructions")
    }catch(error) {
     setError("Failed to reset password")
      console.log(error)
    }
     setLoading(false)
     }
   
    return (
    <div className='directory'>
      <div className="form">
      <h2>Reset Password</h2>
          {error && <div className="failed">{error}</div>}
          {message && <div className="success">{message}</div>}
         <form onSubmit={handleSubmit}>
          <input onChange={(e) => setEmail(e.target.value)} type='email'
          placeholder="Enter your email" />
        <button className="formButton"> 
          Reset Password
        </button>
      </form>
        <div className="white">
          Need an Account? <Link className="password" to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword;
