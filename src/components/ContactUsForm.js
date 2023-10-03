import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const baseUrl = "https://server.careerclassroom.in"
function ContactUsForm() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [message, setmessage] = useState("");
    const [subject, setsubject] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Form Submited")
        try {
            const response = await axios.post(`${baseUrl}/api/v1/mail/send`, {
                name: name,
                email: email,
                contact: contact,
                message: message,
                subject: subject






                // isEmailVerified: isEmailVerified
            }

            );
            console.log(response)
            // dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.name, response.data.data.user.email));
            if (response.data.status === "success") {


                toast("Thanks for contacting us ")





                console.log(response.data)
            }
        } catch (error) {
            console.log(error)

        }
    }






    return (
        <div className='contactus-form'>

            <form onSubmit={handleSubmit}>
                <div className='formparentbox'>
                    <div className='form-heading' ><p>Get In Touch With Us</p></div>
                    <div className='form-box1' >
                        <div className='formname' >
                            <label className='required' >Nama</label>
                            <input type='text' name='name' value={name} onChange={(e) => setname(e.target.value)} required />
                        </div>
                        <div className='formemail' >
                            <label className='required' >Email Address</label>
                            <input type='email' name='email' placeholder='example@gmail.com' value={email} onChange={(e) => setemail(e.target.value)} required />
                        </div>
                    </div>
                    <div className='formbox2' >
                        <label className='required'>Phone</label>
                        <input type='text' pattern="[0-9]{10}" title="Must Contain 10 Digits" name='contact' value={contact} onChange={(e) => setcontact(e.target.value)} required />
                    </div>
                    <div className='formbox3' >
                        <label className='required'>Subject</label>
                        <input name='subject' type='text' value={subject} onChange={(e) => setsubject(e.target.value)} required />
                    </div>
                    <div className='formbox4' >
                        <label className='required'>Your Message</label>
                        <textarea type="text" name='message' value={message} onChange={(e) => setmessage(e.target.value)} required />
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