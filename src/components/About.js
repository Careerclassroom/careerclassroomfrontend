import React from 'react'
import Header from './header'
const no_profile = new URL("../images/arrow.png", import.meta.url)
const about = new URL("../images/about.png", import.meta.url)
const About2 = new URL("../images/about.png", import.meta.url)
function About() {
    return (
        <>
        <Header/>
            <div className='about-main'>
                <div className='about-child'>
                    <span className='about-text'>About</span>

                </div>
             
               

            </div>
            <div>
                    <h2>About</h2>
                    <h2>What Is Power BI</h2>
                    <div className='About-bi'>
                        <div className='about-bi-flex1'>
                            <img width="100%" src={About2}></img>
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
               
          

            
        </>

    )
}
export default About