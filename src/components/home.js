import React from 'react'
import Talk from 'talkjs';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'
const no_profile = new URL("../images/arrow.png", import.meta.url)
const About = new URL("../images/about.png", import.meta.url)
const powerBi = new URL("../images/powerBi.png", import.meta.url)

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64df2a17cc26a871b02ff850/1h83ros18';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

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
                    <button style={{ marginTop: "50px" }} className='head-btn'><Link style={{textDecoration:"none",color:"white"}} to="/enroll">Enroll Now </Link><img width="20px"  src={no_profile}></img> </button>

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
                        <button className='head-btn'><Link style={{textDecoration:"none",color:"white"}} to="/enroll">Enroll Now </Link> <img width="20px" style={{ position: "relative" }} src={no_profile}></img> </button>

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