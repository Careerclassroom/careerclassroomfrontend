import React from 'react'

function ContactUsForm() {
    return (
        <div className='contactus-form'>

            <form>
                <div className='formparentbox'>
                    <div className='form-heading' ><p>Get In Touch With Us</p></div>
                    <div className='form-box1' >
                        <div className='formname' >
                            <label className='required' >Name</label>
                            <input/>
                        </div>
                        <div className='formemail' >
                            <label className='required' >Email Address</label>
                            <input />
                        </div>
                    </div>
                    <div className='formbox2' >
                        <label className='required'>Phone</label>
                        <input />
                    </div>
                    <div className='formbox3' >
                        <label className='required'>Subject</label>
                        <input />
                    </div>
                    <div className='formbox4' >
                        <label className='required'>Your Message</label>
                        <textarea />
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