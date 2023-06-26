import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
    <p>
      &copy; <span id="date">{new Date().getFullYear()}</span>
      <span className="footer-logo">{" "}Logo</span> Built by
      <span className='footer-name'>Land listings Co.</span>
    </p>
  </footer>
  )
}

export default Footer