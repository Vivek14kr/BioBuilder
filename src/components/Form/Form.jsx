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
        <h2>Options</h2>
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
            />
          </label>
          <label>
            Gender
            <select
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

        <br />
        <div className="bgcolor">
          <label>
            <input
              onChange={handlelocationChange}
              type="checkbox"
              name=""
              id=""
            />
            Location
            <input
              onChange={(e) => {
                handleChange(e.target);
              }}
              type="text"
              name="location"
            />
          </label>
        </div>

        <br />
        <div className="bgcolor">
          <label>
            <input
              onChange={handleSchoolChange}
              type="checkbox"
              name=""
              id=""
            />
            School
            <input
              onChange={(e) => {
                handleChange(e.target);
              }}
              type="text"
              name="school"
            />
          </label>
          <br />
          <label htmlFor="">
            Major
            <input
              type="text"
              onChange={(e) => {
                handleChange(e.target);
              }}
              name="major"
            />
          </label>
        </div>
        <br />
        <div className="bgcolor">
          <label>
            <input
              onClick={handleOccupationCheck}
              type="checkbox"
              name=""
              id=""
            />
            Occupation
            <input
              type="text"
              name="occupation"
              onChange={(e) => {
                handleChange(e.target);
              }}
            />
          </label>
        </div>

        <br />
        <div className="bgcolor">
          <label>
            <input onClick={handleReligious} type="checkbox" name="" id="" />
            Religious Background
            <br />
            <input
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
          <label>
            <input onClick={handleReason} type="checkbox" name="" id="" />
            Reason for meeting with missionaries
            <br />
            <input
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
          <input onClick={handlePic} type="checkbox" name="" id="" />

          <label htmlFor="">Profile Picture</label>
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