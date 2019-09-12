import React, { Component } from "react";
import "./Dogs.css";
import "../config/config";
var moment = require("moment");
moment().format();

class Dogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: []
    };
  }

  async componentDidMount() {
    let response = await fetch(global.gConfig.baseAPIURL + "/dogs");
    let dogs = await response.json();
    this.setState({ dogs });
  }

  render() {
    const dogs = this.state.dogs;

    moment.updateLocale("en", {
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "1 day",
        dd: "%d days",
        M: "1 month",
        MM: "%d months",
        y: "1 year",
        yy: "%d years"
      }
    });

    return (
      <section>
        <h1>Available Dogs</h1>
        <div className="container-fluid">
          <div className="row">
            {dogs.map(dog => (
              <div className="col-sm-12 col-md-4 col-lg-3">
                <div className="card">
                  <a className="dog-pic" href={"/dog/" + dog.id}>
                    <img
                      className="card-img-top"
                      src={global.gConfig.baseImgUrl + dog.picture}
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <a
                      href={"/dog/" + dog.id}
                      className="card-link"
                      className="card-title"
                    >
                      {dog.name}
                    </a>
                    <p className="card-text">{dog.gender}</p>
                    <p className="card-text">{dog.breed}</p>
                    <p className="card-text">{moment(dog.age).fromNow(true)}</p>
                    <p className="card-text">
                      <small className="modified text-muted">
                        Last Modified:{" "}
                        {moment(dog.updatedAt).format("MM-DD-YYYY h:mm a")}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Dogs;
