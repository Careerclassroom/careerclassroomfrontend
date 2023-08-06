import React from 'react'
import Header from '../components/header'
import PageHeaer from '../components/PageHeaer'
import Avatar from "../images/enroll-now.png"
import Map from "../images/map.png"
import ContactUsForm from '../components/ContactUsForm'


function ContactUs() {
  return (
    <div>
        <Header/>
        <PageHeaer heading={"Contact Us"} backgroundimage={Avatar}  />
        <section className='contactus-area' >

        <section className='contactus-container1' >

              <div className="contactus-map" >
                   <img src={Map} alt='map' />
              </div>

               <ContactUsForm/>
        </section>

        <section className='contactus-container2' >
          
        </section>

        </section>

    </div>
  )
}

export default ContactUs