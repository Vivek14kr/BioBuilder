import React from 'react'
import Form from '../Form/Form'
import Result from '../Result/Result'
import "./Home.css"
function Home() {
  return (
    <div id="homehead">
      <div id="header">
        <h1>Bio Generator</h1>
      </div>

      <div id='sty'>
        <Form />

        <Result />
      </div>
    </div>
  );
}

export default Home