import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/about">About</Link>
        <Link to="./login">Login/SignUp</Link>
      </div>
    </nav>
  );
}

export default Header;
