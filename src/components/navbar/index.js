import React from "react";
import { Link } from "react-router-dom";

import brandLogo from "../../images/brand.svg";

class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <a href="/" className="logo">
          <img src={brandLogo} width={80} style={{ marginRight: "16px" }} />
          HYUNDAI SERVICE
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </header>
    );
  }
}
export default Navbar;
