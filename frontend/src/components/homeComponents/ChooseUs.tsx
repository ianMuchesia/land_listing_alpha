import React from 'react'
import { Icon } from '@iconify/react';

const ChooseUs = () => {
  return (
    <div className="choose__us-container wrapper-width" >
      <h3>Why Choose Us</h3>
      <div className="choose__us-grid">
        <div className="choose__us-card">
            <div className="choose__us-icon">
            <Icon icon="carbon:group-security" className='choose__icon' />
            </div>
          <h4>Reliable Agents</h4>
          <p>Our experienced agents are dedicated to helping you find the perfect land and guide you through the buying process.</p>
        </div>
        <div className="choose__us-card">
        <div className="choose__us-icon">
        <Icon icon="mdi:neighbourhood"  className='choose__icon'/>
        </div>
          <h4>Good Neighborhoods</h4>
          <p>We offer land listings in desirable neighborhoods known for their safety, amenities, and quality of life.</p>
        </div>
        <div className="choose__us-card">
        <div className="choose__us-icon">
       
        <Icon icon="eos-icons:pod-security" className='choose__icon' />
        </div>
          <h4>Housing Security</h4>
          <p>We prioritize your safety and ensure that all land listings adhere to proper legal regulations and security measures.</p>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs