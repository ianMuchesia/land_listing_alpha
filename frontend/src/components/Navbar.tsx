import { useAppDispatch, useAppSelector } from "@/pages/redux/Hooks";
import Link from "next/link";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth);

  
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
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
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/properties" className="nav-link">
              Properties
            </Link>
          </li>
          {user.user.role === "admin" && <li>
            <Link href="/create" className="nav-link">
              Create
            </Link>
          </li>}
          <li className="contact-link">
            {user.isAuthenticated ? (
              <>
                <button className=" btn">{user.user.name}</button>
              </>
            ) : (
              <Link href="/Login" className="nav-link">
                <button className="btn">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
