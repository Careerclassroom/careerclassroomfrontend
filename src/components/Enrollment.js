import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "./header";
import { useDispatch } from "react-redux";
import { getPay } from "../Redux/actions/getPayid";

import Footer from "./footer";
const no_profile = new URL("../images/arrow.png", import.meta.url);
const powerBi = new URL("../images/powerBi.png", import.meta.url);
function Enroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const dispatch=useDispatch('')
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpasswod] = useState("");
  const [country, setcountry] = useState("");
  const [confirm_password, setconfirm_passwod] = useState("");
  const [number, setNumber] = useState("");
  const [token, settoken] = useState("");
  const [data, setData] = useState("");

  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const username = useSelector((state) => state.get_seller_profile_id.name);
  const userEmail = useSelector((state) => state.get_seller_profile_id.email);
  const userLastname = useSelector(
    (state) => state.get_seller_profile_id.lastname
  );
  const baseUrl = "https://server.careerclassroom.in";
  const baseUrls = "http://localhost:8000";
  const navigate = useNavigate("");
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
  useEffect(() => {
    if (!id) {
      navigate("/login-signup", {
        replace: true,
        state: {
          signIn: true,
        },
      });
    } else {
    
      navigate("/enroll");
      // Assuming fetchData is a function you want to call when 'id' is truthy
    }
  }, [navigate, id]);
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
    if(!isEmailValid(country)){
      toast.error('In valid country')
    }

    try {
      const response = await axios.patch(
        `${baseUrl}/api/v1/user/update/${id}`,
        {
          country: country,
          number: number,
          name: name,
          lastname: lastname,
          email: email,

          // isEmailVerified: isEmailVerified
        }
      );
      // dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.name, response.data.data.user.email));
      if (response.data.status === "success") {
     


        toast("Go to checkout page");

        navigate("/checkout");

        // dispatch(getUserIdFromAuth(response.data.data.user._id,  response.data.data.user.name, response.data.data.user.email));
        // console.log(response.data.data.user._id)

        // settoken(response.data.token);
        // navigate("/home")
        // console.log(response.data.data.user.name)
        // settoken(response.data.token);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePaynow = async (e) => {
    e.preventDefault()
      
    try {
       
        const response = await axios.post(`${baseUrl}/api/v1/order/payment/${id}`, {
            MobileNumber: number,
            amount: 1,
            redirectUrl: "https://careerclassroom.in/home",
            courseId:"64ce0e120dbd2932947c4778",
            courseDescription:"Post work timing What is data analytics and how to make use of it? What is power bi and how it is useful? Learn Power BI hands-on!! Build a project in 4 days- Learn data cleaning, Data visualization, data modeling, dax, power Query etc Road ahead to learn advance features and projects Day 4",
            courseName:"4 Days Bootcamp on Power BI Expert & Excel with Project. [ 1 hour per day ]",
            email:email
        });
        console.log('hiii')



        console.log('Response from backend:', response.data);
        dispatch(getPay(response.data.Data.payment_response.data.instrumentResponse.redirectInfo.url))

        navigate('/checkout')
    } catch (error) {
        console.error('Error initiating payment', error);
        toast.error('Error initiating payment');
    }
};
  useEffect(() => {
    handleGetOneUser();
  }, []);
  const handleGetOneUser = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/getOneuser/${id}`);
      setData([res.data.data.user]);
      console.log(res.data.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (data === undefined || data.length === 0) return;
    setEmail(data[0].email !== null ? data[0].email : "");
    setName(data[0].name !== null ? data[0].name : "");
    setLastName(data[0].lastname !== null ? data[0].lastname : "");
    setcountry(data[0].country !== null ? data[0].country : "");
    setNumber(data[0].number !== null ? data[0].number : "");
  }, [data]);


  return (
    <div>
      <Header />
      <div style={{ position: "relative", top: "80px" }} className="about-main">
        <div className="">
          <span style={{ color: "#12037F" }} className="about-text">
            Enrollment Form
          </span>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgba(18, 3, 127, 1)",
            height: "auto",
            color: "white",
            fontSize: "30px",
            padding: "10px",
            marginTop: "160px",
          }}
        >
          You are just one step away to start new journey
        </div>
        <div className="course-main-head">
          <div className="course-main">
            <div className="course-flex">
              <div className="course-main1">
                <p style={{ textAlign: "center" }}>
                  4 Days Bootcamp on Power BI Expert & Excel with Project. [ 1
                  hour per day ]
                </p>
                <img width="100%" src={powerBi}></img>
              </div>
              <div className="course-main2">
             
             
                  <div className="details-flex" style={{}}>
                    <div>
                      <h3>Your Details </h3>
                      <h3 style={{ fontSize: "15px" }}> For Access</h3>
                    </div>
                    <div style={{ color: "#737373" }}>
                      <h3>Payment </h3>
                      <h3 style={{ fontSize: "15px" }}> For your program</h3>
                    </div>
                  </div>
                  <div className="enroll-flex2">
                    <div>
                      <label className="form-label">
                        Name <span className="red">*</span>{" "}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-enroll2"
                      ></input>
                    </div>
                    <div>
                      <label className="form-label">
                        Last Name <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-enroll2"
                      ></input>
                    </div>
                  </div>
             
                 
              
                  <br></br>
                  <label className="form-label">
                    Counry <span className="red">*</span>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                    className="form-enroll"
                  ></input>
                  <br></br>
                
                  <br></br>
                  <form onSubmit={handlePaynow}>
                  <label className="form-label">
                    Email <span className="red">*</span>
                  </label>
                  <br></br>
                 
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-enroll"
                  ></input>
                   <label className="form-label">
                    Phone <span className="red">*</span>
                  </label>
                    <input className="form-enroll"  type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
                    <button
                    style={{ marginTop: "50px" }}
                    type="submit"
                    className="Proceed"
                  >
                    {" "}
                    Proceed Now
                  </button>
                </form>
                  
               
              
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default Enroll;
