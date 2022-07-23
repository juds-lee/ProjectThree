import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContexts";

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
    <div>
      <div>
        <h1>Who's That Pokemon</h1>
        <h2>Sign up for a free account</h2>
        <p> Already have an account?{' '} 
          <Link to='/'>
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
        </div>
        {/* <div>
          <label>Password Confirm</label>
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type='password'
          />
        </div> */}

        <button>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
