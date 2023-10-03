
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'
const no_profile = new URL("../images/arrow.png", import.meta.url)
const about = new URL("../images/about.png", import.meta.url)
const About2 = new URL("../images/about.png", import.meta.url)
function Dashboards() {
    const baseUrls = "http://localhost:8000"
    const baseUrl = "https://server.careerclassNameroom.in"
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    useEffect(() => {
        handleGetOneUser()
    }, []);
    const handleGetOneUser = async () => {

        try {
            const res = await axios.get(`${baseUrl}/api/v1/admin/getAllCourses`);
            setData(res.data.data.AllCourse)


        } catch (err) {
            console.log(err);

        }
    }
    const [arrow, setArrow] = useState(true)
    useEffect(() => {
        handleAllUc()
    }, []);
    const handleAllUc = async () => {

        try {
            const res = await axios.get(`${baseUrl}/api/v1/upcoming/getAllUpcoming`);
            setData2(res.data.data.upcoming)
            console.log(res.data.data.upcoming
            )

        } catch (err) {
            console.log(err);

        }
    }

    return (
        <>
            <Header />


            <div style={{
                position: "relative",
                top: "80px"

            }} className='about-main'>
                <div className='about-child'>
                    <span style={{ color: "#12037F" }} className='about-text'>Course</span>






                </div>

                <div>


                </div>
                <div className='dashboard'>
                    <div className='dashboard-flex'>
                        <div className='dashboardText'>
                            <h3 style={{ marginTop: "30px" }}>heading</h3>
                            <p>lsjdcndkjfnewlkc.mc,e.ce,.</p>

                        </div>
                        <div className='dashboardImg'>

                        </div>
                    </div>

                </div>
                <div className='dashboardCardsmain'>
                    <div className='dashboardCards'>
                        <div className='cardVideo'></div>
                        <div style={{
                            width: "230px", margin: "20px auto 0px  auto"
                        }}>
                            <h5>heading</h5>
                        </div>
                        <p style={{
                            width: "230px", margin: " auto", fontSize: "12px"
                        }}>The module consists of the initial className which  will take you through the curriculum of a 4-day workshop and introduce you to the world of PowerBI.<br>

                            </br>
                            <button onMouseOver={() => setArrow(false)} onMouseLeave={() => setArrow(true)} style={{ marginTop: "5px" }} className='countinue'>

                                <Link style={{ textDecoration: "none", color: "white" }} to="">continue     {arrow ? <div></div> : <img width="20px" src={no_profile}></img>
                                } </Link>

                            </button>
                        </p>


                    </div>
                </div>
            </div>





        </>

    )
}
export default Dashboards