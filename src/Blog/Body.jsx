import React from 'react'
import BlogDemo from './BlogDemo'

const Body = ({blogs}) => {
  return (
    <div className='body-con'>
        <section className='blogs-con'>
            {blogs.map((item) => {
              return <BlogDemo blog={item}/>
            })}
        </section>
    </div>
  )
}

export default Body