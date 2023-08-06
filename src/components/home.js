import React from 'react'
import Header from './header'
const no_profile = new URL("../images/arrow.png", import.meta.url)
const About = new URL("../images/about.png", import.meta.url)
function Home() {
    return (
        <>
        <Header/>
            <div className='home-head'>
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
                    <button style={{marginTop:"50px"}} className='head-btn'>Click to know  more <img width="20px" style={{ position: "relative", top: "5px" }} src={no_profile}></img> </button>

                </div>
            </div>
            <div>
                <h2>About</h2>
                <h2>What Is Power BI</h2>
                <div className='About-bi'>
                    <div className='about-bi-flex1'>
                        <img width="100%" src={About}></img>
                    </div>
                    <div className='about-bi-flex2'>
                        <h1 >What Is Power BI</h1>
                        <p style={{ color: "#737373", width: "80%", fontSize: "20px", margin: "auto", textAlign: "justify" }}>
                            Power BI is a powerful business analytics tool that empowers
                            you to turn raw data into actionable insights. Learn how
                            to create interactive visualizations, dashboards, and reports that showcase your data like never before!
                        </p>

                    </div>
                </div>
            </div>
            <div>
                <h1>
                    Course
                </h1>
                <div className='course'>
                    <div className='course1'>
                        <p className='para-font'>
                        4 Days Bootcamp on Power BI Expert &<br></br> Excel with Project. [ 1 hour per day ]
                        </p>
                        <button className='head-btn'>Enroll Now <img width="20px" style={{ position: "relative", top: "5px" }} src={no_profile}></img> </button>

                     <p className='para-font2'>Charges for 4 Days Boot Camp are 499 / student</p>
                    </div>
                    <div className='course2'>
 
                    </div>
                </div>
            </div>

        </>

    )
}
export default Home