import React from "react";
import PatientNavbar from "../components/patientNavbar";
import "./NewPateint.css";
const newPatient = () => {
  return (
    <>
      <section id="registration-page">
        <form class="signup-form">
          {/* <!-- FORM HEADER --> */}
          <div class="form-header">
            <h1>Creating New Patient</h1>
          </div>
          {/* <!-- FORM BODY --> */}
          <div class="form-body">
            {/* <!-- First name & Last name --> */}
            <div class="row">
              <div class="input-group">
                <label>Name </label>
                <input type="text" placholder="Enter your first name" />
              </div>
              {/* <div class="input-group">
                <label>Last name</label>
                <input type="text" placholder="Enter your last name" />
              </div> */}
            </div>
            {/* <!-- Email --> */}
            <div class="row">
              <div class="input-group">
                <label>Email </label>
                <input type="email" placholder="Enter your email address" />
              </div>
            </div>
            <div class="row">
              <div class="input-group">
                <label>Contact No. </label>
                <input type="text" placholder="Enter your No." />
              </div>
              <div class="input-group">
                <label>Alternate Contact No.</label>
                <input type="text" placholder="Enter your no." />
              </div>
            </div>
            {/* <!-- Gender & Hobbies --> */}
            <div class="row">
              <div class="input-group">
                <label>Gender </label>

                <div class="radio-group">
                  <div>
                    <label for="male">
                      <input type="radio" name="gender" id="male" />
                      Male
                    </label>
                  </div>

                  <div>
                    <label for="female">
                      <input type="radio" name="gender" id="female" />
                      Female
                    </label>
                  </div>

                  <div>
                    <label for="other">
                      <input type="radio" name="gender" id="other" /> Other
                    </label>
                  </div>
                </div>
              </div>
              {/* <div class="input-group">
                <label>Hobbies</label>
                <div class="checkbox-group">
                  <div>
                    <label for="music">
                      <input type="checkbox" name="hobbies" id="music" />
                      Music
                    </label>
                  </div>

                  <div>
                    <label for="cooking">
                      <input type="checkbox" name="cooking" id="cooking" />
                      Cook
                    </label>
                  </div>

                  <div>
                    <label for="travel">
                      <input type="checkbox" name="travel" id="travel" />
                      Travel
                    </label>
                  </div>

                  <div>
                    <label for="movies">
                      <input type="checkbox" name="movies" id="movies" />
                      Movie
                    </label>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <!-- Source of Income & Income --> */}
            {/* <div class="row">
              <div class="input-group">
                <label for="">Source of Income</label>
                <select name="" id="">
                  <option>Employed</option>
                  <option>Self-Employed</option>
                  <option>Unemployed</option>
                </select>
              </div>
              <div class="input-group">
                <label>Income</label>
                <div class="range-group">
                  <input
                    type="range"
                    onChange="changeSliderValue(this.value)"
                    min="20"
                    max="200"
                    step="5"
                    value="20"
                  />
                  <label id="rangeSliderLabel">20 K</label>
                </div>
              </div>
            </div> */}
            {/* <!-- Upload Profile Picure & Age --> */}
            <div class="row">
              <div class="input-group">
                <label>Upload Profile Picture</label>
                <input type="file" />
              </div>
              <div class="input-group">
                <label>Age</label>
                <input type="number" />
              </div>
            </div>

            {/* <!--  Bio   --> */}
            <div class="row">
              <div class="input-group">
                <label for="">Medical History</label>
                {/* <textarea placeholder="Tell us more about ur past medical history">
                  {" "}
                </textarea> */}
                <textarea placeholder="Tell us more about ur past medical history"></textarea>
              </div>
            </div>
          </div>
          {/* <!--  FORM FOOTER   --> */}
          <div class="form-footer">
            <button class="btn">
              <a href="/patientdashboard">Create</a>
            </button>
          </div>
        </form>
      </section>
      ;
    </>
  );
};

export default newPatient;
