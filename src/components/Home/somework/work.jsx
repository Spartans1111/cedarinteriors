import React from 'react';
import './work.css';
import work1 from '../../../images/work/work1.png';
import work2 from '../../../images/work/work2.png';
import work3 from '../../../images/work/work3.png';
import work4 from '../../../images/work/work4.png';

const work = () => {
  return (
    <div className='work'> <h2 className="header2">SOME OF <span>OUR WORKS</span></h2>
    <p>Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C. Experience the fusion</p>
    <div className="hr"></div>
    
    <div className="workimg">
        <div className="workimgcol">
            <img src={work1} alt="" />
            <div className="workcontent">KITCHEN DESIGNS</div>
        </div>
        <div className="workimgcol">
        <img src={work2} alt="" />
        <div className="workcontent">BEDROOM DESIGNS</div>
        </div>
        <div className="workimgcol">
        <img src={work3} alt="" />
        <div className="workcontent">LIVING DESIGNS</div>
        </div>
        <div className="workimgcol">
        <img src={work4} alt="" />
        <div className="workcontent">DINING DESIGNS</div>
        </div>
    </div>
    </div>
  )
}

export default work