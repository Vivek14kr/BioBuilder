import React from 'react'

import "./Form.css"

function Form({
  handlelocationChange,

  handleSchoolChange,
  handleOccupationCheck,
  handleReligious,
  handleReason,

  handleChange,
  handlePic,
}) {
  return (
    <div id="form">
      <div id="formhead">
        <h2 id="options">Options</h2>
      </div>

      <form id="formstyle">
        <div className="bgcolor">
          <label className="labeltext">
            Name
            <input
              onChange={(e) => {
                handleChange(e.target);
              }}
              type="text"
              name="name"
              className="inputtext"
            />
          </label>
          <br />
          <div id="gender">
            <label className="labeltext">
              Gender
              <select
                className="inputtext"
                name="gender"
                id=""
                onClick={(e) => {
                  handleChange(e.target);
                }}
              >
                <option value="">Select Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </label>
          </div>
        </div>

        <br />
        <div className="bgcolor">
          <label className="labeltext">
            <input
              onChange={handlelocationChange}
              type="checkbox"
              name=""
              id=""
              className="checkboxes"
            />
            Location
            <input
              onChange={(e) => {
                handleChange(e.target);
              }}
              type="text"
              name="location"
              className="inputtext"
            />
          </label>
        </div>

        <br />
        <div className="bgcolor">
          <label className="labeltext">
            <input
              onChange={handleSchoolChange}
              type="checkbox"
              name=""
              id=""
              className="checkboxes"
            />
            School
            <input
              type="text"
              name="school"
              onChange={(e) => {
                handleChange(e.target);
              }}
              className="inputtext"
            />
          </label>
          <br />
          <div id="newmajor">
            <label id="major" htmlFor="" className="labeltext">
              Major
              <input
                type="text"
                onChange={(e) => {
                  handleChange(e.target);
                }}
                name="major"
                className="inputtext"
              />
            </label>
          </div>
        </div>
        <br />
        <div className="bgcolor">
          <label className="labeltext">
            <input
              onClick={handleOccupationCheck}
              type="checkbox"
              name=""
              id=""
              className="checkboxes"
            />
            Occupation
            <input
              type="text"
              name="occupation"
              onChange={(e) => {
                handleChange(e.target);
              }}
              className="inputtext"
            />
          </label>
        </div>

        <br />
        <div className="bgcolor">
          <label className="labeltext">
            <input
              onClick={handleReligious}
              className="checkboxes"
              type="checkbox"
              name=""
              id=""
            />
            Religious Background
            <br />
            <textarea
              className="bigbox"
              type="text"
              name="religious"
              onChange={(e) => {
                handleChange(e.target);
              }}
            />
          </label>
        </div>
        <br />
        <div className="bgcolor">
          <label className="labeltext">
            <input
              className="checkboxes"
              onClick={handleReason}
              type="checkbox"
              name=""
              id=""
            />
            Reason for meeting with missionaries
            <br />
            <textarea
              className="bigbox"
              type="text"
              name="reason"
              onChange={(e) => {
                handleChange(e.target);
              }}
            />
          </label>
        </div>
        <br />
        <div className="bgcolor">
          <input
          
            onClick={handlePic}
            type="checkbox"
            name=""
            id="profcheckbox"
            className="checkboxes"
          />

          <label className="labeltext" htmlFor="">
            Profile Picture
          </label>
          <input
            type="file"
            name="pic"
            id=""
            
            onChange={(e) => {
              let k = URL.createObjectURL(e.target.files[0]);
              handleChange({ name: "pic", value: k });
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Form