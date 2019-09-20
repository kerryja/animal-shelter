import React, { Component } from "react";
import "./Adopt.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import AdoptionApplication from "./AdoptionApplication";

class Adopt extends Component {
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
          <h1>Adoption Process</h1>
          <hr></hr>
          <p id="first-paragraph">
            Our goal is to place the right dog in the right home. Please read
            this Adoption Process Page in full before submitting an application.
          </p>
          <h4>Adoption Guidelines</h4>
          <p>
            The first step in the process is to read our guidelines for adopting
            a dog from Adopted. See guidelines{" "}
            <Link to={"/adoption-guidelines"}>here</Link>!
          </p>
          <h4>Application</h4>
          <p>
            Fill out the Adoption Application{" "}
            <Link to={AdoptionApplication} onClick={this.showModal}>
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
          <h4>Confirmation</h4>
          <p>
            Once you have filled out the application, please give us a day or so
            to get back to you. We are not a drop-in shelter where you walk
            through kennels. We have shelter visiting hours, usually on the
            weekends, but occasionally on weekday afternoons. We have a limited
            amount of private appointments during the week, usually in the
            daytime. Please understand that we are not a "first come, first
            serve" shelter, but that we try to make the right match for both the
            dog and the adopter. If you work full time, for example, we may
            steer you towards an adult dog who can stay at home during the day
            or who can get along just along just fine with a dog walker.{" "}
          </p>
          <h4>Meet and Greet</h4>
          <p>
            When you come to our shelter visiting hours, we can look up your
            application and bring you out to meet the dogs you are interested
            in. We have several play yards where we bring the dogs outside
            off-leash to meet prospective adopters. We also have a
            Meet-and-Greet room with comfy sofas in the house where you can meet
            a dog in a home setting.{" "}
            <em>
              As some of our dogs are in foster homes, receiving an application
              ahead of time will allow us to notify the foster provider to bring
              the dog to the shelter for you to meet.
            </em>{" "}
            If you just drop in, there's a good chance the dog you want to meet
            might not be here, so it's best to let us know of your planned
            visit.{" "}
          </p>
          <p>
            <em>
              We ask that all decision-makers be present when you come to meet
              the dogs.
            </em>{" "}
            If you have a resident dog that you'd like to bring to meet one of
            our rescued dogs, we just ask that you let us know ahead of time. As
            weekends tend to be busy, this might not always be possible during
            our peak hours, so please talk to us first and we can advise the
            best time to bring your dog out for a meeting. If you live close by,
            then it might be best to meet the dog first, make sure that both you
            and we feel it's a match, and then we would have you go get your dog
            to be the final decision-maker.{" "}
          </p>
          <h4>Deposit</h4>
          <p id="last-paragraph">
            Once you have met the dog and both parties agree it is a good match,
            then you may leave a $50 deposit to hold the dog for 24 hours while
            we check your references and/or conduct a home visit. The deposit is
            nonrefundable. If you change your mind, it is used as a donation
            towards the shelter. If you continue with the adoption, the fee is
            deducted from your total adoption fee.
          </p>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <AdoptionApplication />
        </Modal>
      </div>
    );
  }
}
export default Adopt;
