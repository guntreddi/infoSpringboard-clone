import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav-container">
      <div>
        <img src="https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/app_logos/landing-new.png" />
      </div>
      <div>
        <ul className="nav-items-list">
          <li className="nav-item">About Us</li>
          <li className="nav-item">Focus Area</li>
          <li className="nav-item">Translate</li>
          <li className="nav-item login-btn">
              <p>Login</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
