import React from 'react'
import Quotationslider from './quotationslider';
import './homequotation.css'; 
import { GoArrowRight } from "react-icons/go";
const Homequotation = () => {
  return (
    <div className='homequtation'>
        <div className="homequationslider">
            <div className="slide"> <Quotationslider /></div>
       
        </div>
        <div className="homequotationcontent">
            <p>Tag Line - Place Holder</p>
            <h2 className='header2'>Get a Free <span>Quotation</span></h2>
            <form action="">
          <input type="text" placeholder='Enter Your Name' className='inputfeild' />
          <input type="text" placeholder='Enter Company Name' className='inputfeild' />
          <input type="email" placeholder='Enter Email ID' className='inputfeild' />
          <input type="number"placeholder='Enter Phone Number' className='inputfeild' />
           <input type="text" placeholder='Location' className='requsting'/>
          <button className='submit btn1'>GET QUOTATION <span>{<GoArrowRight/>}</span></button>
        </form>
        </div>
       
    </div>
  )
}

export default Homequotation