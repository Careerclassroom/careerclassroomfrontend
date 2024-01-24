import React from "react";
import Talk from "talkjs";
import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const no_profile = new URL("../images/arrow.png", import.meta.url);
const About = new URL("../images/about.png", import.meta.url);
const powerBi = new URL("../images/powerBi.png", import.meta.url);

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/64df2a17cc26a871b02ff850/1h83ros18";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
const id2 = document.cookie;
console.log("id", decodeURIComponent(id2));

function Home() {
  const [arrow, setArrow] = useState(true);
  const baseUrl = "https://server.careerclassroom.in";
  const baseUrls = "http://localhost:8000";
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const id2 = useSelector((state) => state.get_pay_id.trans_id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (id2) {
      try {
        const response = await axios.patch(`${baseUrl}/api/v1/order/updateData/${id}`, {
          courseId: "64ce0e120dbd2932947c4778",
          courseDescription:
            "Post work timing What is data analytics and how to make use of it? What is power bi and how it is useful? Learn Power BI hands-on!! Build a project in 4 days- Learn data cleaning, Data visualization, data modeling, dax, power Query etc Road ahead to learn advance features and projects Day 4",
          courseName:
            "4 Days Bootcamp on Power BI Expert & Excel with Project. [ 1 hour per day ]",
        });


        if (response.data.statusbar === "success") {
          alert("goood");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id2) {
          const response = await axios.post(
            `${baseUrl}/api/v1/order/payment/check-status`,
            {
              merchantTransactionId: id2,

            }
          );
          console.log("anbcvjvsjklccsknd",response.data);

          if (response.data.success === true) {
            console.log("hi");
            alert("payment success");
            handleUpdate()
          }
        } else {
          alert("nonnoijoji");
          console.log("djnsbjkmvs");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the function immediately when the component mounts
  }, []);


  return (
    <>
      <Header />
      <div style={{ marginTop: "100px" }} className="home-head">
        <div className="home-head-child">
          <h1
            style={{
              marginBottom: "50px",

              color: "#12037F",
              fontWeight: "bolder",
            }}
          >
            Exciting News !
          </h1>
          <h1
            style={{
              marginBottom: "40px",
              color: "#12037F",
              fontWeight: "bold",
            }}
          >
            Unleash the Power of BI with Industry Experts
          </h1>
          <div className="join">
            <h2 className="join-content">
              Join us for an exclusive LIVE workshop on Power BI, starting on
              10th August!
            </h2>
          </div>
          <button
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
              {arrow ? <div></div> : <img width="20px" src={no_profile}></img>}{" "}
            </Link>
          </button>
        </div>
      </div>
      <div>
        <h2
          style={{ color: "#12037F", marginBottom: "40px", fontSize: "50px" }}
        >
          <u>About</u>
        </h2>

        <div className="About-bi">
          <div className="about-bi-flex1">
            <img width="100%" src={About}></img>
          </div>
          <div className="about-bi-flex2">
            <h3 style={{ marginTop: "50px" }}>Welcome to Career classroom?</h3>
            <p
              style={{
                color: "#737373",
                width: "80%",
                fontSize: "20px",
                margin: "auto",
                textAlign: "justify",
              }}
            >
              At Careerclassroom, we believe that everyone deserves the
              opportunity to thrive in their careers and achieve their
              professional goals. Our mission is to empower individuals with the
              knowledge and skills they need to excel in today's competitive job
              market. Whether you're a recent graduate, seeking a career change,
              or looking to enhance your existing skills, we are here to guide
              you on your journey to success.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2
          style={{
            color: "#12037F",
            marginBottom: "40px",
            marginTop: "30px",
            fontSize: "50px",
          }}
        >
          <u>Course</u>
        </h2>
        <div className="course">
          <div className="course1">
            <p style={{}} className="para-font">
              4 Days Bootcamp on Power BI Expert &<br></br> Excel with Project.
              [ 1 hour per day ]
            </p>
            <button className="head-btn">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/enroll"
              >
                Enroll Now{" "}
              </Link>{" "}
              <img
                width="20px"
                style={{ position: "relative" }}
                src={no_profile}
              ></img>{" "}
            </button>

            <p style={{ marginTop: "20px" }} className="para-font2">
              Charges for 4 Days Boot Camp are 499 / student
            </p>
          </div>
          <div className="course2">
            <img width="100%" height="330px" src={powerBi}></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
