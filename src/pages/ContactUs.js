import React from 'react'
import Header from '../components/header'
import PageHeaer from '../components/PageHeaer'
import Avatar from "../images/enroll-now.png"
import Map from "../images/map.png"
import ContactUsForm from '../components/ContactUsForm'
import ContactUsCard from '../components/ContactUsCard'
import Location from "../images/location.svg"
import Timer from "../images/timer.svg"
import Mail from "../images/mail.svg"
import Call from "../images/phone.svg"




const cardData=[
  {
    "id":1,
    "name":"Visit Our Place",
    "icon":Location,
    "text":"Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    "id":2,
    "name":"Office Schedule",
    "icon":Timer,
    "text":"Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    "id":3,
    "name":"Email Address",
    "icon":Mail,
    "text":"Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    "id":4,
    "name":"Quick Contact",
    "icon":Call,
    "text":"Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
]


function ContactUs() {


  return (
    <div>
      <Header />
      <PageHeaer heading={"Contact Us"} backgroundimage={Avatar} />
      <section className='contactus-area' >

        <section className='contactus-container1' >

          <div className="contactus-map" >
            <img src={Map} alt='map' />
          </div>

          <ContactUsForm />
        </section>

        <section className='contactus-container2' >
              {
                cardData.map((index)=><ContactUsCard key={index.id} name={index.name} icon={index.icon} text={index.text} />)
              }
        </section>

      </section>

    </div>
  )
}

export default ContactUs