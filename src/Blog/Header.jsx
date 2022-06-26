import React from 'react'
import './style.css'
import {FaBlog} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/' className='link-icon'><FaBlog className='blog-icon'/></Link>
        <ul className='list-items'>
          <Link to='/' className='link'>Home</Link>
          <Link to='/form' className='link'>Create a Blog</Link>
        </ul>
    </div>
  )
}

export default Header