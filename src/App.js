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

const removeBodyClasses = ()=>{
  document.body.classList.remove("bg-light");
  document.body.classList.remove("bg-success");
  document.body.classList.remove("bg-warning");
  document.body.classList.remove("bg-danger");
  document.body.classList.remove("bg-primary");
}


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
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
        <NavBar title="Textutils" mode={mode} toggleMode={toggleMode}/>
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
