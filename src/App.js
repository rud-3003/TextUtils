import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//Whether Dark Mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#032250";
      showAlert("Dark Mode has been enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>  
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes> 
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;