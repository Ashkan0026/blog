import React, { useRef, useState } from 'react'
import './style.css'

const Form = ({addBlog, counter}) => {
  let [blogName, setBlogName] = useState('')
  let [blogTitle, setBlogTitle] = useState('')
  let [blogText,setBlogText] = useState('')
  let nameRef = useRef()
  let titleRef = useRef()
  let textRef = useRef()

  const handleClick = () => {
      let blogItem = {
          name:blogName,
          title:blogTitle,
          text:blogText,
          id:counter
      }
      addBlog(blogItem)
      nameRef.current.value = ''
      titleRef.current.value = ''
      textRef.current.value = ''
  }

  return (
    <div className='form-con'>
        <section className='input-sec'>
            <input className='input' type='text' onChange={(e) => setBlogName(e.target.value)} placeholder='name' ref={nameRef}/>
            <input className='input' type='text' onChange={(e) => setBlogTitle(e.target.value)} placeholder='title' ref={titleRef}/>
            <textarea className='input text' type='text' onChange={(e) => setBlogText(e.target.value)} placeholder='text' ref={textRef}/>
            <button className='submit' onClick={handleClick}>Submit</button>
        </section>
    </div>
  )
}

export default Form