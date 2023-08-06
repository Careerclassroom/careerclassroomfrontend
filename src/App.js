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

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/enroll'element={<Enroll/>}></Route>
        <Route path='/' element={<Goggle/>}></Route>
        <Route path='/userProfile' element={<UserProfile/>}></Route>
        <Route path='/Privacy' element={<Privacy/>}></Route>
      </Routes>
 
    </div>
  );
}

export default App;
