import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const About2 = new URL("../images/logo.png", import.meta.url)




// Control Navigation Animation


function Header() {
  const [menuBarsActive, setMenuBarsActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const toggleNav = () => {
    setMenuBarsActive(!menuBarsActive);
    setOverlayActive(!overlayActive);
  };

  const closeNav = () => {
    setMenuBarsActive(false);
    setOverlayActive(false);
  };
  const navItems = [
    { title: 'Home', link: '#' },
    { title: 'About', link: '#about' },
    { title: 'Skills', link: '#skills' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact' },
  ];
  return (
    <div>
      <div className="header-flex nav-pc">
        <div className="logo">

         <Link to="/home"><img src={About2}></img></Link> 
        </div>
        <div>
          <ul className="ul-head">
            <li className="li-main"><Link style={{ textDecoration: "none", color: "#12037F" }} to="/home">Home</Link> </li>
            <li className="li-main"> <Link style={{ textDecoration: "none", color: "#12037F" }} to="/about"> About</Link></li>
            <li className="li-main"><Link style={{ textDecoration: "none", color: "#12037F" }} to="/course">Courses</Link> </li>
            <li className="li-main"><Link style={{ textDecoration: "none", color: "#12037F" }} to="/contact-us">Contact Us</Link> </li>
            <li className="li-main"> <Link style={{ textDecoration: "none", color: "#12037F" }} to="/userProfile">My Profile</Link></li>
          </ul>
        </div>

      </div>

      <div className="nav-mobile" style={{ background: "white", width: "100%", height: "70px", position: "fixed", top: "0px", zIndex: "99" }}>


      
        <Link to="/home">  <img style={{ position: "fixed", left: "0", top: "5px", zIndex: "99" }} src={About2}></img></Link> 

        <div className={`menu-bars ${menuBarsActive ? 'change' : ''}`} onClick={toggleNav}>
          {/* Your menu bars content */}
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={`overlay ${overlayActive ? 'overlay-active' : ''}`} onClick={closeNav}>



          <nav>
            <ul>
              <li className="slide-in-1" onClick={closeNav}><Link to="/home">Home</Link></li>
              <li className="slide-in-2" onClick={closeNav}><Link to="/about">About</Link></li>
              <li className="slide-in-3" onClick={closeNav}><Link to="/contact-us">Contact us</Link></li>
              <li className="slide-in-4" onClick={closeNav}><Link to="/course">Course</Link></li>
              <li className="slide-in-5" onClick={closeNav}><Link to="/home">Dashboard</Link></li>
              <li className="slide-in-6" onClick={closeNav}><Link to="/userProfile">My profile</Link></li>

            </ul>
            <ul>
          
            </ul>
          </nav>
        </div>
      </div>


    </div>
  )


}
export default Header