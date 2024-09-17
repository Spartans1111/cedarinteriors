import React, {useState} from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './header.css'; 
import logo from '../../images/logo.png';
import {FiMenu, FiX} from 'react-icons/fi';
import { SlArrowRight } from "react-icons/sl";



const Header = () => {
  const [open, setopen]=useState(false);
  const handleClick=()=>setopen(!open);
  const closeMenu=()=>setopen(false);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={open ? 'navlinkactive' : ''}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/service">SERVICES</Link></li>
        <li><Link to="/pricing">PRICINGS</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <div className="navbtn-container">
        <button className='navbtn navbtn-contact'>CONTACT US <span>{<SlArrowRight/>}</span></button>
        <button className='navbtn navbtn-quotation'>Get Quotation<span>{<SlArrowRight/>}</span></button>
      </div>
      </ul>
      <div onClick={handleClick} className="humbargur">
        {open ? <FiX/> : <FiMenu/>}
      
      
      </div>
        
    </nav>
  );
};

export default Header;
