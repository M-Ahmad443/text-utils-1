import React, { useState } from 'react'

export const TextForm = (props) => {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText)

    props.showAlert("converted to uppercase", "primary")

  }

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)

    props.showAlert("converted to lower case", "success")

  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const clearText = () => {
    let newText = '';
    setText(newText)

    props.showAlert("text cleared  ", "danger");

  }

  const handleCopy = () => {
    // let text = document.getElementById("textBox");
    // text.select();
    navigator.clipboard.writeText(text);
  }

  const handleExtraspaces = () => {

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("extra spaces has been removed", "success");

  }

  const [text, setText] = useState('');


  return (
    <>
      <div className='container my-2' >

        <div className="mb-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
          <label htmlFor="textbox" className="form-label"  >{props.h2}</label>
          <textarea className="form-control" value={text} id="textBox" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? 'black' : 'white' }} rows="3"></textarea>
          <button disabled={text.length === 0} className='btn-btn-primary my-2   ' onClick={upperCase}>Upper Case</button>
          <button disabled={text.length === 0} className='btn-btn-primary my-2  mx-2 ' onClick={lowerCase}>Lower Case</button>
          <button disabled={text.length === 0} className='btn-btn-primary my-2  ' onClick={clearText}>Clear Text</button>
          <button disabled={text.length === 0} className='btn-btn-primary my-2  mx-2 ' onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length === 0} className='btn-btn-primary my-2   ' onClick={handleExtraspaces}>Remove Extraspaces</button>

        </div>
      </div>
      <div className='container my-2' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>

        <h1>Your Text Summry</h1>
        <p>  {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}   Words       {text.length}  Characters</p>
        <p>  {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}  Time to read </p>



      </div>
    </>
  )
}
