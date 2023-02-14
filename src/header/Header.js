import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
        <div className="container-fluid">
          <nav className="navbar navbar-expand bg-primary">
            <a className="navbar-brand text-white ps-5 fw-bold" href="index.html">
              POKEMON
            </a>

            <div className="collapse navbar-collapse" id="main-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active text-white" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/about/:id">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
  );
};

export default Header;
