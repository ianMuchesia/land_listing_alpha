import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
const Navbar = () => {

    const [ toggle , setToggle ] = useState(false)

    const handleToggle=()=>{
        setToggle(prevToggle=>!prevToggle)
    }
  return (
    <header>
        <div className="nav-bar">
            <h5>Land-Listing</h5>
            {!toggle?<AiOutlineMenu className='nav_icon' onClick={handleToggle}/>:
            <AiOutlineClose className='nav_icon' onClick={handleToggle}/>}
        </div>
        {toggle && <ul>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>}
    </header>
  )
}

export default Navbar