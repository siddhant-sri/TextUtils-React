import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import NavBar from "./Components/Navbar";
import TextBox from "./Components/TextForm";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode is enabled", "success")
      document.title = "Textutils - Dark mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is enabled", "success")
      document.title = "Textutils - Light mode"
    }
  }
  const greenToggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#56a157"
      showAlert("Green Mode is enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is enabled", "success")
    }

  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  return (
    <>
      {/* <Router> */}
        <NavBar title="Textutils" mode={mode} greenToggleMode={greenToggleMode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element ={<About/>} /> */}
            {/* <Route exact path="/" element={ */}
            <TextBox showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            {/* } /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
