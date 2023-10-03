import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { getUserIdFromAuth } from '../Redux/actions/GetSellerIdFromAuthActionCreators';
import { toast } from 'react-toastify';


function Verification() {
  const [name, setName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpasswod] = useState("")
  const [confirm_password, setconfirm_passwod] = useState("")
  const [otp, setOtp] = useState("")
  const [token, settoken] = useState("")
  const [sign, setsign] = useState("signup")
  const navigate = useNavigate("")
  const dispatch = useDispatch("")
  const baseUrl = "http://localhost:8000"
  const baseUrls = "https://server.careerclassroom.in"



  const handleRegiter = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/register`, {

        // lastname:lastname,
        email: email,
       

        

        // isEmailVerified: isEmailVerified
      });
      if (response.data.status === "success") {
        toast("Verified")
        
        setsign("login")
      }
    } catch (error) {
      console.log(error)

    }
  }
  const handleotp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/user/verify", {
         otp
      });
  
      console.log(setOtp);
  
      if (response.status === 200) {
        // Handle success
        console.log('OTP verified successfully');
      } else {
        // Handle other response statuses, such as 400 Bad Request
        console.log('OTP verification failed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  
  
  
  
  return (
    <div className='sign-main'>

      <div className='auth-main'>
      
        {sign == "signup" &&
          <div>
            <h4 className='sign-head'>Verify Your Email </h4>
            <form onSubmit={handleRegiter}>
              <input required className='sign-form' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='first Name' ></input>
              

              <button className='sign-btn' type='submit'>Sign Up</button>

            </form>
          </div>
        }
        {sign == "login" &&
          <div>
            <h4 className='sign-head'>Login to your account</h4>
            <form onSubmit={handleotp}>

              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

              <input required className='sign-form' value={otp} onChange={(e) => setOtp(e.target.value)} type='text' placeholder='otp' ></input>
              <button className='sign-btn' type='submit'>Sign Up</button>
             

            </form>
           
          </div>
        }
      
      </div>
    </div>
  )
}
export default Verification