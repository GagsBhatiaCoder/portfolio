import React from 'react';
import OurServiceCard from './OurServiceCard';
import './OurService.css'


export default function OurServices() {
  return (
    <div style={{padding:"0 2rem"}} id='services'>
      <div className="our-services">
        <h2 className='service-title'>OUR SERVICES</h2>
        <p className='service-info' >
        We specialize in creating stunning websites,
        maintaining their performance and security, 
        and optimizing them for maximum online visibility.
        </p>
      </div>
      <div className='service-box' >
        <OurServiceCard
          icon="fa-brands fa-react icon-hover "
          title="Web Developement"
          description="We create custom websites and web applications
           that are visually captivating, user-friendly, and optimized 
           for performance and SEO. Let us bring your online vision to life."
        />
          <OurServiceCard
          icon="fa-solid fa-gears icon-hover"
          title="Website Maintainence"
          description="Ensure your website stays at its peak performance 
          with our professional website maintenance services.
           We understand the importance of a well-maintained online 
           presence. "
        />
          <OurServiceCard
          icon="fa-solid fa-award icon-hover"
          title="Website's SEO"
          description="Welcome to our Website, here we take your online 
          presence to new heights with our expert SEO services! Our 
          dedicated team of SEO professionals is committed to helping
           your business."
        />
      </div>
    </div>
  )
}
