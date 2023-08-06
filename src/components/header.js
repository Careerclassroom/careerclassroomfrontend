import React from "react";
import { Link } from "react-router-dom";
const About2 = new URL("../images/logo.png", import.meta.url)
function Header(){
    return(
        <div>
            <div className="header-flex">
                <div className="logo">
                
                 <img src={About2}></img>
             </div>
             <div>
                <ul className="ul-head">
                    <li className="li-main"><Link to="/home">Home</Link> </li>
                    <li className="li-main"> <Link to ="/about"> About</Link></li>
                    <li className="li-main"><Link to="/course">Courses</Link> </li>
                    <li className="li-main"> <Link to="/userProfile">My Profile</Link></li>
                </ul>
             </div>

            </div>
        </div>
    )
       
    
}
export default Header