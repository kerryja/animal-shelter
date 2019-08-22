import React, { Component } from "react";
import "./Adopt.css";

class AdoptionGuidelines extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div clasName="col" />
          <h1>Adoption Guidelines</h1>
          <ul>
            <li>
              <h2>Adoption Fees</h2>
              <li>
                <p>
                  <span>Senior Dogs (9 years and older):</span> $300
                </p>
              </li>
              <li>
                <p>
                  <span>Adult Dogs (older than 1 year):</span> $425
                </p>
              </li>
              <li>
                <p>
                  <span>Adolescent Dogs (7 - 12 months):</span> $450
                </p>
              </li>
              <li />
              <p>
                <span>Puppies (6 months and under):</span> $550
                <p>
                  <span>
                    *$50 reimbursement after you send us the spay/neuter
                    certificate
                  </span>
                </p>
              </p>
            </li>
            <li>
              <h4>2.</h4>
              <p>
                Fill out the Adoption Application form *here*.
                <span>
                  We require an application first before allowing you to visit
                  the dogs and the application process is at no charge to you.
                </span>
                Knowing a little bit about you before you come down to meet the
                dogs saves both you and our adoption counselors considerable
                time.
              </p>
            </li>
            <li>
              <h4>3.</h4>
              <p>
                Once you have filled out the application, please give us a day
                or so to get back to you.
                <span>
                  We are not a drop-in shelter where you walk through kennels.
                  We have shelter visiting hours, usually on the weekends, but
                  occasionally on weekday afternoons.
                </span>
                We have a limited amount of private appointments during the
                week, usually in the daytime.
              </p>
              <p>
                Please understand that we are not a "first come, first serve"
                shelter, but that we try to make the right match for both the
                dog and the adopter. For example, if you work full time, we may
                steer you towards an adult dog who can stay at home during the
                day or who can get along just along just fine with a dog walker.
              </p>
            </li>
            <li>
              <h4>4.</h4>
              <p>
                When you come to our shelter visiting hours, we can look up your
                application and bring you out to meet the dogs you are
                interested in. We have several play yards where we bring the
                dogs outside off-leash to meet prospective adopters. As well, we
                have a Meet-and-Greet room with comfy sofas where you can meet a
                dog in a home setting.
              </p>
              <p>
                <span>
                  We ask that all decision-makers be present when you come to
                  meet the dogs.
                </span>
                If you have a resident dog that you'd like to bring to meet one
                of our rescued dogs, we just ask that you let us know ahead of
                time. As weekends tend to be busy, this might not always be
                possible during our peak hours, so please talk to us first and
                we can advise the best time to bring your dog out for a meeting.
                If you live close by, then it might be best to meet the dog
                first, make sure that both you and we feel it's a match, and
                then we would have you go get your dog to be the final
                decision-maker.
              </p>
            </li>
            <li>
              <h4>5.</h4>
              <p>
                Once you have met the dog and both parties agree it is a good
                match, then you may leave a $50 deposit to hold the dog for 24
                hours while we check your references and/or conduct a home
                visit.
                <span>
                  The deposit is nonrefundable. If you change your mind, it is
                  used as a donation towards the shelter. If you continue with
                  the adoption, the fee is deducted from your total adoption
                  fee.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdoptionGuidelines;
