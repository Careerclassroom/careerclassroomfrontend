import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const no_profile = new URL("../images/arrow.png", import.meta.url);
const about = new URL("../images/about.png", import.meta.url);
const About2 = new URL("../images/about.png", import.meta.url);

function Course() {
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const navigate = useNavigate("");
  useEffect(() => {
    window.scrollTo(0, 0);
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
      navigate("/course");
      // Assuming fetchData is a function you want to call when 'id' is truthy
    }
  }, [navigate, id]);
  const baseUrls = "http://localhost:8000";
  const baseUrl = "https://server.careerclassroom.in";
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    handleGetOneUser();
  }, []);
  const handleGetOneUser = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/admin/getAllCourses`);
      setData(res.data.data.AllCourse);
    } catch (err) {
      console.log(err);
    }
  };
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
      <div   className="about-main" style={{position:"relative",top:"80px"}}>
    <div className="about-child">
                  <span style={{ color: "#12037F" }} className="about-text">
                    Course
                  </span>
                </div>
    </div>
      {data.length != 0
        ? data.map((item) => {
            return (
              <div
                style={{
                  position: "relative",
                  top:"80px",
                  height:"auto"
                
                }}
              
              >
              

                <div></div>
                <div className="course-main-head2">
                  <div className="course-main3">
                    <div className="course-main1">
                      <img
                        height="250px"
                        className="course-pic2"
                        src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item.CoursePhoto}`}
                      ></img>
                    </div>
                    <div className="course-main2">
                      <h4 style={{ marginTop: "10px" }}>{item.CourseName}</h4>
                      {item.Description}
                      {/* <ul style={{ textAlign: "left", fontSize: "25px" }}>
                                <li>Post work timing</li>
                                <li>    What is data analytics and how to make use of it?</li>
                                <li>What is power bi and how it is useful?</li>
                                <li>Learn Power BI hands-on!!</li>
                                <li>Build a project in 4 days- Learn data cleaning, Data visualization, data modeling, dax, power Query etc</li>
                                <li>Road ahead to learn advance features and projects</li>
                                <li>Day 4 suggestions and reviews for some selected dashboards shared on linked in and Basic Business Analyst idea.</li>


                            </ul> */}
                      <h4
                        style={{
                          fontSize: "15px",
                          marginTop: "10px",
                        }}
                      >
                        Charges for 4 Days Boot Camp are 499 / student
                      </h4>
                      <Link to={`/explore-course/${item._id}`}>
                        <button className="head-btn">Explore Course  </button>
                      </Link>
                    </div>
                  </div>
                  
                </div>
    
          
              </div>
            );
          })
        : null}
        <Footer/>
             
    </>
  );
}
export default Course;
