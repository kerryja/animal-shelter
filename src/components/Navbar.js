import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      // for best results use an SVG image and make sure to set width/height in CSS
      <header>
        <nav className="navbar navbar-default navbar-expand-lg navbar-light static-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="../current-logo.gif" alt="Save a Dog logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Adopt
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/dogs">
                      Available Dogs
                    </a>
                    <a className="dropdown-item" href="#">
                      Adoption Process
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/adoption-application">
                      Adoption Application
                    </a>
                  </div>
                </li>

                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Get Involved
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {/* <a className="dropdown-item" href="/dogs">
                      Available Dogs
                    </a>
                    <a className="dropdown-item" href="#">
                      Adoption Process
                    </a> */}
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/adoption-application">
                      Volunteer Application
                    </a>
                  </div>
                </li>

                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    News + Events
                  </a>
                  {/* <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/dogs">
                      Available Dogs
                    </a>
                    <a className="dropdown-item" href="#">
                      Adoption Process
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/adoption-application">
                      Adoption Application
                    </a>
                  </div> */}
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
