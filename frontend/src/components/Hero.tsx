import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
          <h1>Discover Your Perfect Land</h1>
          <p>Explore an extensive collection of premium land listings, carefully curated to meet your diverse needs and aspirations. </p>
            <button className='btn hero-btn'>
                <Link href="/about" style={{color:`white`}}>READ MORE</Link>
            </button>
          </div>
        </div>
      </header>
  )
}

export default Hero