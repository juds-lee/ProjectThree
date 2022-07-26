import React from "react";
import { UserAuth } from "../contexts/AuthContexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './formstyling.css';

const Dashboard = () => {
    const {logout} = UserAuth();
    const navigate = useNavigate();
    
    async function handleLogOut(){
       
        try{
          await logout()
          navigate("/login")
        }catch{
       return;
        }
    }
    return(
     <div>
       <button className="password logout" variant="link" onClick={handleLogOut}>Log Out</button> 
      </div>
    )
}
export default Dashboard; 