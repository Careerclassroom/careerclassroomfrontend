import React, { useState } from "react"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { getBlog } from "../Redux/actions/getBlogId"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
function BlogForm() {
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [photo, setPhoto] = useState()
  const [heading, setHeading] = useState()
  const [blogid, setBlogid] = useState("")
  const baseUrl = process.env.REACT_APP_BASE_URL_DEV;
  const id = useSelector((state) => state.get_blog_id.blog_id);
  const dispatch=useDispatch("")
  console.log(id)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://server.careerclassroom.in/api/v1/blogs/create`, {
        date: date,
        heading: heading,
        description: description,
      });

      console.log(response)
      

      if (response.data.statusbar === "success") {
        toast.success("Blog Content Upload Success")
        dispatch(getBlog(response.data.data.BlogsSchema._id))
      }

    } catch (error) {
      // console.log(error)

    }
  }



  const handleFileChange = (event) => {
    console.log(event.target.files[0])
    setPhoto(event.target.files[0]);
  };

  const handleSubmitphoto = async () => {
    const formData = new FormData();
    formData.append('photo', photo);
    try {
      const response = await axios.patch(`https://server.careerclassroom.in/api/v1/blogs/upload/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response); // Handle the response from the server
      if (response.data.status === "success") {
        toast.success("Blog Photo Upload Success")
      } else {
        toast.error("Something went wrong")
      }
      // setFile(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 style={{
        position: "relative",
        top: "300px"
      }}>Create Blogs </h1>
      <form style={{ marginTop: "200px" }} onSubmit={handleSubmitphoto}>
        <input type="file" onChange={handleFileChange}></input>
        <button type="submit">submit</button>
      </form>
      <form style={{ position: "relative", top: "300px" }} onSubmit={handleSubmit}>
        <h2>type date</h2>
        <input onChange={(e) => {
          setDate(e.target.value)
        }} type="text" placeholder="date" value={date}></input><br></br>
        <h2>type Heading</h2>
        <input onChange={(e) => {
          setHeading(e.target.value)
        }} value={heading} type="text" placeholder="heading"></input><br></br>
        <h1>type description</h1>
        <textarea onChange={(e) => {
          setDescription(e.target.value)
        }} value={description} cols="90" rows="20" type="text" placeholder="description"></textarea><br></br>
        <input type="submit"></input>

      </form>     
   
      <div>
        <div style={{position:"relative",top:"200px"}}>
 
      </div>
      </div>
      </>
  )
}
export default BlogForm