

import React, { useState } from "react"

import { Link } from 'react-router-dom';
const logo2 = new URL("../images/logo.png", import.meta.url)
const facebook = new URL("../images/fb.png", import.meta.url)
const insta = new URL("../images/insta.png", import.meta.url)
const linked = new URL("../images/linked.png", import.meta.url)
const twiter = new URL("../images/twiter.png", import.meta.url)
function Footer() {
  const[show,setShow]=useState(false)
  return (

    <div  className="container5">
   

      <div className="footer2">
        <div className="about">
         <Link to="/" className='footer-brand'> <img src={logo2} width="200px" alt = "loading..."></img></Link>
          <p className='foot-para' style={{

          }}>Learn In-Demand Skill To Start your Career Like a Boss ! Climb to the Top 1%: Learn from Industry Titans. Make each day count with upskilling through Career Classroom </p>
    

    
          <div className="footer-link-main">
          {/* <Link classname="footlink" to="https://www.facebook.com/Kounselo" target="_blank"><img src={facebook} className="social-media" alt=""></img></Link>
          <Link classname="footlink" to="https://twitter.com/kounseloindia?s=11&t=l_7ZXQszpxBTPvBPrtej9g" target="_blank"><img src={twitter} className="social-media" alt=""></img></Link>
          <Link classname="footlink" to="https://www.instagram.com/kounselo/" target="_blank"><img src={insta} className="social-media" alt=""></img></Link>
          <Link classname="footlink" to="https://www.linkedin.com/company/kounselo/people/?viewAsMember=true" target="_blank"><img src={linkedIN} className="social-media" alt=""></img></Link>
          <Link classname="footlink" to="https://in.pinterest.com/Kounselo/" target="_blank"><img src={Printerest} className="social-media" alt=""></img></Link> */}
          </div>
        </div>
        <div className="service">
          <h4 className="foot-head">SERVICES</h4>
          <Link className='foot-link' to="/statement-of-purpose" > <h5 className="foot-content">Home</h5></Link>
          <Link className='foot-link' to="/university-shortlisting">  <h5 className="foot-content">About</h5></Link>
          <Link className='foot-link' to="/profile-evaluation"> <h5 className="foot-content">Courses</h5></Link>
          <Link className='foot-link' to="/resume">  <h5 className="foot-content">Dashboard</h5></Link>
          <Link className='foot-link' to="/visa-services"> <h5 className="foot-content">Contact Us </h5></Link>
          <Link className='foot-link' to="/scholarship-application">  <h5 className="foot-content">My Profile</h5></Link>
       
        </div>
     
  
        <div className="social">
          <h4 className="foot-head">RESOURCES</h4>
          <Link className='foot-link' to="">  <h5 className="foot-content">Terms & Condition</h5></Link>
          <Link className='foot-link' to="/all-blogs"> <h5 className="foot-content">BLOG</h5></Link>


        </div>
        <div className="crypto">
          <h4 className="foot-head"> Contact Us</h4>
                   <Link  to="https://www.facebook.com/Kounselo" target="_blank"><img src={facebook}  style={{position:"relative",left:"2px"}}  alt=""></img></Link>
          <Link to="https://twitter.com/kounseloindia?s=11&t=l_7ZXQszpxBTPvBPrtej9g" style={{position:"relative",left:"15px"}}  target="_blank"><img src={twiter}  alt=""></img></Link>
          <Link  to="https://www.instagram.com/kounselo/" target="_blank"><img style={{position:"relative",left:"25px"}} src={insta} alt=""></img></Link>
          <Link  to="https://www.linkedin.com/company/kounselo/people/?viewAsMember=true" target="_blank"><img style={{position:"relative",left:"35px"}} src={linked}  alt=""></img></Link>
         

        </div>

      </div>
   
    </div>
  )
}
export default Footer;