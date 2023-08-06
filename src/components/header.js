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
                        <li className="li-main"><Link to="/home">Home</Link> </li>
                        <li className="li-main"> <Link to="/about"> About</Link></li>
                        <li className="li-main"><Link to="/course">Courses</Link> </li>
                        <li className="li-main"><Link to="/contact-us">Contact Us</Link> </li>
                        <li className="li-main"> <Link to="/userProfile">My Profile</Link></li>
                    </ul>
                </div>

            </div>
            <nav style={{background:"white"}}  class="navbar  fixed-top nav-mobile">
                <div style={{background:"white"}} class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={About2}></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider"></hr>
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex mt-3" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )


}
export default Header