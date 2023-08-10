import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState } from 'react';
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
  const [sign, setsign] = useState("signup")
  const navigate=useNavigate("")
  const dispatch=useDispatch("")
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://bronze-ladybug-tutu.cyclic.app/api/v1/user/signup", {
        name: name,
        // lastname:lastname,
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
        dispatch(getUserIdFromAuth(response.data.data.user._id,  response.data.data.user.name, response.data.data.user.email));


        settoken(response.data.token);
        navigate("/home")
        console.log(response.data.data.user.name)
        settoken(response.data.token);
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)

    }
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/user/login", {

        // lastname:lastname,
        email: email,
        password: password,

        headers: {
          Authorization: `Bearer ${token}`
        }

        // isEmailVerified: isEmailVerified
      });
      if (response.data.statusbar === "success") {
        dispatch(getUserIdFromAuth(response.data.data.user._id,  response.data.data.user.name, response.data.data.user.email));
       navigate("/home")
      }
    } catch (error) {
      console.log(error)

    }
  }
  return (
    <div className='sign-main'>

      <div className='auth-main'>
        <button className="sign-switch" onClick={() => setsign("signup")} >Signup</button> <button className="sign-switch" onClick={() => setsign("login")}>Login</button>
        {sign == "signup" &&
          <div>
            <h4 className='sign-head'>Create Your Account </h4>
            <form onSubmit={handleSignUp}>
              <input className='sign-form' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='first Name' ></input>
              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

              <input className='sign-form' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' ></input>

              <input className='sign-form' value={password} onChange={(e) => setpasswod(e.target.value)} type='password' placeholder='******' ></input>

              <input className='sign-form' value={confirm_password} onChange={(e) => setconfirm_passwod(e.target.value)} type='password' placeholder='*****'></input><br></br>
              <button className='sign-btn' type='submit'>Sign Up</button>

            </form>
          </div>
        }
        {sign == "login" &&
          <div>
              <h4 className='sign-head'>Login to your account</h4>
            <form onSubmit={handleLogin}>

              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}
        
              <input className='sign-form' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' ></input>
         
              <input className='sign-form' value={password} onChange={(e) => setpasswod(e.target.value)} type='password' placeholder='******' ></input>

              <button className='sign-btn' type='submit'>Login </button>

            </form>
            {/* <GoogleOAuthProvider clientId="521709143439-tff6587ssiemrjqren9ucijks8dpk1i2.apps.googleusercontent.com"> <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /></GoogleOAuthProvider> */}
          </div>
        }
      </div>
    </div>
  )
}
export default Goggle