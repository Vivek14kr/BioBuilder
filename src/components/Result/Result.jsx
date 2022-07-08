import React, { useEffect, useState } from "react";
import "./Result.css";
const axios = require("axios")



function Result({
  forms,
  locationchecked,

  schoolChecked,
  occupationCheck,
  religiousbg,
  reasonn,
  picSelect
}) {
   const [options, setOptions] = useState([]);
   const [to, setTo] = useState("en");
   const [from, setFrom] = useState("en");
   const [input, setInput] = useState("");
   const [output, setOutput] = useState("");

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
    useEffect(() => {
      axios
        .get("https://libretranslate.de/languages", {
          headers: { accept: "application/json" },
        })
        .then((res) => {
          console.log(res.data);
          setOptions(res.data);
        });
    }, []);

  const translate = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
getContent()
    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

    axios
      .post("https://libretranslate.de/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.translatedText);
      });
  };

 

  function getContent() {
   setInput(document.getElementById("newton").innerHTML);
  }
  return (
    <div id="res">
      {picSelect ? <img id="imgsrc" src={pic} alt="" /> : ""}
      <div id="formheadd">
        <h2 id="result">Result</h2>
      </div>

      <div id="box">
        <p id="newton">

          
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
              {gender === "male" ? <>He</> : <>She</>} is studying {major} at
              the {school}.{" "}
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

      <div>
        From ({from}) :
        <select onChange={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        To ({to}) :
        <select onChange={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea id="textareaa" value={output}></textarea>
       
      </div>
      <div>
        <p>Press 2 times</p>
        <button onClick={translate}>Translate</button>
        
      </div>
    </div>
  );
}

export default Result;
