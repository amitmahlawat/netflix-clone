import React, { useEffect, useRef } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search_icon.svg';
import bell from '../../assets/bell_icon.svg';
import profile from '../../assets/profile_img.png';
import caret from '../../assets/caret_icon.svg';
import { logout } from '../../Firebase';
const Navbar = () => {

const navRef=useRef();

useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if (window.scrollY>=80){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
  })
})

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={logo}></img>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
          </ul>
      </div>
      <div className='navbar-right'>
      <img src={search} className='icons'></img>
      <p>Children</p>
      <img src={bell} className='icons'></img>
      <div className="navbar-profile">
      <img src={profile} className='icons'></img>
      <img src={caret} className='icon'></img>
      <div className='dropdown'>
        <p onClick={logout}>sign out of Netflix</p>
      </div>

      </div>
      
      </div>
      
      
    </div>
  )
}

export default Navbar
