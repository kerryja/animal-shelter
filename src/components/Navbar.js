import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      // for best results use an SVG image and make sure to set width/height in CSS
      <header>
        <nav className="navbar navbar-default navbar-expand-lg navbar-light static-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="current-logo.gif" alt="Save a Dog logo" />
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
                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="http://example.com"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Adopt
                  </a>
                  <a className="nav-link" href="#">
                    <span className="sr-only">(current)</span>
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Get Involved
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
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
