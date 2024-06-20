import React from "react";
import Talk from "talkjs";
import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getPay } from "../Redux/actions/getPayid";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [arrow, setArrow] = useState(true);
  const baseUrl = "https://server.careerclassroom.in";
  const baseUrls = "http://localhost:8000";
  const dispatch = useDispatch("");
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const id2 = useSelector((state) => state.get_pay_id.trans_id);
  const cname = useSelector((state) => state.get_pay_id.course_name);
  const cid = useSelector((state) => state.get_pay_id.course_id);
  const cdes = useSelector((state) => state.get_pay_id.course_description);
  const cpic = useSelector((state) => state.get_pay_id.course_photo);
  const [data, setData] = useState([]);
  const userEmail = useSelector((state) => state.get_seller_profile_id.email);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSendMail = async (e) => {
    if (id2) {
      try {
        const response = await axios.post(
          `${baseUrl}/api/v1/order/sendPaymentSucces`,
          {
            email: userEmail,
            order: id2,
          }
        );
        console.log(response);

        if (response.data.status === "success") {
          dispatch(getPay(""));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleUpdate = async (e) => {
    if (id2) {
      try {
        const response = await axios.patch(
          `${baseUrl}/api/v1/order/updateData/${id}`,
          {
            courseId: cid,
            courseDescription: cdes,

            courseName: cname,
            coursePhoto: cpic,
          }
        );
        console.log(response);

        if (response.data.statusbar === "success") {
          handleSendMail();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    handleGetOneUser();
  }, []);
  const handleGetOneUser = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/admin/getAllCourses`);
      setData(res.data.data.AllCourse);
      console.log(res)
    } catch (err) {
      console.log(err);
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
          console.log("anbcvjvsjklccsknd", response.data);

          if (response.data.success === true) {
            console.log("hi");
            toast.success("payment success");
            handleUpdate();
          }
        } else {
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
        <Carousel
          minimumTouchDrag={80}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          arrows={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={4000}
          autoPlay={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile","computer"]}
          transitionDuration={500}
          containerClass="rideSlide"
        >
          {data.map((item) => {
            return (
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
                  {item.CourseName}
                </h1>
                <div className="join">
                  <h2 className="join-content">{item.Description.slice(0,200)}...</h2>
                </div>
                <button
                  onMouseOver={() => setArrow(false)}
                  onMouseLeave={() => setArrow(true)}
                  style={{ marginTop: "50px" }}
                  className="head-btn"
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/explore-course/${item._id}`}
                  >
                    Enroll Now{" "}
                  </Link>
                </button>
              </div>
            );
          })}
          {/* <div className="home-head-child">
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
                Enroll Noxw{" "}
              </Link>
            </button>
          </div> */}
        </Carousel>
      
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
            <p className="home-description">
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
        <Carousel
          minimumTouchDrag={80}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          arrows={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={4000}
          autoPlay={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile","computer"]}
          transitionDuration={500}
          containerClass="rideSlide"
        >
          {data.map((item) => {
            return (
        
              <div className="course">
              <div className="course1">
                <p style={{}} className="para-font">
                  {item.CourseName}
                </p>
                <button className="head-btn">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/explore-course/${item._id}`}
                  >
                    Enroll Now{" "}
                  </Link>{" "}
                </button>
    
                <p style={{ marginTop: "20px" }} className="para-font2">
                  Charges for 4 Days Boot Camp are 499 / student
                </p>
              </div>
              <div className="course2">
                <img width="100%" height="330px" src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item.CoursePhoto}`}></img>
              </div>
            </div>
            );
          })}
          {/* <div className="home-head-child">
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
                Enroll Noxw{" "}
              </Link>
            </button>
          </div> */}
        </Carousel>
      
      </div>
      <Footer />
    </>
  );
}
export default Home;
