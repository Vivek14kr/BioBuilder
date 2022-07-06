import React from "react";


import "./Result.css";
function Result({
  forms,
  locationchecked,

  schoolChecked,
  occupationCheck,
  religiousbg,
  reasonn,
  picSelect
}) {

  const {
    name,
    gender,
    location,
    school,
    major,
    occupation,
    religious,
    reason,
    pic,
  } = forms;


  return (
    <div id="res">
      <div id="formheadd">
        <h2>Result</h2>
      </div>

      <div id="box">
        <p>
          {locationchecked ? (
            <>
              {" "}
              {name} is from {location}.
            </>
          ) : (
            <>You are teaching {name} . </>
          )}
          {schoolChecked ? (
            <>
              {gender === "male" ? <>He</> : <>She</>} is studying {major} at the{" "}
              {school}.{" "}
            </>
          ) : (
            ""
          )}{" "}
          {occupationCheck ? (
            <>
              {gender === "male" ? <>He</> : <>She</>} currently works as a{" "}
              {occupation}.
            </>
          ) : (
            ""
          )}{" "}
          {religiousbg ? (
            <>
              {gender === "male" ? <>He</> : <>She</>} was raised {religious}.
            </>
          ) : (
            ""
          )}
          {reasonn ? (
            <>
              {gender === "male" ? <>He</> : <>She</>} {reason}.
            </>
          ) : (
            ""
          )}
        </p>
      </div>
      {picSelect ? <img id="imgsrc" src={pic} alt="" /> : ""}
    </div>
  );
}

export default Result;
