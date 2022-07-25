import React from "react";
import { UserAuth } from "../contexts/AuthContexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './formstyling.css';

const Dashboard = () => {
    const [error, setError] = useState("");
    const {currentUser, logout} = UserAuth();
    const navigate = useNavigate();
    
    async function handleLogOut(){
        setError("")
        try{
          await logout()
          navigate("/login")
        }catch{
        setError('Failed to log out')
        }
    }
    return(
     <div>
       <button className="password logout" variant="link" onClick={handleLogOut}>Log Out</button> 
      </div>
    )
}
export default Dashboard; 