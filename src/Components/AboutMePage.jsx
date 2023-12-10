import React from 'react'
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default function AboutMePage() {
  document.title = "Portfolio Website || About"
  return (
    <div style={{marginTop:"5rem"}}>
    <div style={{height:"20vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
         <Link to='/' style={{textDecoration:"none", color:"#000", paddingRight:".2rem"}}>Home</Link> &gt; About Me</div>
    <Navbar />
    <AboutMe />
    <Footer />
</div>
  )
}
