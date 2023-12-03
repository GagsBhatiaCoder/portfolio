import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './BlogData';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Blog.css'
import FloatWatsappBtn from '../Components/FloatWatsappBtn';

export default function FullArtical() {
    const { id } = useParams();
    const post = blogPosts.find((post) => post.id === parseInt(id));
  
    if (!post) {
      return <div>Article not found</div>;
    }
  return (
    <div >
      <Navbar />
      <FloatWatsappBtn />
      <div className='fullartical'>
        <div className='fullartical-img-box'>
        <img src={post.img} alt="" className='fullartical-img'/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <span className='fullartical-span'><i className="fa-regular fa-user blog-icon"></i> {post.admin}</span>
           <span className='fullartical-span'><i className="fa-regular fa-calendar blog-icon"></i>{post.date}</span>
        </div>
        </div>
      <h1 className='fullartical-title'>{post.title}</h1>
      <p className='fullartical-content'>{post.content}</p>
     
      </div>
      <Footer />
    </div>
  )
}
