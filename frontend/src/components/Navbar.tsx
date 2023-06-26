import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
const Navbar = () => {

    const [ toggle , setToggle ] = useState(false)

    const handleToggle=()=>{
        setToggle(prevToggle=>!prevToggle)
    }
  return (
  <nav className='navbar'>
    <div className="nav-center">
        <div className="nav-header">
            <h3>Logo</h3>
            <button onClick={handleToggle} className='nav-btn btn'>
          {!toggle? (<AiOutlineMenu className='nav-icon'/>):(<AiOutlineClose className='nav-icon'/>)}
          </button>
        </div>
        <ul className={`${toggle?"show-links": ""} nav-links`}>
   <li className="nav-link">Home</li>
   <li className="nav-link">About</li>
   <li className="nav-link">Properties</li>
   <li className="nav-link contact-link">
    <button className="btn">Login</button>
   </li>
    </ul>
    </div>
    
  </nav>
  )
}

export default Navbar