import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/About';
import Course from './components/course';
import Goggle from './components/googleLogin';
import { GoogleLogin } from '@react-oauth/google';
import Header from './components/header';
import Enroll from './components/Enrollment';
import UserProfile from './components/profile';
import axios from 'axios';
import Privacy from './components/privacy';
import ContactUs from './pages/ContactUs';

import Terms from './components/terms';
import Checkout from './components/checkout';

import RefundPolicy from './pages/RefundPolicy';

import Verification from './components/verification';
import PasswordReset from './components/reset';
import ProfilePage from './pages/ProfilePage';
import OtpVerification from './components/otp';
import { ToastContainer } from 'react-toastify';
import Dashboards from './components/dashboard';
import Home2 from './components/profile';





function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/enroll'element={<Enroll/>}></Route>
        <Route path='/login-signup' element={<Goggle/>}></Route>
        <Route path='/verify' element={<OtpVerification/>}></Route>
        <Route path='/privacy' element={<Privacy/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/terms-condition' element={<Terms/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/userProfile' element={<ProfilePage/>}></Route>
        <Route path="verification"element={<Verification/>}></Route>
        <Route path='/refund-policy' element={<RefundPolicy/>}></Route>
        <Route path="/reset/:resetToken" element={<PasswordReset/>} />
         
        <Route path="/" element={<Home2/>} />
        <Route path="/dashboard" element={<Dashboards/>} />
      </Routes>
 <ToastContainer/>
    </div>
  );
}

export default App;
