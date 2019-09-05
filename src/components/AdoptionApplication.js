import React, { Component } from "react";
import "./Form.css";

class AdoptionApplication extends Component {
  render() {
    return (
      <section>
        <div class="form-style-5">
          <form method="POST" action={global.gConfig.baseAPIURL + "/adopt"}>
            <h1>Adoption Application</h1>
            <p>
              After submitting the form below, please allow 48 hours for one of
              our staff members to contact you. If you have any questions please
              either give us a call or send us an email.
            </p>
            <fieldset>
              <legend>
                <span className="number">1</span> Personal Info
              </legend>
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                // pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                maxlength="12"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
              />
              <input type="text" name="address2" placeholder="Address 2" />
              <input type="text" name="city" placeholder="City" required />
              <select name="state" required>
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
                name="occupation"
                placeholder="Occupation"
                required
              />
              <textarea
                name="why_adopt"
                placeholder="Why do you want to bring a new dog/puppy into your home?"
                required
              />
              <input
                type="text"
                name="dog_name"
                placeholder="Name of dog you are interested in?"
                maxLength="20"
                required
              />
            </fieldset>
            <fieldset>
              <legend>
                <span className="number">2</span> References
              </legend>
              <p>
                Please provide two personal references. Include their name,
                phone number and how this person knows you and your ability to
                provide a good home for a dog
              </p>
              <textarea name="reference1" placeholder="Reference #1" required />
              <textarea name="reference2" placeholder="Reference #2" required />
            </fieldset>
            <p>
              Please provide the contact information of a veterinarian you have
              used before, and plan to use with your new dog
            </p>
            <p>
              <span>Vet references are checked.</span>
            </p>

            <input
              type="text"
              name="vet_name"
              placeholder="Vet Name"
              required
            />
            <input
              type="tel"
              name="vet_phone"
              placeholder="Vet Phone"
              // pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              maxlength="12"
              required
            />

            <fieldset>
              <legend>
                <span className="number">3</span> Household Info
              </legend>
              <p>
                Please list place of employment for yourself and your
                spouse/partner, if applicable. Include the location of each
                employer.
              </p>
              <input
                type="text"
                name="employer"
                placeholder="My Employer & Location"
                required
              />
              <input
                type="text"
                name="spouse_employer"
                placeholder="Spouse's Employer & Location"
              />

              <div className="radio-container" name="residence_type" required>
                Residence:
                <input
                  name="residence_own"
                  type="radio"
                  value="own"
                  checked="checked"
                />
                Own
                <input name="residence-rent" type="radio" value="rent" />
                Rent
                <input name="residence-parents" type="radio" value="parents" />
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
                name="landlord_name"
                placeholder="Landlord Name"
              />
              <input
                type="tel"
                name="landlord_contact"
                placeholder="Landlord Contact"
                MaxLength="12"
                // pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              />

              <p>
                Total number of people living in your home, including yourself:
              </p>
              <select name="total_people_residence" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>

              <div className="radio-container" name="children" required>
                Do you currently have children living at home?
                <input
                  name="children"
                  type="radio"
                  value="yes"
                  checked="checked"
                />
                Yes
                <input name="children" type="radio" value="no" />
                No
              </div>

              <div className="radio-container" name="cats">
                Do you have one or more cats?
                <input name="cats" type="radio" value="yes" checked="checked" />
                Yes
                <input name="cats" type="radio" value="no" />
                No
              </div>
            </fieldset>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default AdoptionApplication;
