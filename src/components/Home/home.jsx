import React from 'react';
import banner1 from '../../images/herobanner1.png';
import banner2 from '../../images/herobanner2.png';
import banner3 from '../../images/herobanner3.png';
import banner4 from '../../images/herobanner4.png';
import { FaArrowRight } from "react-icons/fa6";
import Exprience from './exprience/exprience.jsx'; 
import HeroSlider from './heroslider/heroslider.jsx'; 
import Homequotation from './quotation/homequotation.jsx';
import Package from '../package/package.jsx';
import Design from '../Home/homedesign/design.jsx';
import Chooseus from '../Home/whychose/choose.jsx';
import Work from '../Home/somework/work.jsx';
import Stories from '../Home/stories/storiex.jsx';
import Accordian from '../Home/accordian/accordian.jsx';
import Success from '../Home/success/success.jsx';
import Tesimonial from '../Home/powerfull/powerfull.jsx';
import './home.css'; 

function Home() {
  const herosliderimages = [banner1, banner2,banner3,banner4];
  return (
    <>
    <div className="slider-container">
      <HeroSlider herosliderimages={herosliderimages} interval={3000}/>
      {/*---slider content--*/}
      <div className="heroslidercontent">
        <div className="heroslidercontentleft">
          <p>W7 INTERIOR DESIGNS</p>
          <h2>Transform Your Space with cedar’s
          Expert Design Consulting </h2>
        </div>
        <div className="heroslidercontentright">
          <button>NEED OUR SERVICE <i><FaArrowRight /></i></button>
        </div>
      </div>
    </div>
    <Exprience/>
    <Homequotation/>
    <Design/>
    <Package/>
    <Chooseus/>
    <Work/>
    <Success/>
    <Accordian/>
    <Tesimonial/>
    <Stories/>
   
    </>
   
  );
}

export default Home;

