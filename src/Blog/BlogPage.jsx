import React from 'react'
import Navbar from '../Components/Navbar'
import Blog from './Blog'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  document.title = "Portfolio Website || Blog"
  return (
    <div style={{marginTop:"5rem"}}>
        <div style={{height:"20vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Link to='/' style={{textDecoration:"none", color:"#000", paddingRight:".2rem"}}>Home</Link> &gt; Blog</div>
      <Navbar />
      <Blog />
      <Footer />
    </div>
  )
}
