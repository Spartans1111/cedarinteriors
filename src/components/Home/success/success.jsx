import React from 'react'
import './success.css';
import success1 from '../../../images/success/success (1).png';
import success2 from '../../../images/success/success (2).png';
import success3 from '../../../images/success/success (3).png';
import success4 from '../../../images/success/success (4).png';

const success = () => {
  return (
    <div className="successstory">
    <div className='success'>
             
             <p className='build-success'>BUILD YOUR DREAM WITH</p>
             <h2 className='header2'>Our Success Route</h2>
             <p className='sucees-elevate'>Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C. Experience the fusion of your aspirations with
             our expertise, creating interiors that speak volumes. Your space, our dedication.</p>
    </div>

    <div className="success-card">
        <div className="success-col">
            <div className="blurb">
                <img src={success1} alt="" />
                <h4>CONCEPT</h4>
                <p>In publishing and graphic design,
                Lorem ipsum is a placeholder</p>
            </div>
        </div>
        <div className="success-col">
        <div className="blurb">
                <img src={success2} alt="" />
                <h4>IDEALOGY</h4>
                <p>In publishing and graphic design,
                Lorem ipsum is a placeholder</p>
            </div>
        </div>
        <div className="success-col">
        <div className="blurb">
                <img src={success3} alt="" />
                <h4>DESIGN</h4>
                <p>In publishing and graphic design,
                Lorem ipsum is a placeholder</p>
            </div>
        </div>
        <div className="success-col">
        <div className="blurb">
                <img src={success4} alt="" />
                <h4>EXECUTION</h4>
                <p>In publishing and graphic design,
                Lorem ipsum is a placeholder</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default success