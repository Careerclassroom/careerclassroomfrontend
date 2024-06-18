import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import React from "react";
import { useParams } from "react-router-dom";
import ReactGA from "react-ga4"

import { Link, useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from "axios"


import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import Footer from "./footer";




const baseUrl = "http://localhost:8000";


function BlogInsideView(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  


  const {id}=useParams()
  console.log(id)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const baseUrl = process.env.REACT_APP_BASE_URL_DEV;
  // const [data, setData] = useState([])

  const data2 = useSelector(state => state.get_blog_id)
  console.log(data2)
 




  const [data, setData] = useState([])


  const fetchData = async () => {

    try {

      const response = await axios.get(`https://server.careerclassroom.in/api/v1/blogs/getOneBlog/${id}`);

      setData([response.data.data.blog]);

      console.log(response,"njkm")
    } catch (error) {
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
    <Header/>
      {data.length !== 0 ?

        data.map((item) => {
          console.log(item, "item")
          return (
            <div>
                <div style={{marginTop:"50px"}} key={item._id} className="blog-banner">
                <img height="200px" alt="loading..." src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item.photo}`} height="200px" width="100%"></img>

                </div>
            <div  className="blog-flex">
                 
              <div style={{width:"90%",margin:"auto"}} className="blog-inside-view">
              <h5 className="title">{item.heading}</h5>
              <h5 className="date">{item.date}</h5>
                
          
                <p className="blogsContent"  style={{
                  

                }}>
                <ReactMarkdown>{item.description}</ReactMarkdown>
                </p>
              </div>



            </div>
            </div>
          )
        }) : <div></div>


      }


      <div>
        {/* <div className="blog-content">
          {
            data2.map((item) => {
              return (

                <div class="card col-3">
                  <img src={item.photo !== undefined ? `https://kounselodata.s3.ap-south-1.amazonaws.com/${item.photo}` : no_profile} width="90%" alt="loading..."></img>
                  <div class="card-body" style={{
                    textAlign: "left"
                  }}>
                    <h5 style={{
                      color: "#9C74F1"
                    }}>{item.date}</h5>
                    <h5 onClick={handleChange}>{item.heading}</h5>
                    <p>Related:</p>
                    <p style={{ color: "#727272" }}>  {(item.description.length > 125) ? item.description.slice(0, 125) + '...' : item.description}</p>
                  </div>

                </div>


              )
            })
          }
        </div> */}
        <div ><Link style={{
          textDecoration: "none"
    
       
        }}      className="button-89" to="/blogs"> View All Blogs</Link></div>



      </div>
      <Footer/>
     
    </div>
  )
}
export default BlogInsideView