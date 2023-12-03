import React from 'react'
import './Comp.css'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="footer1">
          <div>
            <h3 className="footer-title">About Us</h3>
            <p className="footer-info">
              Do you want to be even more successful?<br />
              Learn to love learning and growth. <br />
              The more effort you put into improving your skills,
            </p>
          </div>
          <div>
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-info">Stay updated with our latest trends</p>
            <input type="email" className="email-input" />
            <button className="newsletter-btn">→</button>
          </div>
          <div>
            <h3 className="footer-title">Follow Me</h3>
            <p className="footer-info">Let us be social</p>
            <Link to='https://www.facebook.com/gagan.bhatia.16' className="icons" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to='https://instagram.com/gagsbhatia?igshid=OGQ5ZDc2ODk2ZA==' className="icons" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
            <Link to='https://www.linkedin.com/in/gagan-bhatia-6bb42714b/' className="icons" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to='https://github.com/GagsBhatiaCoder' className="icons" target="_blank"><i className="fa-brands fa-github"></i></Link>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <p className="footer-info">Copyright ©2023 All rights reserved |</p>
        </div>
      </div>
    </>
  )
}
