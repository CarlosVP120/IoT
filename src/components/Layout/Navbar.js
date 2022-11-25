import React from "react";
import "./NavbarStyles.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <image id="logo">
        <img width={35} src={logo} alt="Logo" />
      </image>

      <div>
        <ul id="navbar">
          <li>
            <a className="active" href="/Home">
              Home
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://iot-app-itesm-default-rtdb.firebaseio.com/"
            >
              Firebase
            </a>
          </li>
          <li>
            <a href="/AddData">Add Data</a>
          </li>
          <li>
            <a href="/ToggleButtons">Toggle Buttons</a>
          </li>
          <li>
            <a href="/Admin">Admin Panel</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
