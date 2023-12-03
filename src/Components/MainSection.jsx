import React from 'react'
import Gagan from '../assets/GagsGrey.jpg'
import {Link} from 'react-router-dom'

export default function MainSection() {
  return (
    <>
      <div className="main-container">
        <div className="author-box">
          <img src={Gagan} alt="" className="author-img"/>
        </div>
        <div className="author-info">
          <p className="title-info">Hello Everyone I am</p>
          <h2 className="author-name">Gagan Bhatia</h2>
          <h4 className="job-role">Front-end Developer</h4>
          <p className="about-me">
          Elevating Businesses through Exceptional Web Development.
           Crafting visually appealing and user-centric digital 
           experiences with expertise in React.js, HTML, CSS, 
           JavaScript, and Bootstrap.
          </p>
          <div className="contact-info">
            <span>
              <i className="fa-solid fa-calendar-day"></i> 30 August 1992
            </span>
            <Link to="tel:+918979266475" >
              <i className="fa-solid fa-phone"></i> +91-8979266475
            </Link>
            <Link to="mailto:dm.gaganbhatia@gmail.com" target='_blank'>
            <i className="fa-regular fa-envelope"></i> dm.gaganbhatia@gmail.com
            </Link>
            <Link to="https://maps.app.goo.gl/qZZwnYHSDLvnSvPX6" target='_blank'>
              <i className="fa-solid fa-house"></i> Shahdana Colony, Bareilly
            </Link>
          </div>
          <div className="social-media-icons">
            <Link to="https://www.linkedin.com/in/gagan-bhatia-6bb42714b/" target="_blank">
              <i className="fa-brands fa-linkedin linkedin-icon"></i>
            </Link>
            <Link to="https://github.com/GagsBhatiaCoder" target="_blank">
              <i className="fa-brands fa-github github-icon" ></i>
            </Link>
            <Link to="https://instagram.com/gagsbhatia?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
              <i className="fa-brands fa-instagram insta-icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
