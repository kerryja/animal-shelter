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
                    <a href="mailto:adoptions@saveadog.org">
                      adoptions@saveadog.org
                    </a>
                  </li>
                  <li>
                    <a href="tel:123-456-7890">123-456-7890</a>
                  </li>
                </div>

                <div className="col-6 right-social text-right">
                  <li>
                    <a
                      href="https://twitter.com/SaveADogInc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="social" className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/saveadog.sudbury"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="social"
                        className="fab fa-facebook-square"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/saveadoginc/?ref=badge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="social" className="fab fa-instagram" />
                    </a>
                  </li>
                  {/* <form>
                    <input
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form> */}
                </div>
              </div>
            </ul>
            <div className="mobile">
              <li>
                <a href="mailto:adoptions@saveadog.org">
                  <i class="far fa-envelope" />
                </a>
              </li>
              <li>
                <a href="tel:123-456-7890">
                  <i class="fas fa-phone" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/SaveADogInc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social" className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/saveadog.sudbury"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social" className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/saveadoginc/?ref=badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
