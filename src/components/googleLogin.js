import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { getUserIdFromAuth } from '../Redux/actions/GetSellerIdFromAuthActionCreators';

function Goggle() {
  const [name, setName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpasswod] = useState("")
  const [confirm_password, setconfirm_passwod] = useState("")
  const [token, settoken] = useState("")
  const [OTP, setOTP] = useState("")
  const [sign, setsign] = useState("signup")
  const navigate = useNavigate("")
  const dispatch = useDispatch("")
  const baseUrls = "http://localhost:8000"
  const baseUrl = "https://server.careerclassroom.in"
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/signup`, {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        confirm_password: confirm_password,
        headers: {
          Authorization: `Bearer ${token}`
        }




        // isEmailVerified: isEmailVerified
      });
      // dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.name, response.data.data.user.email));
      if (response.data.statusbar === "success") {
        dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.lastname, response.data.data.user.name, response.data.data.user.email));

        setsign("OTP")
        settoken(response.data.token);

        console.log(response.data.data.user.name)
        settoken(response.data.token);
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)

    }
  }
  //   const GoogleAuth = async () => {
  //     // const dispatch = useDispatch();

  //     try {
  //       const popup = window.open("http://localhost:8000/auth/google");

  //       // Check if the popup window was opened successfully
  //       if (!popup) {
  //         throw new Error("Popup window blocked by browser");
  //       }

  //       // Listen for messages from the popup window
  //       window.addEventListener('message', (event) => {
  //         // Validate the origin and the data of the message
  //         if (event.origin !== "http://localhost:8000" || !event.data || !event.data._id || !event.data.name) {
  //           throw new Error("Invalid message received from popup window");
  //         }

  //         // Dispatch the action
  //         dispatch(getUserIdFromAuth(event.data._id, event.data.lastname, event.data.name, event.data.email));

  //         // Close the popup window after dispatching the data
  //         popup.close();
  //       });

  //     } catch (err) {
  //       // Log the error to the console
  //       console.error(err);
  //     }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/login`, {

        // lastname:lastname,
        email: email,
        password: password,

        headers: {
          Authorization: `Bearer ${token}`
        }

        // isEmailVerified: isEmailVerified
      });
      console.log("hi");
      if (response.data.statusbar === "success") {
        dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.lastname, response.data.data.user.name, response.data.data.user.email));
        navigate("/home")
      }
      // if (response.data.statusbar === "success") {
      //   dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.lastname, response.data.data.user.name, response.data.data.user.email));
      //   navigate("/home")
      // }
    } catch (error) {
      console.log(error)
      if (error.message === "Request failed with status code 403") {
        setsign("OTP")

      }


    }



  }
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
        navigate("/home")
      }
    } catch (error) {
      console.log(error)

    }



  }
  const handleRegiter = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/forgot`, {

        // lastname:lastname,
        email: email,




        // isEmailVerified: isEmailVerified
      });
      if (response.data.statusbar === "success") {


      }
    } catch (error) {
      console.log(error)

    }
  }
  return (
    <div className='sign-main'>

      <div className='auth-main'>

        {sign == "signup" &&
          <div>
            <h4 className='sign-head'>Create Your Account </h4>
            <form onSubmit={handleSignUp}>
              <input required className='sign-form' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='first Name' ></input>
              <input required className='sign-form' onChange={(e) => setLastName(e.target.value)} type='text' placeholder='last Name' ></input>

              <input required className='sign-form' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' ></input>

              <input required className='sign-form' value={password} onChange={(e) => setpasswod(e.target.value)} type='password' placeholder='******' ></input>

              <input required className='sign-form' value={confirm_password} onChange={(e) => setconfirm_passwod(e.target.value)} type='password' placeholder='*****'></input><br></br>
              <button className='sign-btn' type='submit'>Sign Up</button>

            </form>
            <h5 style={{ marginTop: "30px", color: "white" }}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("login")}>have an account?</button>
          </div>
        }

        {sign == "login" &&
          <div>
            <h4 className='sign-head'>Login to your account</h4>
            <form onSubmit={handleLogin}>

              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

              <input required className='sign-form' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' ></input>

              <input required className='sign-form' value={password} onChange={(e) => setpasswod(e.target.value)} type='password' placeholder='******' ></input>

              <button className='sign-btn' type='submit'>Login </button>

            </form>
            <button onClick={() => setsign("forgot")} style={{ background: "transparent", border: "none", color: "white", marginTop: "10px" }}>Forgot Password?</button><br></br>
            <h5 style={{ marginTop: "30px", color: "white" }}>Or</h5>

            <button className="sign-switch" onClick={() => setsign("signup")}> Create your account </button>
          </div>

        }
        {sign == "OTP" &&
          <div>
            <h4 className='sign-head'>Verify Your Account</h4>
            <form onSubmit={handleVerify}>

              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

              <input required className='sign-form' value={OTP} onChange={(e) => setOTP(e.target.value)} type='text' placeholder='otp' ></input>


              <button className='sign-btn' type='submit'>Verify </button>


            </form>
            <h5 style={{color:"white" ,marginTop:"30px"}}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("login")}>Back to login</button>



          </div>

        }

        {sign == "forgot" &&
          <div>
            <h4 style={{ marginTop: "30px" }} className='sign-head'>Forgot Your Password?</h4>
            <h6 className='sign-head'>Please Enter your email to get your reset password link </h6>
            <form onSubmit={handleRegiter}>

              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

              <input required className='sign-form' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' ></input>


              <button className='sign-btn' type='submit'>Submit </button>

            </form>

          </div>

        }

      </div>

    </div>
  )
}
export default Goggle