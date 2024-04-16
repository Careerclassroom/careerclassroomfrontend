import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const no_profile = new URL("../images/arrow.png", import.meta.url);
const about = new URL("../images/about.png", import.meta.url);
const About2 = new URL("../images/about.png", import.meta.url);
const powerBi = new URL("../images/powerBi.png", import.meta.url);
function Dashboards() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate("");
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const baseUrls = "http://localhost:8000";
  const baseUrl = "https://server.careerclassroom.in";
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    handleGetOneUser();
    handleGetUser();
  }, []);
  useEffect(() => {
    if (!id) {
      navigate("/login-signup", {
        replace: true,
        state: {
          signIn: true,
        },
      });
    } else {
      navigate("/dashboard");
      // Assuming fetchData is a function you want to call when 'id' is truthy
    }
  }, [navigate, id]);
  const handleGetUser = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/getOneuser/${id}`);
      console.log([res], "hhoi");
      console.log(res)
      setUserData([res.data.data.user]);
    } catch (error) {
      console.log(error, "fjdksfndsklfmdsklfkmdsklfdsl");
    }
  };
  const handleGetOneUser = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/admin/getAllCourses`);
      setData(res.data.data.AllCourse);
    } catch (err) {
      console.log(err);
    }
  };
  const [arrow, setArrow] = useState(true);
  useEffect(() => {
    handleAllUc();
  }, []);
  const handleAllUc = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/upcoming/getAllUpcoming`);
      setData2(res.data.data.upcoming);
      console.log(res.data.data.upcoming);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          position: "relative",
          top: "80px",
        }}
        className="about-main"
      >
        <div className="about-child">
          <span style={{ color: "#12037F" }} className="about-text">
         My Learning
          </span>
        </div>

        <div></div>

        {userData.map((item) => {
          return(
            <div>
          { item.userData.length!=0?
            item.userData.map((item2) => {
              return (
                <div className="dashboard">
                  <div className="dashboard-flex">
                    <div className="dashboardText">
                      <h3 style={{ marginTop: "30px" }}>{item2.courseName}</h3>
                      <p className="p">{item2.courseDescription}</p>
                    </div>
                    <div className="dashboardImg">
                      <img src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item2.coursePhoto}`} width="100%" height="230px" alt="loading.."></img>
                    </div>
                  </div>
                </div>
              );
            }): <div><div style={{marginTop:"20px",color:"#11017e",fontSize:"30px"}}>No course found :(</div>
            
         <div>  <button
            onMouseOver={() => setArrow(false)}
            onMouseLeave={() => setArrow(true)}
            style={{ marginTop: "50px" }}
            className="head-btn"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/enroll"
            >
              Enroll Now{" "}
              
            </Link>
          </button>
          </div> 
            </div> 

          }
          </div>)
        }
        )}
        <Footer />

        {/*                 
                <div className='dashboardCardsmain'>
                    <div className='dashboardCards'>
                        <div className='cardVideo'></div>
                        <div style={{
                            width: "230px", margin: "20px auto 0px  auto"
                        }}>
                            <h5>heading</h5>
                        </div>
                        <p style={{
                            width: "230px", margin: " auto", fontSize: "12px"
                        }}>The module consists of the initial className which  will take you through the curriculum of a 4-day workshop and introduce you to the world of PowerBI.<br>

                            </br>
                            <button onMouseOver={() => setArrow(false)} onMouseLeave={() => setArrow(true)} style={{ marginTop: "5px" }} className='countinue'>

                                <Link style={{ textDecoration: "none", color: "white" }} to="">continue     {arrow ? <div></div> : <img width="20px" src={no_profile}></img>
                                } </Link>

                            </button>
                        </p>


                    </div>
                </div> */}
      </div>
    </>
  );
}
export default Dashboards;
