import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import VolunteerApplication from "./VolunteerApplication";
import "./Adopt.css";

class Volunteer extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <div className="container text-sm-center text-md-left">
          <h1 className="heading">Volunteer for Adopted</h1>
          <hr></hr>
          <p id="first-paragraph">
            Come join us in the world of animal rescue and we will show you one
            of the most satisfying ways to help both animals and people. We are
            looking for volunteers from all walks of life to help us with the
            many little tasks that it takes to run a successful humane society.
          </p>
          <h4>We need volunteers to help with the following:</h4>
          <ol>
            <li>Transportation</li>
            <li>Fund raising</li>
            <li>Special events</li>
            <li>Newsletter</li>
            <li>Website</li>
          </ol>
          <p>
            Once we receive your application, it is forwarded to the Volunteer
            Coordinator, and you will receive an email invitation to an
            information meeting within a few weeks. The Information Meeting
            meeting is mandatory and you must attend one before you can begin
            volunteeringInformation meetings are by invitation only as our
            training space has limited seating. Thanks for your willingness to
            volunteer and for your patience. Please send any questions to{" "}
            <a href="mailto:volunteering@adopted.com">
              volunteering@adopted.com
            </a>
            .
          </p>
          <h4 className="volunteer-heading">Adult Volunteers (Ages 18+)</h4>
          <p>
            If you are interested in volunteering, please fill out an{" "}
            <Link to={VolunteerApplication} onClick={this.showModal}>
              application
            </Link>
            . The next step is to come to a volunteer information meeting, and
            you'll be ready to start. Thank you for your interest in helping
            Adopted.
          </p>
          <h4 className="volunteer-heading">Teen Volunteers (Age 14-17)</h4>
          <p id="last-paragraph">
            All information about our Teen Volunteer Program can be found here
          </p>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <VolunteerApplication />
        </Modal>
      </div>
    );
  }
}

export default Volunteer;
