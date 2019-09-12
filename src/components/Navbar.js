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
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
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
                      Dogs for Adoption
                    </a>
                    <a className="dropdown-item" href="/adopt">
                      Adoption Process
                    </a>
                    <a className="dropdown-item" href="/adoption-guidelines">
                      Adoption Guidelines
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/adoption-application">
                      Apply to Adopt
                    </a>

                    <a className="dropdown-item" href="/resources">
                      Resources for Adopters
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
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
                    <a className="dropdown-item" href="/volunteer">
                      Volunteer
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/volunteer-application">
                      Apply to Volunteer
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    News + Events
                  </a>
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
