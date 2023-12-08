import React,{useState} from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog/Blog';
import FullArtical from './Blog/FullArtical';
import ContactForm from './Components/ContactForm';
import BlogPage from './Blog/BlogPage';
import AboutMePage from './Components/AboutMePage';
import OurServicePage from './OurServices/OurServicePage';
import { FadeLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);

  window.onload = () => {
   setLoading(false)
  }

  return (
    <>
    { loading? <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}><FadeLoader
      color={"#000"}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> </div>:
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/service" element={<OurServicePage />} />
          <Route path='/blogpage' element={<BlogPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<FullArtical />} />
        </Routes>
      </Router>
      }
    </>
  )
    }


export default App
