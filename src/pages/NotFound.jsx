// import {FaHome} from 'react-icon/fa'
import {Link} from 'react-router-dom'
import React from 'react'
import './NotFound.css'

function NotFound() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>Oops!</h1>
        <p>404 - Page not found</p>
        <Link to='/' className='btn'>Back To Home</Link>
      </div>
    </div>
  )
}

export default NotFound
