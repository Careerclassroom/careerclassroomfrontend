import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserIdFromAuth } from "../Redux/actions/GetSellerIdFromAuthActionCreators";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { bounceInDown } from "react-animations";
import { flip } from "react-animations";
import { flipInY } from "react-animations";
import { StyleSheet, css } from "aphrodite";
const About2 = new URL("../images/logo.png", import.meta.url);

function Goggle() {

  const styles = StyleSheet.create({
    fadeInAnimation: {
      animationName: bounceInDown,
      animationDuration: "1s",
    },
    Flip: {
      animationName: flip,
      animationDuration: "2s",
    },
    Flip2: {
      animationName: flipInY,
      animationDuration: "1s",
    },
  });
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpasswod] = useState("");
  const [confirm_password, setconfirm_passwod] = useState("");
  const [token, settoken] = useState("");
  const [OTP, setOTP] = useState("");
  const [country, setcountry] = useState("");
  const [number, setNumber] = useState("");
  const [sign, setsign] = useState("signup");
  const navigate = useNavigate("");
  const dispatch = useDispatch("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const baseUrl = "https://server.careerlassroom.in";
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isNameValid = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const isNumberValid = (number) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!isNameValid(name)) {
      toast.error("Invalid name");
      return;
    }
    if (!isNameValid(lastname)) {
      toast.error("Invalid last name");
      return;
    }
    if (!isNumberValid(number)) {
      toast.error("Invalid number");
      return;
    }
    
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/signup`, {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        confirm_password: confirm_password,
        country: country,
        number: number,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.statusbar === "success") {
        dispatch(
          getUserIdFromAuth(
            response.data.data.user._id,
            response.data.data.user.lastname,
            response.data.data.user.name,
            response.data.data.user.email
          )
        );
        console.log(response)
        toast.success("Otp Sent to mail");
        setMinutes(1)
        setSeconds(0)
        setsign("OTP");
        settoken(response.data.token);
      }
    } catch (error) {
      console.log(error);
      toast.error("Registred email or somthing went wrong ")
    }
  };
  const handleSend2 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/resendOtp`, {
        // lastname:lastname,
        email: email,

        // isEmailVerified: isEmailVerified
      });
      if (response.data.status === true) {
        console.log("verified");
        setMinutes(1);
        setSeconds(0);
        setsign("OTP");
        toast.success("mail send to mail");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSend3= async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/resendOtp`, {
        // lastname:lastname,
        email: email,

        // isEmailVerified: isEmailVerified
      });
      if (response.data.status === true) {
        console.log("verified");
        setMinutes(1);
        setSeconds(0);
        setsign("OTP2");
        toast.success("mail send to mail");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOtpLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/loginWithotp`, {
        // lastname:lastname,
        email: email,
        OTP:OTP

        // isEmailVerified: isEmailVerified
      });
      if (response.data.status === true) {
        console.log("verified");
        setMinutes(1);
        setSeconds(0);
        setsign("OTP");
        toast.success("mail send to mail");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const google = async () => {
    const popup = window.open(`${baseUrl}/auth/google`);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/login`, {
        email: email,
        password: password,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === "false") {
        toast.error(" Please verify your mail ");
        setsign("OTP");
        setMinutes(1);
        setSeconds(0);
      }
      if (response.data.statusbar === "success") {
        dispatch(
          getUserIdFromAuth(
            response.data.data.user._id,
            response.data.data.user.lastname,
            response.data.data.user.name,
            response.data.data.user.email
          )
        );

        toast.success("Login successful");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error("Wrong email or password ")
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/verify`, {
        OTP: OTP,
      });

      if (response.data.statusbar === "true") {
        console.log("verified");
        toast.success("User verification success");
        setsign("login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleVerify2 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/verify`, {
        OTP: OTP,
      });
      console.log(response)
      if (response.data.statusbar === "true") {
        
        toast.success("Login success");
        dispatch(
          getUserIdFromAuth(
            response.data.data.user._id,
            response.data.data.user.lastname,
            response.data.data.user.name,
            response.data.data.user.email
          )
        );
        navigate('/home')
     
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegiter = async (e) => {
    e.preventDefault();
    toast.success("Reset password email sent to your email");
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/forgot`, {
        email: email,
      });

      if (response.data.statusbar === "success") {
        // Handle success
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-main">
      <div className="auth-logo">
        <Link to="/home">  <img
          style={{ position: "relative", top: "40%" }}
          width="500px"
          src={About2}
          alt="logo"
          className={css(styles.fadeInAnimation)} 
        /></Link>
      
      </div>

      <div className="auth-main">
        {/* signup */}
        {sign === "signup" && (
          <div>
           
            <form onSubmit={handleSignUp}>
            <div className="sign-head">Sign Up </div>
              <input
                required
                className="sign-form"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="First name"
              />
              <input
                required
                className="sign-form"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last name"
              />
              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              />
              <input
                required
                className="sign-form"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                placeholder="Contact number"
                maxLength="10"
                minLength='10'
              />
              <input
                required
                className="sign-form"
                value={password}
                onChange={(e) => setpasswod(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <input
                required
                className="sign-form"
                value={confirm_password}
                onChange={(e) => setconfirm_passwod(e.target.value)}
                type="password"
                placeholder="Confirm password"
              />
         
              
              <br />
              <button className="sign-btn" type="submit">
                Sign up
              </button>
            </form>
            <br></br>
            <button className="sign-switch" >
              Have an account ? <Link style={{color:"white"}} onClick={()=>setsign("resend2")} >Login</Link> 
            </button>
          </div>
        )}
{/* login */}
        {sign === "login" && (
          <div>
            <h4 className="sign-head">Login </h4>
            <form onSubmit={handleLogin}>
              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              />
              <input
                required
                className="sign-form"
                value={password}
                onChange={(e) => setpasswod(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button className="sign-btn" type="submit">
                Login
              </button>
            </form>
            <button
              onClick={() => setsign("forgot")}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                marginTop: "10px",
                textDecoration:"underline"
              }}
            >
              Forgot Password?
            </button>
            <br />
         <br></br>
            <button className="sign-switch" >
              Create New ? <Link style={{color:"white"}} onClick={()=>setsign("signup")} >Signup</Link> 
            </button>
            <br />
         <br></br>
            <button className="sign-switch" >
              Login with OTP <Link style={{color:"white"}} onClick={()=>setsign("resend2")} >Login</Link> 
            </button>    
         </div>
          
        )}


        {sign === "loginWithotp" && (
          <div>
            <h4 className="sign-head">Login </h4>
            <form onSubmit={handleLogin}>
              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              />
              <input
                required
                className="sign-form"
                value={password}
                onChange={(e) => setpasswod(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button className="sign-btn" type="submit">
                Login
              </button>
            </form>
            <button
              onClick={() => setsign("forgot")}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                marginTop: "10px",
                textDecoration:"underline"
              }}
            >
              Forgot Password?
            </button>
            <br />
            <h5 style={{ marginTop: "10px", color: "white" }}>Or</h5>
            <button className="sign-switch" >
              Create New ? <Link style={{color:"white"}} onClick={()=>setsign("signup")} >Signup</Link> 
            </button>
          </div>
        )}

        {sign === "OTP" && (
          <div>
            <h4 className="sign-head">Verify Your Account</h4>
            <form onSubmit={handleVerify}>
              <input
                required
                className="sign-form"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                type="text"
                placeholder="Enter 4 digit OTP"
              />
              <button className="sign-btn" type="submit">
                Verify
              </button>
            </form>
            <br></br>
            <div className="countdown-text" style={{color:"white"}}>
                {seconds > 0 || minutes > 0 ? (
                  <p>
                    Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </p>
                ) : (
                  <button
                    className="time-button"
                    style={{
                      background:"none",
                      outline:"none",
                      border:"none",color:"white",
                      textDecoration:"underline"
                    }}
                    onClick={() => setsign("resend")}
                  >
                    Didn't recieve code?
                  </button>
                )}
              </div>
            {/* <h5 style={{ color: "white", marginTop: "20px" }}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("login")}>
              Back to login
            </button> */}
         
          </div>
          
        )}
         {sign === "OTP2" && (
          <div>
            <h4 className="sign-head">Verify Your Account</h4>
            <form onSubmit={handleVerify2}>
              <input
                required
                className="sign-form"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                type="text"
                placeholder="Enter 4 digit OTP"
              />
              <button className="sign-btn" type="submit">
                Verify
              </button>
            </form>
            <br></br>
            <div className="countdown-text" style={{color:"white"}}>
                {seconds > 0 || minutes > 0 ? (
                  <p>
                    Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </p>
                ) : (
                  <button
                    className="time-button"
                    style={{
                      background:"none",
                      outline:"none",
                      border:"none",color:"white",
                      textDecoration:"underline"
                    }}
                    onClick={() => setsign("resend")}
                  >
                    Didn't recieve code?
                  </button>
                )}
              </div>
            {/* <h5 style={{ color: "white", marginTop: "20px" }}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("login")}>
              Back to login
            </button> */}
         
          </div>
          
        )}

        {sign === "forgot" && (
          <div>
            <h5 style={{}} className="sign-head">
              Forgot Password?
            </h5>
           
            <form onSubmit={handleRegiter}>
              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              />
              <button className="sign-btn" type="submit">
                Submit
              </button>
            </form>
            <button
              className="sign-switch"
              style={{ marginTop: "20px" }}
              onClick={() => setsign("signup")}
            >
              Back to login
            </button>
          </div>
        )}
           {sign === "resend" && (
          <div>
            <h5 style={{}} className="sign-head">
              Resend OTP
            </h5>
           
            <form onSubmit={handleSend2}>
              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              />
              <button className="sign-btn" type="submit">
                Submit
              </button>
            </form>
            <button
              className="sign-switch"
              style={{ marginTop: "20px" }}
              onClick={() => setsign("signup")}
            >
              Back to login
            </button>
          </div>
        )}
          {sign === "resend2" && (
          <div>
            <h5 style={{}} className="sign-head">
             Login with OTP
            </h5>
           
            <form onSubmit={handleSend3}>
              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              />
              <button className="sign-btn" type="submit">
                Submit
              </button>
            </form>
            <button
              className="sign-switch"
              style={{ marginTop: "20px" }}
        
            >
              Login with password? <span   style={{textDecoration:"underline"}}    onClick={() => setsign("login")}> Login</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Goggle;
