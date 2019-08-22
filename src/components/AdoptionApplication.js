import React, { Component } from "react";
import "./Form.css";
// import Modal from "../components/Modal";

class AdoptionApplication extends Component {
  // openModal = e => {
  //   e.preventDefault();

  //   this.modal.open();
  // };
  render() {
    return (
      // document.getElementById("button").addEventListener("click", () => {
      //   document.querySelector(".bg-modal").style.display = "flex";
      // })

      // document.getElementById("close").addEventListener("click", () => {
      //   document.querySelector("bg-modal").style.display = "none";
      // })
      <section>
        <h1>Adoption Application</h1>
        <p>
          After submitting the form below, please allow 48 hours for one of our
          staff members to contact you. If you have any questions please either
          give us a call or send us an email.
        </p>
        {/* <div className="bg-modal">
          <div className="modal-content">
            <div className="close">+</div> */}
        <div class="form-style-5">
          <form>
            <fieldset>
              <legend>
                <span class="number">1</span> Personal Info
              </legend>
              <input
                type="text"
                name="field1"
                placeholder="Full Name"
                required
              />
              <input type="email" name="field2" placeholder="Email" required />
              <input type="text" name="field3" placeholder="Phone" required />
              <input type="text" name="field4" placeholder="Address" required />
              <input type="text" name="field4" placeholder="Address 2" />
              <input type="text" name="field4" placeholder="City" required />
              <select>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <input
                type="text"
                name="field4"
                placeholder="Occupation"
                required
              />
              <textarea
                name="field3"
                placeholder="Why do you want to bring a new dog/puppy into your home?"
                required
              />
              <input
                type="text"
                name="field4"
                placeholder="Name of dog you are interested in?"
                required
              />
            </fieldset>
            <fieldset>
              <legend>
                <span class="number">2</span> References
              </legend>
              <p>
                Please provide two personal references. Include their name,
                phone number and how this person knows you and your ability to
                provide a good home for a dog
              </p>
              <textarea name="field3" placeholder="Reference #1" required />
              <textarea name="field3" placeholder="Reference #2" required />
            </fieldset>
            <p>
              Please provide the contact information of a veterinarian you have
              used before, and plan to use with your new dog
            </p>
            <p>
              <span>Vet references are checked.</span>
            </p>

            <input type="text" name="field4" placeholder="Vet Name" required />
            <input type="text" name="field4" placeholder="Vet Phone" required />

            <fieldset>
              <legend>
                <span class="number">3</span> Household Info
              </legend>
              <p>
                Please list place of employment for yourself and your
                spouse/partner, if applicable. Include the location of each
                employer.
              </p>
              <input
                type="text"
                name="field4"
                placeholder="My Employer & Location"
                required
              />
              <input
                type="text"
                name="field4"
                placeholder="Spouse's Employer & Location"
              />

              <div className="radio-container">
                Residence:
                <input name="own" type="radio" value="own" checked="checked" />
                Own
                <input name="rent" type="radio" value="rent" />
                Rent
                <input name="parents" type="radio" value="parents" />
                Live with Parents
              </div>
              <p>
                <span>
                  *Please note: If you own, proof of ownership will be required
                  for the adoption process.
                </span>
              </p>
              <p>
                <span>
                  If you rent, you must provide your landlord's contact
                  information below so that we may verify that you are allowed
                  to have a pet.
                </span>
              </p>
              <input
                type="text"
                name="field4"
                placeholder="Landlord Name & Contact"
              />

              <p>
                Total number of people living in your home, including yourself:
              </p>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>

              <div className="radio-container">
                Do you currently have children living at home?
                <input name="yes" type="radio" value="yes" checked="checked" />
                Yes
                <input name="no" type="radio" value="no" />
                No
              </div>

              <div className="radio-container">
                Do you have one or more cats?
                <input name="yes" type="radio" value="yes" checked="checked" />
                Yes
                <input name="no" type="radio" value="no" />
                No
              </div>
            </fieldset>
            <input type="submit" value="Submit" />
          </form>
        </div>
        {/* </div>
        </div> */}
        {/* // <Modal */}
        {/* //   ref={node => {
        //     this.modal = node;
        //   }}
        // /> */}
      </section>
    );
  }
}

export default AdoptionApplication;
