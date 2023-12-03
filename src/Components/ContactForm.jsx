import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatWatsappBtn from './FloatWatsappBtn'

export default function ContactForm() {
    
    return (
        <>
            <Navbar />
            <FloatWatsappBtn />
            <div className='contact-container'>
                <div className='contact-details'>
                    <h4 className='form-title' style={{marginBottom:"5px"}}>Lets get in touch</h4>
                    <p>We are open for any suggestion <br />or just to have a chat...</p>
                    <div>
                        <a href="https://maps.app.goo.gl/qZZwnYHSDLvnSvPX6" className='form-links' target='_blank'><i className="fa-solid fa-location-dot form-icon" style={{padding:"9px 12px"}}></i> C-19 Shahdana Colony Bareilly, Uttar Pradesh</a>
                    </div>
                    <div>
                        <a href="tel:+918979266475" className='form-links'><i className="fa-solid fa-phone form-icon"></i>+918979266475</a>
                    </div>
                    <div>
                        <a href="mailto:dm.gaganbhatia@gmail.com" className='form-links'><i className="fa-regular fa-envelope form-icon"></i> dm.gaganbhatia@gmail.com</a>
                    </div>
                    <div> 
                        <a href="#" className='form-links'><i className="fa-solid fa-globe form-icon"></i>www.gagsthedeveloper.com</a>
                    </div>
                </div>
                <div className='contact-form'>
                    <h4 className='form-title'>Contact Us</h4>
                    <form action="">
                        <input className='form-input' type="text" placeholder='Name*'  required /> <br />
                        <input className='form-input' type="mail" placeholder='Email*' required /> <br />
                        <input className='form-input' type="number" placeholder='Number*'  required /> <br />
                        <textarea className='form-input' name="" id="" cols="20" rows="5" placeholder='Message'></textarea> <br />
                        <button className='form-btn' type='submit'> Submit </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
