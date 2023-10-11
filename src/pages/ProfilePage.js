import React, { useEffect } from 'react'
import { MultiSelect } from "react-multi-select-component";
import Header from '../components/header'
import Footer from '../components/footer'
import PageHeaer from '../components/PageHeaer'
import Avatar from "../images/enroll-now.png"
import Avatar2 from "../images/defaultprofile.svg"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import { getUserIdFromAuth } from '../Redux/actions/GetSellerIdFromAuthActionCreators';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

// console.log(id2)
function ProfilePage() {

  const [token,setToken]=useState(Cookies.get('user'))

  console.log("token",token)
  // function getCookie(name) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(';').shift();
  // }
  
  // const userCookie = getCookie('user') || "id not found";
  // console.log(userCookie, "<---------userCookie")
  // const decodedUserId = decodeURIComponent(userCookie);
  // console.log(decodedUserId ,"<---------decodedUserId")

  // const idString = decodedUserId
  
  // const regex = /"([^"]+)"/; // Regular expression to extract text within double quotes

  // const match = idString.match(regex);
  let extractedObjectId, idString;

  function getCookie(name) {
    var pattern = RegExp(name + "=.[^;]*")
    var matched = document.cookie.match(pattern)
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
  }

  useEffect(()=>{
  console.log(getCookie("user"))
  },[])
  useEffect(()=>{
    setTimeout(async()=>{
      console.log("document check",document.cookie)
    console.log(Cookies.get('user'), "<--------- Cookie")
    idString =Cookies.get('user');
    try {
      // if (match && match[1]) {
      //   extractedObjectId = match[1];
      //   console.log(extractedObjectId,"hello");
        extractedObjectId = idString.split(`"`)[1];
        console.log(extractedObjectId)
        // console.log("gdaskjgds")
      // } else {
      //   console.log('Object ID not found or in an unexpected format.');
        // Handle the error gracefully, e.g., by providing a default value or showing an error message.
      // }
    } catch (error) {
      console.log(error);
    }
  },4000)
  },[])
  console.log(extractedObjectId)
 

 
    
    


  // console.log(extractedObjectId, "hi")



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const baseUrl= "https://server.careerclassroom.in"
  const baseUrls = "http://localhost:8000"
  const dispatch = useDispatch("")
  const navigation = useNavigate("")
  const [name, setName] = useState("")
  const [showUpload, setUpload] = useState(false)
  const [bio, setBio] = useState("")
  const [show, setShow] = useState("name")
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([])
  const [profile, setProfile] = useState("profile")
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  const username = useSelector((state) => state.get_seller_profile_id.name);



  const navigate = useNavigate("")
  const handleLogout = async (e) => {
    e.preventDefault();



    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/logout`, {
        withCredentials: true
      });
      if (res.data.status === "success") {
        dispatch(getUserIdFromAuth({}));

        toast("Logout successfull")

        navigate("/")


      }
    } catch (err) {
      // console.log(err);
      window.alert('There may be some internal server error');
    }
  }

  

 
  useEffect(() => {
    
    handleGetOneUser()

  }, []);

  const handleGetOneUser = async () => {
    setTimeout(async()=>{
    try {
      const res = await axios.get(`${baseUrl}/api/v1/user/getOneuser/${extractedObjectId}`);
      setData([res.data.data.user])
      console.log(data, "<----api data");

    } catch (err) {
      console.log(err, "<--- err in api fetching");

    }
  },4000)
  
  }



  const intrest = [
    { label: "JAVA " },
    { label: "Python" },
    { label: "DSA" },
    { label: "Data Science" },

  ];


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${baseUrl}/api/v1/user/update/${id}`, {


        intrest: selected,
        bio: bio,
        name: name



        // isEmailVerified: isEmailVerified
      });
      // dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.name, response.data.data.user.email));
      if (response.data.status === "success") {
        toast("Profile updated success")

        // dispatch(getUserIdFromAuth(response.data.data.user._id,  response.data.data.user.name, response.data.data.user.email));
        console.log(response.data.data.user._id)

        // settoken(response.data.token);
        // navigate("/home")
        // console.log(response.data.data.user.name)
        // settoken(response.data.token);
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    if (data === undefined || data.length === 0) return
    setBio(data[0].bio !== null ? data[0].bio : '');
    setName(data[0].name !== null ? data[0].name : '');
    setSelected(data[0].intrest !== null ? data[0].intrest : '');



  }, [data])
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    console.log(event.target.value)
    setFile(event.target.files[0]);
    setUpload("show")
  };

  const handleSubmitphoto = async () => {
    const formData = new FormData();
    formData.append('photo', file);
    try {
      const response = await axios.patch(`${baseUrl}/api/v1/user/updatePhoto/${extractedObjectId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data); // Handle the response from the server
      if (response.data.status === "success") {
        setUpload(false)
        toast("Profile Updated")
      }
      // setFile(response.data);
    } catch (error) {
      setUpload(false)
      console.error(error);
    }
  };
  return (
    <div>
      <Header />
      <PageHeaer heading={"My Profile"} backgroundimage={Avatar} />
      {data.length != 0 ?
        data.map((item) => {
          return (

            <section key={item._id} className='profile_container' >
              {profile === "profile" &&
                <div className='profile_card_area' >
                  <svg style={{ float: "right" }} onClick={() => setProfile("editprofile")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#12037F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#12037F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className='profile_box_1' >
                    <div className='profile_avatar'>

                      <img src={item.photo !== undefined ? `https://classroomdata.s3.ap-south-1.amazonaws.com/${item.photo}` : item.googlePhoto} width="100" height="100" alt="" />
                      <div className="round">

                        <div>


                        </div>


                      </div>
                      {showUpload == "show" &&
                        <button className='upload-photo-button' onClick={handleSubmitphoto} >upload</button>
                      }
                    </div>
                    <h2 style={{ marginTop: "30px", color: "rgba(18, 3, 127, 1)" }}>{item.name}</h2>


                  </div>
                  <div style={{ textAlign: "left", marginTop: "30px", marginLeft: "20px", width: "250px", height: "auto" }}>
                    <h5 >Bio</h5>
                    <p>{item.bio}</p>

                  </div>
                  <h5 style={{}}>MY Intrest</h5>
                  <div style={{ textAlign: "center", marginTop: "30px", margin: "auto", width: "90%", height: "auto", display: "flex", flexWrap: "wrap" }}>

                    {
                      item.intrest.map((items) => {
                        return (
                          <p style={{ background: "rgba(18, 3, 127, 1)", textAlign: "center", color: "white", borderRadius: "20px", padding: "10px 30px 10px 30px", margin: "30px auto" }}>{items.label}</p>

                        )


                      })
                    }

                  </div>
                  <div className='profile_box_4' >
                    <button onClick={handleLogout} className='pb4_button' >LOGOUT</button>
                  </div>
                </div>
              }
              {profile === "editprofile" &&
                <div className='profile_card_area' >
                  <div className='profile_box_1' >
                    <div className='profile_avatar'>
                      <div className="upload">
                        <img src={`https://classroomdata.s3.ap-south-1.amazonaws.com/${item.photo}`} width="100" height="100" alt="" />
                        <div className="round">

                          <div>
                            <input onChange={handleFileChange} type="file" />




                            <i className="fa fa-camera" ></i>
                          </div>


                        </div>


                      </div>
                      {showUpload == "show" &&
                        <button className='upload-photo-button' onClick={handleSubmitphoto} >upload</button>
                      }
                    </div>


                  </div>
                  <form onSubmit={handleSignUp}>
                    <div>
                      <div>

                        <div className='profile_avatar_content'>
                          <div className='pac_name'>
                            <div>





                              {show == "edit" &&
                                <div style={{ display: "flex" }}>
                                  <input type='text' className='name-input' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} ></input>
                                  <div onClick={(e) => !setShow("name")} style={{ cursor: "pointer", marginLeft: "20px" }}>X</div>
                                </div>
                              }

                            </div>
                            <div>


                            </div>
                          </div>

                        </div>
                      </div>
                      <div className='profile_box_2'  >
                        <div className='pb2c1'>
                          <div className='pacn_bio'><p>Name</p></div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#12037F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#12037F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div className='pb2c2'>
                          <input value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                      </div>
                      <div className='profile_box_2' >
                        <div className='pb2c1'>
                          <div className='pacn_bio'><p>Bio</p></div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#12037F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#12037F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div className='pb2c2'>
                          <input value={bio} onChange={(e) => setBio(e.target.value)} />
                        </div>

                      </div>
                      <div className='profile_box_3' >

                        <div className='pb2c1'>
                          <div className='pacn_bio'><p>Interest</p></div>

                        </div>
                        <Multiselect options={intrest} required selectedValues={selected} onSelect={(selectedList) => setSelected(selectedList)}
                          onRemove={(selectedList) => setSelected(selectedList)}
                          displayValue="label" placeholder="Select Intrest" />


                      </div>
                      <div className='profile_box_4' >
                        <button type='submit' className='pb4_button' >SUBMIT</button>
                      </div>


                    </div>
                  </form>
                  <div className='profile_box_4' >
                    <button onClick={() => setProfile("profile")} className='pb4_button' >Back</button>
                  </div>

                </div>
              }

            </section>


          )
        }) : null

      }
      <Footer />
    </div>
  )
}

export default ProfilePage