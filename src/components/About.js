import React from 'react'
import Header from './header'
import Footer from './footer'
const no_profile = new URL("../images/arrow.png", import.meta.url)
const about = new URL("../images/about.png", import.meta.url)
const About2 = new URL("../images/about.png", import.meta.url)
const About3 = new URL("../images/About-pic.png", import.meta.url)
function About() {
    return (
        <>
            <Header />
            <div style={{ marginTop: "80px" }} className='about-main'>
                <div className=''>
                    <span className='about-text'>About</span>

                </div>



            </div>
            <div>

                <div className='About-bi' style={{ marginTop: "100PX" }}>
                    <div className='about-bi-flex1'>
                        <img width="100%" src={About2}></img>
                    </div>
                    <div className='about-bi-flex2'>
                        <h1 style={{ marginTop: "100px" }} >Who We Are</h1>
                        <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                            Power BI is a powerful business analytics tool that empowers
                            you to turn raw data into actionable insights. Learn how
                            to create interactive visualizations, dashboards, and reports that showcase your data like never before!
                        </p>

                    </div>
                </div>
            </div>

            <div className='About-bi2' style={{ marginTop: "100PX" }}>
                <div className='about-bi-flex3'>
                    <img width="100%" height="200px" src={About3}></img>
                </div>
                <div className='about-bi-flex4'>

                    <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                        <h5 style={{ textAlign: "left", color: "black" }} >Expert-Led Courses</h5>
                        Our courses are curated and taught by industry experts who bring real-world insights and practical experience to the learning process. With CareerClassroom, you'll be learning directly from professionals who have successfully navigated the challenges of their respective fields.
                    </p>



                </div>
            </div>
            <div className='About-bi2' style={{ marginTop: "100PX" }}>
                <div className='about-bi-flex5'>
                    <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                        <h5 style={{ textAlign: "left", color: "black" }} >Comprehensive Curriculum</h5>
                        We offer a wide range of courses that cover various domains, from technical skills like data analytics and programming to soft skills such as communication and leadership. Our goal is to equip you with a well-rounded skill set that is highly valued in today's job market.                            </p>

                </div>
                <div className='about-bi-flex6'>
                    <img width="100%" height="200px" src={About3}></img>





                </div>
            </div>
            <div className='About-bi2' style={{ marginTop: "100PX" }}>
                <div className='about-bi-flex3'>
                    <img width="100%" height="200px" src={About3}></img>
                </div>
                <div className='about-bi-flex4'>

                    <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                        <h5 style={{ textAlign: "left", color: "black" }} >Hands-On Learning</h5>
                        We believe that learning by doing is the most effective way to master new skills. That's why our courses emphasize hands-on projects, case studies, and interactive learning experiences that allow you to apply your knowledge in real-world scenarios.</p>


                </div>

            </div>
            <div className='About-bi2' style={{ marginTop: "100PX" }}>
                <div className='about-bi-flex5'>
                    <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                        <h5 style={{ textAlign: "left", color: "black" }} >Lifelong Learning</h5>
                        At CareerClassroom, learning doesn't end with a single course. We foster a culture of continuous learning and provide access to an ever-expanding library of resources to support your professional growth throughout your career journey.</p>
                </div>
                <div className='about-bi-flex6'>
                    <img width="100%" height="200px" src={About3}></img>





                </div>
            </div>
            <div className='About-bi2' style={{ marginTop: "100PX" }}>
                <div className='about-bi-flex3'>
                    <img width="100%" height="200px" src={About3}></img>
                </div>
                <div className='about-bi-flex4'>

                    <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                        <h5 style={{ textAlign: "left", color: "black" }} >Supportive Community</h5>
                        Join a vibrant community of learners and professionals where you can network, collaborate, and seek guidance from peers and mentors. Our community-driven approach ensures that you have the support you need to succeed.</p>

                </div>

            </div>

            <div className='About-bi' style={{ marginTop: "140PX" }}>
                <div className='about-bi-flex1'>
                    <h1 style={{ marginTop: "100px" }}>Our Vision</h1>
                    <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                        We envision a world where individuals have the confidence and skills to pursue their dream careers and shape a brighter future for themselves. Through CareerClassroom, we aim to bridge the gap between education and industry needs, empowering learners to become top-notch professionals and contributing positively to their organizations and society at large.
                    </p>

                </div>
                <div className='about-bi-flex2'>
                    <img width="100%" src={About2}></img>

                </div>
            </div>
            <div className='about-enroll-sec'>
                <div style={{width:"90%",margin:"auto",position:"relative",top:"100px"}}><h3 >Join Us on Your Path to Success
                </h3>
                    <p style={{fontSize:"30px"}}>Whether you're just starting your career or seeking to take it to new heights, CareerClassroom is here to be your partner in success. Take the first step towards transforming your career and unlocking your true potential by enrolling in one of our trans formative courses.</p>
                    <button style={{marginTop:"50px"}} className='head-btn'>Click to know  more <img width="20px" style={{ position: "relative" }} src={no_profile}></img> </button>

                </div>
            </div>

            <Footer />
        </>

    )
}
export default About