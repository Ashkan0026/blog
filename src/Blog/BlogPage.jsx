import React from 'react'
import './style.css'

const BlogPage = ({blog}) => {
  return (
    <div className='blog-page'>
        <h3>Title : {blog.title}</h3>
        <p>{blog.text}</p>
        <h4>CreatorName : {blog.name}</h4>
        <section className='circle1'></section>
    </div>
  )
}

export default BlogPage