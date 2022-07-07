import React, { useState } from 'react'
import Form from '../Form/Form'
import Result from '../Result/Result'
import "./Home.css"
function Home() {



  const [forms, setForms] = useState({}) 
  const handleChange = ({name, value})=>{

    
      setForms({
        ...forms,
        [name]:value
      })
  }
    const [locationchecked, setlocationChecked] = useState(false);
     const handlelocationChange = () => {
       setlocationChecked(!locationchecked);
     }; 
    const [schoolChecked, setschoolChecked] = useState(false)
     const handleSchoolChange = ()=>{
      setschoolChecked(!schoolChecked)
     }
     const [occupationCheck, setOccupationCheck] = useState(false)
     const handleOccupationCheck = ()=>{
      setOccupationCheck(!occupationCheck)
     }
     const [religiousbg, setReligiousbg] = useState(false);
     const handleReligious = ()=>{
      setReligiousbg(!religiousbg)
     }
     const [reasonn, setReason] = useState(false)
     const handleReason = ()=>{
      setReason(!reasonn)
     }

     const [picSelect, setPic] = useState(false)
     const handlePic = ()=>{
      setPic(!picSelect)
     }
  return (
    <div id="homehead">
      <div id="header">
        <h1>Bio Generator</h1>
      </div>

      <div id="sty">
        <Form
          handleChange={handleChange}
          handlelocationChange={handlelocationChange}
          handleSchoolChange={handleSchoolChange}
          handleOccupationCheck={handleOccupationCheck}
          handleReligious={handleReligious}
          handleReason={handleReason}
          handlePic={handlePic}
        />

        <Result
          forms={forms}
          locationchecked={locationchecked}
          schoolChecked={schoolChecked}
          occupationCheck={occupationCheck}
          religiousbg={religiousbg}
          reasonn={reasonn}
          picSelect= {picSelect}
        />
      </div>
    </div>
  );
}

export default Home