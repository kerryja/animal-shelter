import React, { Component } from "react";
import "./Form.css";

class VolunteerApplication extends Component {
  render() {
    return (
      <section>
        <div className="form-style-5">
          <form>
            <h1 className="heading">Volunteer Application</h1>
            <fieldset>
              <legend>
                <span class="number">1</span> Personal Info
              </legend>
              <input type="text" name="text" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="text" name="tel" placeholder="Phone" />
              <input type="text" name="text" placeholder="Address" />
              <input type="text" name="text" placeholder="Address 2" />
              <input type="text" name="text" placeholder="City" />
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
              <label for="date">
                Please provide your date of birth.
                <span> All volunteers must be 18 or older</span>
              </label>
              <input type="date" name="field4" placeholder="Date of Birth" />
              <input type="text" name="field4" placeholder="Occupation" />
              <p>
                <span>
                  *Please note: You must attend a volunteer orientation before
                  you can begin volunteering. Once we receive your application,
                  it is forwarded to the volunteer coordinator and you will
                  receive an email invitation to an orientation within a few
                  weeks. Orientatations are by invitation only as our training
                  space has limited seating. Thanks for your willingness to
                  volunteer and for your patience.
                </span>
              </p>
            </fieldset>

            <legend>
              <span class="number">2</span> Areas of Interest
            </legend>
            <fieldset className="checkboxes">
              <div className="checkbox-item">
                <p>What areas are you interested in? Check all that apply</p>

                <label for="transportation">
                  Transportation
                  <input
                    type="checkbox"
                    id="transportation"
                    name="transportation"
                  />
                </label>
              </div>
              <div className="checkbox-item">
                <label for="checkbox">
                  Home Checks
                  <input type="checkbox" id="home-checks" name="home checks" />
                </label>
              </div>
              <div className="checkbox-item">
                <label for="help-shelter">
                  Helping at the shelter
                  <input
                    type="checkbox"
                    id="help-shelter"
                    name="helping at shelter"
                  />
                </label>
              </div>
              <div className="checkbox-item">
                <label for="day-transports">
                  Day transports (this would require having one full day free to
                  pick up dogs that are in transport to us from the South
                  <input
                    type="checkbox"
                    id="day-transports"
                    name="day transports"
                  />
                </label>
              </div>
              <div className="checkbox-item">
                <label for="public-relations">
                  Public relations
                  <input
                    type="checkbox"
                    id="public-relations"
                    name="public-relations"
                  />
                </label>
              </div>
              <div className="checkbox-item">
                <label for="fundraising">
                  Fundraising (capital campaign and auction)
                  <input type="checkbox" id="fundraising" name="fundraising" />
                </label>
              </div>
              <div className="checkbox-item">
                <label for="not-sure">
                  Not sure yet but would like to speak to an Adopted volunteer
                  <input type="checkbox" id="not-sure" name="not sure" />
                </label>
              </div>
            </fieldset>
            <fieldset>
              <input
                type="text"
                name="field4"
                placeholder="What days of the week are you available to volunteer?"
              />
              <input
                type="number"
                name="field4"
                placeholder="Approximately how many hours per week?"
              />
            </fieldset>
            <fieldset>
              <legend>
                <span class="number">3</span> Experience
              </legend>
              <p>
                List below any cats, dogs, etc. who currently live in your
                household. Please include their breed(s), age(s), sex,
                spayed/neutered and whether you do/did any obedience work with
                them.
              </p>
              <textarea name="field3" placeholder="" required />
              <p>
                Please tell us about any previous experience you have with
                dogs/cats.
              </p>
              <textarea name="field3" placeholder="" required />
              <p>
                Are you currently doing any volunteer work or have you
                volunteered in the past? Please describe.
              </p>
              <textarea name="field3" placeholder="" required />
            </fieldset>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default VolunteerApplication;
