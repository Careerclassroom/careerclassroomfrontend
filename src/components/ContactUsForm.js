import React, { useState } from 'react'

function ContactUsForm() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs)
    }

    return (
        <div className='contactus-form'>

            <form onSubmit={handleSubmit}>
                <div className='formparentbox'>
                    <div className='form-heading' ><p>Get In Touch With Us</p></div>
                    <div className='form-box1' >
                        <div className='formname' >
                            <label className='required' >Nama</label>
                            <input type='text' name='name' value={inputs.name || ""} onChange={handleChange} required />
                        </div>
                        <div className='formemail' >
                            <label className='required' >Email Address</label>
                            <input type='email' name='email' value={inputs.email || ""} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className='formbox2' >
                        <label className='required'>Phone</label>
                        <input type='number' name='contact'  value={inputs.contact || ""} onChange={handleChange} required />
                    </div>
                    <div className='formbox3' >
                        <label className='required'>Subject</label>
                        <input name='subject' type='text' value={inputs.subject || ""} onChange={handleChange} required />
                    </div>
                    <div className='formbox4' >
                        <label className='required'>Your Message</label>
                        <textarea type="text" name='message' value={inputs.message || ""} onChange={handleChange} required />
                    </div>
                </div>

                <div className='submitbtn' >
                    <input type='submit' />
                </div>

            </form>

        </div>
    )
}

export default ContactUsForm