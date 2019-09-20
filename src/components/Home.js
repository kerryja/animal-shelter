import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section className="hero">
        <h1 className="text-white hero-text text-xs-center text-md-left">
          <p>Adopt a dog,</p>
          <p>Save a life</p>
        </h1>
        <h1 className="text-white text-xs-center hero-text-mobile">
          <p>Adopt a dog, save a life.</p>
        </h1>
      </section>
    );
  }
}

export default Home;
