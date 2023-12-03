import React from 'react'
import './OurService.css'

export default function OurServiceCard(props) {
    return (
        <>
            <div className="our-service-card" >
                <i style={{ fontSize: "4rem", padding: "1rem" }} className={props.icon}></i>
                <h3 className='service-card-title'>{props.title}</h3>
                <p className='service-card-para'>{props.description}</p>
            </div>
        </>
    )
}
