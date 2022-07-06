import React from 'react'
import "./Form.css"

function Form() {
  return (
    <div id='form'>
      <div id='formhead'> 
        <h2>Options</h2>
      </div>

      <form id="formstyle">
        <div className="bgcolor">
          <label className='labeltext'>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Gender
            <select name="" id="">
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </label>
        </div>

        <br />
        <div className="bgcolor">
          <label>
            <input type="checkbox" name="" id="" />
            Location
            <input type="text" name="name" />
          </label>
        </div>

        <br />
        <div className="bgcolor">
          <label>
            <input type="checkbox" name="" id="" />
            School
            <input type="text" name="name" />
          </label>
          <br />
          <label htmlFor="">
            Major
            <input type="text" />
          </label>
        </div>
        <br />
        <div className="bgcolor">
          <label>
            <input type="checkbox" name="" id="" />
            Occupation
            <input type="text" name="name" />
          </label>
        </div>

        <br />
        <div className="bgcolor">
          <label>
            <input type="checkbox" name="" id="" />
            Religious Background
            <br />
            <input type="text" name="name" />
          </label>
        </div>
        <br />
        <div className="bgcolor">
          <label>
            <input type="checkbox" name="" id="" />
            Reason for meeting with missionaries
            <br />
            <input type="text" name="name" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Form