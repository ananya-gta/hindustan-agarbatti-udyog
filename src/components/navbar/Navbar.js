import React from 'react'
import "../navbar/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__item'><a href="#">Home</a></div>
        <div className='navbar__item'><a href="">About Us</a></div>
        <div className='navbar__item'><a href="">Our Products</a></div>
        <div className='navbar__item'><a href="">Testimonials</a></div>
        <div className='navbar__item'><a href="">Contact Us</a></div>        
    </div>
  )
}

export default Navbar