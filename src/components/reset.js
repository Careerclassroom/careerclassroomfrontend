import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

function PasswordReset() {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [cPassword, setcPassword] = useState('');
  const [message, setMessage] = useState('');
  console.log(resetToken)
  const baseUrls = "http://localhost:8000"
  const baseUrl = "https://server.careerclassroom.in"
 
  const handleResetPassword = async () => {
  
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/reset/${resetToken}`, {
       password:newPassword,
       confirm_password:cPassword
      });

      setMessage(response.data.message);
      if(response.data.statusbar=="success"){
        toast.success("Password Updated")
        
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error("Error in updating password")
    }
  };

  return (
    <div>
       <div style={{background:"#12037F",width:"60%",margin:"100px auto" ,borderRadius:"10px",padding:"10px"}}>
      <h4 style={{color:"white"}}>Password Reset</h4>
      <p style={{color:"white"}}>Reset your password:</p>
      <form onSubmit={handleResetPassword}>
      <input
      className='sign-form'
        type="New password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder='password'
      /><br></br>
      <input
      className='sign-form'
        type="password"
        value={cPassword}
        onChange={(e) => setcPassword(e.target.value)}
        placeholder='Confirm password'
      /><br></br>


      <button className='sign-btn' type="submit">Reset Password</button>
      </form>
      </div> 
    
    </div>
  );
}

export default PasswordReset;