
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { getUserIdFromAuth } from '../Redux/actions/GetSellerIdFromAuthActionCreators';
function Home2(){
  useEffect(()=>{
    navigation('/home')
  },[])
    const dispatch=useDispatch("")
    const navigation=useNavigate("")

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.get("http://127.0.0.1:8000/api/v1/user/logout", {
            withCredentials: true
          });
          if (res.data.status === "success") {
            dispatch(getUserIdFromAuth({}));
   
            window.alert('You logged Out Successfully');
            navigation('/');
          }
        } catch (err) {
          // console.log(err);
          window.alert('There may be some internal server error');
        }
      }
    return(
        <div>
     

        </div>
    )
}
export default Home2