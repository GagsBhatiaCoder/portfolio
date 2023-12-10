import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import FloatWatsappBtn from './FloatWatsappBtn'

export default function ContactForm() {
    document.title = "PortFolio Website || Contact"
    return (
        <>
            <Navbar />
            <FloatWatsappBtn />
            <div className='contact-container'>
                <div className='contact-details'>
                    <h4 className='form-title' style={{ marginBottom: "5px" }}>Lets get in touch</h4>
                    <p>We are open for any suggestion <br />or just to have a chat...</p>
                    <div>
                        <Link to="https://maps.app.goo.gl/qZZwnYHSDLvnSvPX6" className='form-links' target='_blank'><i className="fa-solid fa-location-dot form-icon" style={{ padding: "9px 12px" }}></i> C-19 Shahdana Colony Bareilly, Uttar Pradesh</Link>
                    </div>
                    <div>
                        <Link to="tel:+918979266475" className='form-links'><i className="fa-solid fa-phone form-icon"></i>+918979266475</Link>
                    </div>
                    <div>
                        <Link to="mailto:dm.gaganbhatia@gmail.com" className='form-links'><i className="fa-regular fa-envelope form-icon"></i> dm.gaganbhatia@gmail.com</Link>
                    </div>
                    <div>
                        <Link to="#" className='form-links'><i className="fa-solid fa-globe form-icon"></i>www.gagsthedeveloper.com</Link>
                    </div>
                </div>
                <div className='contact-form'>
                    <h4 className='form-title'>Contact Us</h4>
                    <form method='post' action='https://script.google.com/macros/s/AKfycbyiNQs1frEt_Y7iCaHN0cDlebjEv2p_7LcxwNiewwJJhyqPx2nP0_Il4G9ZUF6pzGsh/exec'>
                        <input className='form-input' type="text" placeholder='Name*' name='name' required /> <br />
                        <input className='form-input' type="mail" placeholder='Email*' name='email' required /> <br />
                        <input className='form-input' type="number" placeholder='Number*' name='number' required /> <br />
                        <textarea className='form-input' name="message" id="" cols="20" rows="5" placeholder='Message'></textarea> <br />
                        <button className='form-btn' type='submit'> Submit </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
