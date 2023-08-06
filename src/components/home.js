import React from 'react'
import Header from './header'
import Footer from './footer'
const no_profile = new URL("../images/arrow.png", import.meta.url)
const About = new URL("../images/about.png", import.meta.url)
const powerBi = new URL("../images/powerBi.png", import.meta.url)
function Home() {
    return (
        <>
            <Header />
            <div style={{ marginTop: "100px" }} className='home-head'>
                <div className='home-head-child'>
                    <h1 style={{
                        marginBottom: "50px"
                    }}>Exciting News !</h1>
                    <h1 style={{
                        marginBottom: "40px"
                    }}>Unleash the Power of BI with Industry Experts</h1>
                    <div className='join'>
                        <h2 className='join-content'>Join us for an exclusive LIVE workshop on Power BI, starting on 10th August!</h2>
                    </div>
                    <button style={{ marginTop: "50px" }} className='head-btn'>Click to know  more <img width="20px" style={{ position: "relative", top: "5px" }} src={no_profile}></img> </button>

                </div>
            </div>
            <div>
                <h2 style={{ color: "#12037F", marginBottom: "40px", fontSize: "50px" }}><u>About</u></h2>

                <div className='About-bi'>
                    <div className='about-bi-flex1'>
                        <img width="100%" src={About}></img>
                    </div>
                    <div className='about-bi-flex2'>
                        <h1 >Welcome to Career Classroom?</h1>
                        <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                            At CareerClassroom, we believe that everyone deserves the opportunity to thrive in their careers and achieve their professional goals. Our mission is to empower individuals with the knowledge and skills they need to excel in today's competitive job market. Whether you're a recent graduate, seeking a career change, or looking to enhance your existing skills, we are here to guide you on your journey to success.
                        </p>

                    </div>
                </div>
            </div>
            <div>
                <h2 style={{ color: "#12037F", marginBottom: "40px", marginTop: "30px", fontSize: "50px" }}><u>Course</u></h2>
                <div className='course'>
                    <div className='course1'>
                        <p className='para-font'>
                            4 Days Bootcamp on Power BI Expert &<br></br> Excel with Project. [ 1 hour per day ]
                        </p>
                        <button className='head-btn'>Enroll Now <img width="20px" style={{ position: "relative" }} src={no_profile}></img> </button>

                        <p className='para-font2'>Charges for 4 Days Boot Camp are 499 / student</p>
                    </div>
                    <div className='course2'>
                        <img width="100%" height="300px" src={powerBi}></img>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default Home