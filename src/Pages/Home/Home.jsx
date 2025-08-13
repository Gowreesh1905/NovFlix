import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import banner from '../../assets/aot-banner.jpg'
import title from '../../assets/banner_title.png'
import play from '../../assets/info_icon.png'
import info from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="banner">
        <img src={banner} alt="" className='banner-img' />
        <div className="banner-title">
          <img src={title} alt="" />
          <div className='btn-box'>
            <btn className="btn"><img src={play} alt="" /> <p>Read</p></btn>
            <btn className="btn dark-btn"><img src={info} alt="" /> <p>More Info</p></btn>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
