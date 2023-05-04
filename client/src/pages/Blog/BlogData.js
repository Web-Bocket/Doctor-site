import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogData = () => {

  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/blog/${id}`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className='blog_data_parent'>
      <div className='blog_data_div'>

        <h1>{blog.blogTitle}</h1>
        <div>
          {/* <p>Date : </p> */}
          <p>Posted by : {blog.blogPerson}</p>
        </div>

        <img src={blog.blogImage} alt='blog img' />
        <p>{blog.blogDescription}</p>
      </div>

    </div>
  )
}

export default BlogData