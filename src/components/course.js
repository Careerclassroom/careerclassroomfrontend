
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './header'
import Footer from './footer'
const no_profile = new URL("../images/arrow.png", import.meta.url)
const about = new URL("../images/about.png", import.meta.url)
const About2 = new URL("../images/about.png", import.meta.url)
function Course() {
    const baseUrls = "http://localhost:8000"
    const baseUrl = "https://server.careerclassroom.in"
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
            {data.length != 0 ?
                data.map((item) => {
                    return (
                        <div style={{
                            position: "relative",
                            top: "80px"

                        }} className='about-main'>
                            <div className='about-child'>
                                <span className='about-text'>Course</span>






                            </div>

                            <div>


                            </div>
                            <div className='course-main-head'>
                                <div className='course-main'>
                                    <div className='course-main1'>
                                        <img height="250px" className='course-pic2' src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item.CoursePhoto}`}></img>
                                    </div>
                                    <div className='course-main2'>
                                        <h4 style={{ marginTop: "10px" }}>
                                            {item.CourseName}
                                        </h4>
                                        {item.Description}
                                        {/* <ul style={{ textAlign: "left", fontSize: "25px" }}>
                                <li>Post work timing</li>
                                <li>    What is data analytics and how to make use of it?</li>
                                <li>What is power bi and how it is useful?</li>
                                <li>Learn Power BI hands-on!!</li>
                                <li>Build a project in 4 days- Learn data cleaning, Data visualization, data modeling, dax, power Query etc</li>
                                <li>Road ahead to learn advance features and projects</li>
                                <li>Day 4 suggestions and reviews for some selected dashboards shared on linked in and Basic Business Analyst idea.</li>


                            </ul> */}
                                        <h4 style={{
                                            fontSize: "15px",
                                            marginTop: "10px"
                                        }}>Charges for 4 Days Boot Camp are 499 / student</h4>
                                        <button  className='head-btn'>Enroll Now <img width="20px" src={no_profile}></img> </button>

                                    </div>

                                </div>



                            </div>
                            <div style={{ marginTop: "20px" }}>

                                <h1 className='font-learn'>What we learn</h1>
                                <div style={{ display: "flex", flexWrap: "wrap" }}>
                                    <div className='card'>
                                        <div className='card-tumbnil'>

                                            <img src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item.learn[0].photo2}`}></img>
                                        </div>
                                        <h3>{item.learn[0].WhatLearnHead}</h3>
                                        <p style={{ textAlign: "justify" }}>{item.learn[0].WhatLearnDes} </p>

                                    </div>

                                </div>
                            </div>
                            <div className='course-details'>
                                <h3>Course Content</h3>
                                <br></br>

                                {item.modules.map((item2) => {
                                    return (
                                        <div>
                                            <h5>{item2.modulesNames}</h5>

                                            <h5>{item2.moduleDes}</h5>
                                        </div>



                                    )
                                })

                                }
                            </div>
                            <h2 style={{ color: "#12037F", marginTop: "20px" }}>Upcoming Courses </h2>
                            {
                                data2.length != 0 ?
                                    data2.map((item3) => {
                                        return (
                                            <div>
                                                <div className='upcoming-flex'>

                                                    <div className='upcoming'>
                                                        <div className='course-pic'>
                                                            <img width="100%" src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item3.photo}`}></img>

                                                        </div>
                                                        <div style={{ marginTop: "30px" }} className='course-content'>
                                                            {item3.description}

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        )
                                    }) : null

                            }

                            <Footer />
                        </div>

                    )
                }) : null

            }

        </>

    )
}
export default Course