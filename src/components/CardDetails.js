import React, { Component } from "react";
import "../config/config";
import "./CardDetails.css";

class CardDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dog: null
    };
    this.id = props.id;
  }

  async componentDidMount() {
    let response = await fetch(global.gConfig.baseAPIURL + "/dog/" + this.id);
    let dog = await response.json();
    this.setState({ dog });
  }
  render() {
    const dog = this.state.dog;
    if (dog === null) {
      return <div />;
    }
    return (
      <div className="card card-dog">
        <div className="card-body">
          <h5 className="card-title">{dog.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{dog.breed}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{dog.gender}</h6>
          <p className="card-text">{dog.description}</p>
          <a href="#" className="card-link">
            Apply for {dog.name}
          </a>
          <a href="/dogs" className="card-link">
            Back to All Dogs
          </a>
        </div>
      </div>
    );
  }
}

export default CardDetails;
