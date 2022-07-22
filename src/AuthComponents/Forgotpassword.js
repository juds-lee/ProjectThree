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
    <div>
      <h2>Reset Password</h2>
          {error && <div className="danger">{error}</div>}
         <form onSubmit={handleSubmit}>
          <label >Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' />
        <button> 
          Reset Password
        </button>
      </form>
      <div>
        Need an Account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Forgotpassword;
