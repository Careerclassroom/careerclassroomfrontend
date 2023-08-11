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
                        <li className="li-main"><Link style={{textDecoration:"none",color:"#12037F"}} to="/home">Courses</Link> </li>
                        <li className="li-main"><Link style={{textDecoration:"none",color:"#12037F"}} to="/contact-us">Contact Us</Link> </li>
                        <li className="li-main"> <Link style={{textDecoration:"none",color:"#12037F"}} to="/Home">My Profile</Link></li>
                    </ul>
                </div>

            </div>
            <nav style={{background:"white"}}  class="navbar  fixed-top nav-mobile">
                <div style={{background:"white"}} class="container-fluid">
                    <Link class="navbar-brand" to="/home"><img src={About2}></img></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src={About2}></img></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <Link class="nav-link active"  to="/home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about" class="nav-link" >About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contact-us" class="nav-link">Contact</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/home" class="nav-link" href="#">Course</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/home" class="nav-link" href="#">My Profile</Link>
                                </li>
                                
                                
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )


}
export default Header