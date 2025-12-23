import React from 'react'
import './Navbar.css'
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { IoLogoGameControllerB } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left-section">
            <IoLogoGameControllerB className='logo'/>
            <p>Harsha <br />Games</p>
        </div>
        <div className="mid-section">
            <ul>
                <li>Home</li>
                <li>Play Online</li>
                <li>Downloads</li>
            </ul>
        </div>
        <div className="right-section">
            <div className="search-box">
                <IoSearch className='search-icon'/>
                <input type="text" placeholder='Search...' />
            </div>
            <CgProfile className='profile-icon'/>
        </div>
    </div>
  )
}

export default Navbar