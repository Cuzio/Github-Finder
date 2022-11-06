import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <h3 className='git'>Githuh Finder</h3>
        <div className='button'>
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
        {/* <button className='btn'>HOME</button> */}
        {/* <button className='btn'>ABOUT</button> */}
        </div>
    </div>
  )
}

export default Navbar
