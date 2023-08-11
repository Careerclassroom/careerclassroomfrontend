import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Header from "./header";
import Footer from "./footer";
const no_profile = new URL("../images/arrow.png", import.meta.url)
const powerBi = new URL("../images/powerBi.png", import.meta.url)
function Enroll() {
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpasswod] = useState("")
    const [country, setcountry] = useState("")
    const [confirm_password, setconfirm_passwod] = useState("")
    const [number, setNumber] = useState("")
    const [token, settoken] = useState("")
    const id = useSelector((state) => state.get_seller_profile_id.user_id);
    const username = useSelector((state) => state.get_seller_profile_id.name);
    const userEmail = useSelector((state) => state.get_seller_profile_id.email);
    const userLastname = useSelector((state) => state.get_seller_profile_id.lastname);
    const baseUrl = "https://server.careerclassroom.in"
    const baseUrls = "http://localhost:8000"
    const navigate=useNavigate("")
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${baseUrl}/api/v1/user/update/${id}`, {


                country: country,
                number: number



                // isEmailVerified: isEmailVerified
            });
            // dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.name, response.data.data.user.email));
            if (response.data.status === "success") {
                navigate("/checkout")
                // dispatch(getUserIdFromAuth(response.data.data.user._id,  response.data.data.user.name, response.data.data.user.email));
                console.log(response.data.data.user._id)

                // settoken(response.data.token);
                // navigate("/home")
                // console.log(response.data.data.user.name)
                // settoken(response.data.token);
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div>
           <Header/>
            <div style={{position:"relative",top:"80px"}} className='about-main'>
                <div className=''>
                    <span className='about-text'>Enrollment Form</span>

                </div>
                <div style={{ width: "100%", backgroundColor: "rgba(18, 3, 127, 1)", height: "70px", color: "white", fontSize: "30px", padding: "10px", marginTop: "160px" }}>
                    You are just one step away to start new journey
                </div>
                <div className='course-main-head'>
                    
                    <div className='course-main'>
                        
                        <div className='course-main1'>
                          
                        Join us for an exclusive LIVE workshop on Power BI, starting on 10th August!
                       
                        <img width="90%" src={powerBi}></img>
                       
                         
                        </div>
                        <div className='course-main2' style={{ textAlign: "left" }}>
                            <div style={{ width: "90%", margin: "20px auto" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <h6>Your Detail </h6>
                                        <h6>For Access</h6>
                                    </div>
                                    <div>
                                        <h6>Payment </h6>
                                        <h6>For Program</h6>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <form onSubmit={handleSignUp}>
                                    <div className="enroll-name" style={{}}>
                                        <div>
                                    <h6 className="enroll-label">First Name</h6>
                                    {username}
                                    </div>
                                    <div>
                                    <h6 className="enroll-label">Last Name</h6>
                                    {userLastname}
                                    </div>
                                    </div>

                                    {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}
                                    <h6 className="enroll-label">Email</h6>
                                    {userEmail}

                                    <h6 className="enroll-label">Number</h6>
                                    <input className="form-enroll" value={number} onChange={(e) => setNumber(e.target.value)} type='tel' placeholder='country' ></input>
                                    <h6 className="enroll-label">Country </h6>
                                    <input className="form-enroll" value={country} onChange={(e) => setcountry(e.target.value)} type='text' placeholder='lastname'></input><br></br>
                                    <button className='Proceed' type='submit'>Proceed Now</button>

                                </form>
                            </div>
                        </div>

                    </div>



                </div>
                <Footer/>
            </div>
          
        </div>
    )
}
export default Enroll