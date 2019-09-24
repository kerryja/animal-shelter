import React, { Component } from "react";
import "./TopNav.css";

class TopNav extends Component {
  render() {
    return (
      <header>
        <div className="container" id="top-nav">
          <nav>
            <ul>
              <div className="row">
                <div className="col-6 left-contact text-left">
                  <li>
                    <a href="mailto:adoptions@adopted.com">
                      adoptions@adopted.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:123-456-7890">123-456-7890</a>
                  </li>
                </div>

                <div className="col-6 right-social text-right">
                  <li>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className="social" className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i
                        className="social"
                        className="fab fa-facebook-square"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className="social" className="fab fa-instagram" />
                    </a>
                  </li>
                </div>
              </div>
            </ul>
            <div className="mobile">
              <li>
                <a href="mailto:adoptions@adopted.com">
                  <i class="far fa-envelope" />
                </a>
              </li>
              <li>
                <a href="tel:123-456-7890">
                  <i class="fas fa-phone" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="social" className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="social" className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <i className="social" className="fab fa-instagram" />
                </a>
              </li>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default TopNav;
