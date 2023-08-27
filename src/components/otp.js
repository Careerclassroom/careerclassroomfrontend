import { useState } from "react"
import React from "react"
import axios from "axios"


function OtpVerification(){
    const baseUrl = "http://localhost:8000"
    const [OTP, setOTP] = useState("")
    const handleVerify = async (e) => {
        
        e.preventDefault();
        try {
          const response = await axios.post(`${baseUrl}/api/v1/user/verify`, {
    
            // lastname:lastname,
            OTP: OTP,
          
    
        
    
            // isEmailVerified: isEmailVerified
          });
          if (response.data.statusbar === "true") {
            console.log("verified")
            window.alert("User Created ")
          
          }
        } catch (error) {
          console.log(error)
    
        }
    
    
        
      }
    return(
        <div>
        <h4 className='sign-head'>Login to your account</h4>
        <form onSubmit={handleVerify}>

          {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

          <input required className='' value={OTP} onChange={(e) => setOTP(e.target.value)} type='text' placeholder='otp' ></input>

     
          <button className='sign-btn' type='submit'>Login </button>

        </form>
       
     
      </div>
    )
}
export default OtpVerification