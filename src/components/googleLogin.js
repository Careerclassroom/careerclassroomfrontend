import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserIdFromAuth } from "../Redux/actions/GetSellerIdFromAuthActionCreators";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const About2 = new URL("../images/logo.png", import.meta.url);

function Goggle() {
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
  const baseUrl = "https://server.careerclassroom.in";

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
        setsign("OTP");
        settoken(response.data.token);
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
        window.alert("User Created");
        setsign("login");
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
        <img
          style={{ position: "relative", top: "40%" }}
          width="500px"
          src={About2}
          alt="logo"
        />
      </div>

      <div className="auth-main">
        {sign === "signup" && (
          <div>
            <div className="sign-head">Sign Up </div>
            <form onSubmit={handleSignUp}>
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
            <h5 style={{ marginTop: "20px", color: "white" }}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("login")}>
              Have an account ?
            </button>
          </div>
        )}

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
              }}
            >
              Forgot Password?
            </button>
            <br />
            <h5 style={{ marginTop: "10px", color: "white" }}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("signup")}>
              Create your account
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
                placeholder="otp"
              />
              <button className="sign-btn" type="submit">
                Verify
              </button>
            </form>
            <h5 style={{ color: "white", marginTop: "20px" }}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("login")}>
              Back to login
            </button>
          </div>
        )}

        {sign === "forgot" && (
          <div>
            <h5 style={{}} className="sign-head">
              Forgot Password?
            </h5>
            <h6 className="sign-head">
              Please Enter your email to get your reset password link{" "}
            </h6>
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
      </div>
    </div>
  );
}

export default Goggle;
