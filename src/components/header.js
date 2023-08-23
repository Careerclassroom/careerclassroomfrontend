import React from "react";
import { Link } from "react-router-dom";
const About2 = new URL("../images/logo.png", import.meta.url)
function Header() {
    return (
        <div>
            <div className="header-flex nav-pc">
                <div className="logo">

                    <img src={About2}></img>
                </div>
                <div>
                    <ul className="ul-head">
                        <li className="li-main"><Link style={{textDecoration:"none",color:"#12037F"}} to="/home">Home</Link> </li>
                        <li className="li-main"> <Link style={{textDecoration:"none",color:"#12037F"}} to="/about"> About</Link></li>
                        <li className="li-main"><Link style={{textDecoration:"none",color:"#12037F"}} to="/course">Courses</Link> </li>
                        <li className="li-main"><Link style={{textDecoration:"none",color:"#12037F"}} to="/contact-us">Contact Us</Link> </li>
                        <li className="li-main"> <Link style={{textDecoration:"none",color:"#12037F"}} to="/userProfile">My Profile</Link></li>
                    </ul>
                </div>

            </div>
    <nav style={{position:"fixed",top:"0px",width:"100%",color:"black",backgroundColor:"white",zIndex:"9999"}} class="navbar nav-mobile" aria-label="First navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src={About2}></img></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample01">
        <ul class="navbar-nav me-auto mb-2">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><Link style={{textDecoration:"none",color:"black"}} to="/home">Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link style={{textDecoration:"none",color:"black"}} to="/about">About</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link style={{textDecoration:"none",color:"black"}} to="/contact-us">Contact Us</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link style={{textDecoration:"none",color:"black"}} to="/course">Courses</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link style={{textDecoration:"none",color:"black"}} to="/userProfile">My Profile</Link></a>
          </li>
          
          
       
        </ul>
      
      </div>
    </div>
  </nav>

        </div>
    )


}
export default Header