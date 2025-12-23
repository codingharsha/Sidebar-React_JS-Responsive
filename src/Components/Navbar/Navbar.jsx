import React, { useState } from 'react'
import './Navbar.css'
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";

const Navbar = () => {

    const[isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

  return (
    <div className='navbar'>
        <div className="left-section">
            <GiHamburgerMenu className='hamburger-icon'/>
            <div className="logo-container">
                <IoLogoGameControllerB className='logo'/>
                <p>Harsha <br />Games</p>
            </div>
        </div>

        <div className="right-section">
            <ul>
                <li>Home</li>
                <li>Play Online</li>
                <li>Downloads</li>
            </ul>
            <div className="search-box">
                <IoSearchSharp className='search-icon'/>
                <input type="text" placeholder='Search...' />
            </div>
            <CgProfile className='profile-icon'/>
        </div>
    </div>
  )
}

export default Navbar