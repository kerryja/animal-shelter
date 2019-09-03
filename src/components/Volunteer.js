import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import VolunteerApplication from "./VolunteerApplication";

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
        <div className="container text-left">
          <h1>Volunteer for Save A Dog</h1>
          <hr></hr>
          <p>
            Our goal is to place the right dog in the right home. Please read
            this Adoption Process Page in full before submitting an application.
          </p>
          <h3>Adoption Guidelines</h3>
          <p>
            The first step in the process is to read our guidelines for adopting
            a dog from Save A Dog. See guidelines{" "}
            <Link to={"/adoption-guidelines"}>here</Link>. It is also important
            to us that you read our{" "}
            <a href="http://www.saveadog.org/holistic.asp" target="blank">
              Holistic Dog
            </a>{" "}
            page as we want our rescued dogs to have a healthy lifestyle, free
            from chemicals and pesticides. Following a holistic protocol will
            also save you from costly vet bills in the future.
          </p>
          <h3>Application</h3>
          <p>
            Fill out the Adoption Application form{" "}
            <Link to="/adoption-application" onClick={this.showModal}>
              here
            </Link>
            .{" "}
            <em>
              We require an application first before allowing you to visit the
              dogs and the application process is at no charge to you.
            </em>{" "}
            Knowing a little bit about you before you come down to meet the dogs
            saves both you and our adoption counselors considerable time.
          </p>
          <h3>Confirmation</h3>
          <Link to="/volunteer-application" onClick={this.showModal}>
            here
          </Link>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <VolunteerApplication />
          </Modal>
        </div>
      </div>
    );
  }
}

export default Volunteer;
