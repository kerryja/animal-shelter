import React, { Component } from "react";
import "./DogDetails.css";
import Slider from "../components/Slider";
import CardDetails from "../components/CardDetails";

class DogDetails extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  render() {
    return (
      <main>
        <Slider id={this.id} />
        <CardDetails id={this.id} />
      </main>
    );
  }
}

export default DogDetails;
