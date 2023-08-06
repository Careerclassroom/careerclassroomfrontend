import React from 'react'
import Header from '../components/header'
import PageHeaer from '../components/PageHeaer'
import Avatar from "../images/enroll-now.png"
import Map from "../images/map.png"


function ContactUs() {
  return (
    <div>
        <Header/>
        <PageHeaer heading={"Contact Us"} backgroundimage={Avatar}  />

        <section className='contactus-container' >
              <div children="contactus-map" >
                   <img src={Map} alt='map' />
              </div>
        </section>

    </div>
  )
}

export default ContactUs