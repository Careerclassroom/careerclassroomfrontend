import React from 'react'

function ContactUsCard({name,text,icon}) {
  return (
    <div  >
        <div className='contactus-card'>
            <div className='contactus-card-icon'>
                <img src={icon} />
            </div>
            <div className='contactus-card-heading' >
                <p>{name}</p>
            </div>
            <div className='contactus-card-text' >
            <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default ContactUsCard