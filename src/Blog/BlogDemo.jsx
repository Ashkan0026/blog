import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const BlogDemo = ({blog}) => {
  return (
    <Link className='blog-demo-con' to={`blog${blog.id}`}>
        <section className='blog-demo-head'>
            <h3>{blog.title}</h3>
            <h3 className='nameshow'>{blog.name}</h3>
        </section>
        <p>{blog.text.trim().substring(0,23)}...</p>
    </Link>
  )
}

export default BlogDemo