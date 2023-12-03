import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog/Blog';
import FullArtical from './Blog/FullArtical';
import ContactForm from './Components/ContactForm';
import BlogPage from './Blog/BlogPage';
import AboutMePage from './Components/AboutMePage';
import OurServicePage from './OurServices/OurServicePage';

function App() {

  return (
    <>
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
    </>
  )
}

export default App
