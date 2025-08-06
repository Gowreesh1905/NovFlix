import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import banner from '../../assets/main.jpg'
import title from '../../assets/banner_title.png'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="banner">
        <img src={banner} alt="" className='banner-img' />
        <div className="banner-title">
          <img src={title} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
