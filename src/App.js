import React from 'react'
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Aboute } from './Components/Aboute';
import Alert from './Components/Alert';
import { Navbar } from './Components/Navbar';
import { TextForm } from './Components/TextForm';



function App(props) {

  const [mode, setMode] = useState('light');
  let [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {

      setAlert(null)

    }, 1500
    )



  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white";

      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = "#042743";

      showAlert("Light Mode has been enabled", "primary")
    }

  }




  return (
    <>
      <Alert alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar title="TextApp " mode={mode} toggleMode={toggleMode}></Navbar>} />
          <Route path="textform" element={<TextForm showAlert={showAlert} h2="Enter Text Here" mode={mode} ></TextForm>} />
          <Route path="aboute" element={<Aboute />} />
        </Routes>
      </BrowserRouter>






    </>

  );
}

export default App;
