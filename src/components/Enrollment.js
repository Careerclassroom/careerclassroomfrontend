import React from "react";
import { useState, useEffect } from "react";
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
    const [data, setData] = useState("")

    const id = useSelector((state) => state.get_seller_profile_id.user_id);
    const username = useSelector((state) => state.get_seller_profile_id.name);
    const userEmail = useSelector((state) => state.get_seller_profile_id.email);
    const userLastname = useSelector((state) => state.get_seller_profile_id.lastname);
    const baseUrls = "https://server.careerclassroom.in"
    const baseUrl = "http://localhost:8000"
    const navigate = useNavigate("")



    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${baseUrl}/api/v1/user/update/${id}`, {


                country: country,
                number: number,
                name: name,
                lastname: lastname,
                email: email





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
    useEffect(() => {
        handleGetOneUser()
    }, []);
    const handleGetOneUser = async () => {

        try {
            const res = await axios.get(`${baseUrl}/api/v1/user/getOneuser/${id}`);
            setData([res.data.data.user])
            console.log(res.data.data.user)

        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        if (data === undefined || data.length === 0) return
        setEmail(data[0].email !== null ? data[0].email : '');
        setName(data[0].name !== null ? data[0].name : '');
        setLastName(data[0].lastname !== null ? data[0].lastname : '');
        setcountry(data[0].country !== null ? data[0].country : '');
        setNumber(data[0].number !== null ? data[0].number : '');
     




    }, [data])
    return (
        <div>
            <Header />
            <div style={{ position: "relative", top: "80px" }} className='about-main'>
                <div className=''>
                    <span style={{ color:"#12037F"}} className='about-text'>Enrollment Form</span>

                </div>
                <div style={{ width: "100%", backgroundColor: "rgba(18, 3, 127, 1)", height: "auto", color: "white", fontSize: "30px", padding: "10px", marginTop: "160px" }}>
                    You are just one step away to start new journey
                </div>
                <div className="course-main-head">
                    <div className="course-main">
                        <div className="course-flex">
                            <div className="course-main1">
                                4 Days Bootcamp on Power BI Expert & Excel with Project. [ 1 hour per day ]<br></br><br></br>
                                <img width="100%" src={powerBi}></img>

                            </div>
                            <div className="course-main2">
                                <form>
                                    <div className="details-flex" style={{  }}>
                                        <div>
                                            <h3>Your Details </h3>
                                            <h3 style={{fontSize:"15px"}}> For Access</h3>
                                       

                                        </div>
                                        <div style={{color:"#737373"}}>
                                            <h3>Payment  </h3>
                                            <h3 style={{fontSize:"15px"}}> For your program</h3>
                                      

                                        </div>
                                      



                                    </div>
                                    <div className="enroll-flex2" >
                                            <div>
                                           
                                            <label className="form-label">Name <span className="red">*</span> </label>
                                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-enroll2"></input>
                                            </div>
                                            <div>
                                           
                                            <label className="form-label">Last Name <span className="red">*</span></label>
                                            <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} className="form-enroll2"></input>

                                            </div>

                                        </div>
                                    <label className="form-label">Email <span className="red">*</span></label><br></br>
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-enroll"></input><br></br>
                                    <label className="form-label">Counry <span className="red">*</span></label><br></br>
                                    <input type="text" value={country} onChange={(e)=>setcountry(e.target.value)} className="form-enroll"></input><br></br>
                                    <label className="form-label">Phone <span className="red">*</span></label><br></br>
                                    <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} className="form-enroll"></input>
                                    <button onClick={handleSignUp} className="Proceed"> Proceed Now</button>
                                </form>

                            </div>
                            


                        </div>

                    </div>

                </div>

                <Footer />
            </div>

        </div>
    )
}
export default Enroll