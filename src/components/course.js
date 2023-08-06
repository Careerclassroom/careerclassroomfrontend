import React from 'react'
import Header from './header'
const no_profile = new URL("../images/arrow.png", import.meta.url)
const about = new URL("../images/about.png", import.meta.url)
const About2 = new URL("../images/about.png", import.meta.url)
function Course() {
    return (
        <>
        <Header/>
            <div className='about-main'>
                <div className='about-child'>
                    <span className='about-text'>Course</span>

                </div>
                <div>
                    <h1>
                        4 Days Bootcamp on Power BI Expert & Excel with <br>
                        </br> Project. [ 1 hour per day ]
                    </h1>

                </div>
                <div className='course-main-head'>
                    <div className='course-main'>
                        <div className='course-main1'>

                        </div>
                        <div className='course-main2'>
                            <ul style={{ textAlign: "left", fontSize: "25px" }}>
                                <li>Post work timing</li>
                                <li>    What is data analytics and how to make use of it?</li>
                                <li>What is power bi and how it is useful?</li>
                                <li>Learn Power BI hands-on!!</li>
                                <li>Build a project in 4 days- Learn data cleaning, Data visualization, data modeling, dax, power Query etc</li>
                                <li>Road ahead to learn advance features and projects</li>
                                <li>Day 4 suggestions and reviews for some selected dashboards shared on linked in and Basic Business Analyst idea.</li>


                            </ul>
                            <h4 style={{
                        fontSize: "25px"
                    }}>Charges for 4 Days Boot Camp are 499 / student</h4>
                                        <button style={{float:"right"}} className='head-btn'>Enroll Now <img width="20px" style={{ position: "relative", top: "5px" }} src={no_profile}></img> </button>

                        </div>

                    </div>


                
                </div>
                <div style={{marginTop:"100px"}}>

                    <h1>What we learn</h1>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div className='card'>
                            <div className='card-tumbnil'>


                            </div>
                            <h3>Dive into Data Analysis</h3>
                            <p style={{ textAlign: "justify" }}>DAX (Data Analysis Expressions) is your key to advanced data calculations and custom formulas in Power BI. Unleash the potential of DAX to create dynamic reports and gain deeper insights from your data. </p>

                        </div>
                        <div className='card'>
                            <div className='card-tumbnil'>


                            </div>
                            <h3>Dive into Data Analysis</h3>
                            <p style={{ textAlign: "justify" }}>DAX (Data Analysis Expressions) is your key to advanced data calculations and custom formulas in Power BI. Unleash the potential of DAX to create dynamic reports and gain deeper insights from your data. </p>

                        </div>
                        <div className='card'>
                            <div className='card-tumbnil'>


                            </div>
                            <h3>Dive into Data Analysis</h3>
                            <p style={{ textAlign: "justify" }}>DAX (Data Analysis Expressions) is your key to advanced data calculations and custom formulas in Power BI. Unleash the potential of DAX to create dynamic reports and gain deeper insights from your data. </p>

                        </div>
                        <div className='card'>
                            <div className='card-tumbnil'>


                            </div>
                            <h3>Dive into Data Analysis</h3>
                            <p style={{ textAlign: "justify" }}>DAX (Data Analysis Expressions) is your key to advanced data calculations and custom formulas in Power BI. Unleash the potential of DAX to create dynamic reports and gain deeper insights from your data. </p>

                        </div>
                    </div>
                </div>
                <div className='course-details'>

                </div>
                <h2>Upcoming Courses </h2>
                <div className='upcoming-flex'>

                    <div className='upcoming'>
                        <div className='course-pic'>

                        </div>
                         <div className='course-content'>

                         </div>

                    </div>


                </div>

            </div>

        </>

    )
}
export default Course