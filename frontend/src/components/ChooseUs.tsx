import React from 'react'
import { Icon } from '@iconify/react';

const ChooseUs = () => {
  return (
    <div className="features-container">
      <h3>Why Choose Us</h3>
      <div className="features-grid">
        <div className="feature-card">
            <div className="feature-icon">
            <Icon icon="carbon:group-security" />
            </div>
          <h4>Reliable Agents</h4>
          <p>Our experienced agents are dedicated to helping you find the perfect land and guide you through the buying process.</p>
        </div>
        <div className="feature-card">
        <div className="feature-icon">
        <Icon icon="mdi:neighbourhood" />
        </div>
          <h4>Good Neighborhoods</h4>
          <p>We offer land listings in desirable neighborhoods known for their safety, amenities, and quality of life.</p>
        </div>
        <div className="feature-card">
        <div className="feature-icon">
       
        <Icon icon="eos-icons:pod-security" />
        </div>
          <h4>Housing Security</h4>
          <p>We prioritize your safety and ensure that all land listings adhere to proper legal regulations and security measures.</p>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs