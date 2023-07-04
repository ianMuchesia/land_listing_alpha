import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import Link from "next/link";
import {BsFillPersonDashFill} from "react-icons/bs"
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineProfile,
} from "react-icons/ai";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; //
import { Logout } from "./modals";




const Navbar = () => {
 

  const user = useAppSelector((state) => state.auth);

  const [toggle, setToggle] = useState(false);
  const [ logoutModal , setLogoutModal] = useState(false)
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  const handleCloseToggle = () => {
    setToggle(false);
  };

 
 
  return (
    <header>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
         <h3>Logo</h3>
          <button onClick={handleToggle} className="nav-btn btn">
            {!toggle ? (
              <AiOutlineMenu className="nav-icon" />
            ) : (
              <AiOutlineClose className="nav-icon" />
            )}
          </button>
        </div>
        <ul className={`${toggle ? "show-links" : ""} nav-links`}>
          <li onClick={handleCloseToggle}>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li onClick={handleCloseToggle}>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li onClick={handleCloseToggle}>
            <Link href="/properties" className="nav-link">
              Properties
            </Link>
          </li>
          {user.user.role === "admin" && (
            <li onClick={handleCloseToggle}>
              <Link href="/create" className="nav-link">
                Create
              </Link>
            </li>
          )}
          <li className="contact-link" >
            {user.isAuthenticated ? (
              <>
                <div className="logout-link" onClick={()=>{handleCloseToggle;setLogoutModal(true)}}>
             
                  <BsFillPersonDashFill className="logout-icon" />
                
                  <p>{user.user.name}</p>
                 
                </div>
              </>
            ) : (
              <Link href="/Login" className="nav-link" onClick={handleCloseToggle}>
                <button className="btn">Login</button>
              </Link>
            )}
          </li>
        </ul>
      
      </div>
    </nav>  
    { logoutModal && user.isAuthenticated  && <Logout setLogoutModal={setLogoutModal}/>}  
    </header>
  );
};

export default Navbar;
