import axios from "axios";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; // Importing the ReactMarkdown library
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const baseUrl = "https://server.careerclassroom.in";
  const baseUrls = "http://localhost:8000";

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/blogs/getblogs`);
      setData(response.data.data.blog);
      console.log(response.data.data.blog);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (

    <>
    <Header/>
    <div style={{ marginTop: "80px" }} className="about-main">
      <div className="">
        <span style={{ color: "#12037F" }} className="about-text">
          BLOGS
        </span>
      </div>
      <div className="cardsContainer">
        {data.map((item) => (
          <div className="cards" key={item.id}>
            <div className="blogPhoto">
                <img src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item.photo}`} height="200px" width="100%"></img>
            </div>
            <div className="blogsTitle">
              <h2 className="title"> {item.heading}</h2>
              <h2 className="date"> {item.date}</h2>
            </div>
            <div style={{width:"90%"}} className="blogsContent">
              <ReactMarkdown>{item.description.slice(0,100)}</ReactMarkdown>
              {/* Rendering description using ReactMarkdown */}
            </div>
          <Link to={`/blogs/${item._id}`}  ><button style={{marginBottom:"20px"}} className="button-89" role="button">
              Read More
            </button></Link> 
            <br></br>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default Blogs;
