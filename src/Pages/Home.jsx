import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MainSection from '../Components/MainSection'
import OurServices from '../OurServices/OurServices'
import AboutMe from '../Components/AboutMe'
import Blog from '../Blog/Blog'
import FloatWatsappBtn from '../Components/FloatWatsappBtn'
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";



export default function Home() {
  const [loading, setLoading] = useState(true);

 window.onload = () => {
  setLoading(false)
 }
  return (
    <div>
      { loading? 
      <div style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"}}>
      <ClipLoader
      color={"#000"}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> </div> :
    <div>
      <Navbar />
      <FloatWatsappBtn />
      <MainSection />
      <AboutMe />
      <OurServices />
      <Blog />
      <Footer />
      </div>

      }
      
    </div>
  )
}
