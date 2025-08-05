import React from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Novels</li>
          <li>Manga</li>
          <li>Comics</li>
          <li>Top Rated</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search} alt="" className='icons' />
        <p>Children</p>
        <img src={bell} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile} alt="" className='profile' />
          <img src={caret_icon} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Navbar
