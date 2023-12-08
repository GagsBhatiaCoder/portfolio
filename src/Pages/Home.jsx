import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MainSection from '../Components/MainSection'
import OurServices from '../OurServices/OurServices'
import AboutMe from '../Components/AboutMe'
import Blog from '../Blog/Blog'
import FloatWatsappBtn from '../Components/FloatWatsappBtn'




export default function Home() {

  // useEffect(() => {
  //   setLoading(false)
  // }, [])
  return (
    <div>
    < div >
      <Navbar />
      <FloatWatsappBtn />
      <MainSection />
      <AboutMe />
      <OurServices />
      <Blog />
      <Footer />
      </div> 
    </div >
  )
}
