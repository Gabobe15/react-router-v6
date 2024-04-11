import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className="logo-nav">
          Git Explorer
        </NavLink>
        <div className="link-cont">
          <NavLink to='/'>Repos</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/authProfile">Profile</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
