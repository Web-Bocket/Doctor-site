import React, { useCallback, useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import './blog.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

  const [blogs, setBlogs] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/blog')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const navigate = useNavigate();

  const handleReadMoreClick = useCallback((id) => {
    navigate(`/blog/${id}`);
  }, [navigate]);

  return (
    <div className='blog_parent'>
      <div className='blog_parent_div'>
        <h1>Checkout our blogs</h1>
        <hr></hr>
        <div className='blog_div'>


          {Array.isArray(blogs) && blogs.map(blog => (
            <div className='one_blog_div' key={blog._id}>
              <img src={blog.blogImage} />
              <h2>{blog.blogTitle}</h2>
              {/* <p>By : {blog.blogPerson}</p> */}
              <Button onClick={() => handleReadMoreClick(blog._id)}>Read More</Button>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Blog