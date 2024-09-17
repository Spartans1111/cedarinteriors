import React from 'react';
import './powerfull.css'; 
import qut from '../../../images/quote.png';
import author from '../../../images/Sudeepkrishna.png';
import { FaStar } from "react-icons/fa";

const powerfull = () => {
  return (
    <div> <div id="Testimonial">
    <div class="row-testimonial">
      <div class="col-testimonial">
        <h2 className='header2'>Powerful Insights</h2>
          <p class="get-insight">Get an insight into the valuable and impactful thoughts direct from our clients.</p>
          <h6>REVIEWS & TESTIMONIALS  -</h6>
      </div>
      <div class="col-testimonial">
        <div class="satisfied-cutomer">
          <span>89+</span>
          <p>Satisfied Clients worldwide</p>
        </div>
      </div>
    </div>
    <div class="testimonial-card">
      <div class="card">
        <div class="card-content">
          <div class="rating">
            <FaStar/><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <div class="content">Working with [Agency Name] was an absolute 
            absolute pleasure! From concept to completion,
            they transformed my home into a stunning and
            functional space. Their attention to detail and 
            to bring my vision to life exceeded all
            expectations.</div>
            <div class="quatation"><img src={qut} alt="" /></div>
        </div>
        <div class="card-authur">
          <div class="autor-img"> <img src={author} alt="" /></div>
          <div class="author-name">
            <p>Sudeep krishna P</p>
            <p>Thirssur, Kerala</p>
          </div>
        </div>
      </div>
      {/*second--*/}
      <div class="card">
        <div class="card-content">
        <div class="rating">
            <FaStar/><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <div class="content">Working with [Agency Name] was an absolute 
            absolute pleasure! From concept to completion,
            they transformed my home into a stunning and
            functional space. Their attention to detail and 
            to bring my vision to life exceeded all
            expectations.</div>
            <div class="quatation">
            <img src={qut} alt="" />
                </div>
        </div>
        <div class="card-authur">
          <div class="autor-img">
          <img src={author} alt="" />
           </div>
          <div class="author-name">
            <p>Sudeep krishna P</p>
            <p>Thirssur, Kerala</p>
          </div>
        </div>
      </div>
      {/*second end--*/}
        {/*third--*/}
        <div class="card">
        <div class="card-content">
        <div class="rating">
            <FaStar/><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <div class="content">Working with [Agency Name] was an absolute 
            absolute pleasure! From concept to completion,
            they transformed my home into a stunning and
            functional space. Their attention to detail and 
            to bring my vision to life exceeded all
            expectations.</div>
            <div class="quatation">
            <img src={qut} alt="" />
                </div>
        </div>
        <div class="card-authur">
          <div class="autor-img">
          <img src={author} alt="" />
           </div>
          <div class="author-name">
            <p>Sudeep krishna P</p>
            <p>Thirssur, Kerala</p>
          </div>
        </div>
      </div>
       {/*thrid end--*/}
       


    </div>

  </div></div>
  )
}

export default powerfull