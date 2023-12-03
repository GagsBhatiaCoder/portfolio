import React from 'react';
import blogPosts from './BlogData';
import BlogPosts from './BlogPost';
import './Blog.css'

const Blog = () => {
    return (
        <>
            <div style={{background:"#fff"}} id='blog'>
                <h2 className='blog-title' >Latest Story From Our Blogs</h2>
                <div className="blog-container">
                    {blogPosts.map((post) => (
                        <BlogPosts key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;