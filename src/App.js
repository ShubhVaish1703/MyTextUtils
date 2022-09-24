import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("primary");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnColor("dark");
      document.body.style.background = "grey";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Grey Mode";
      // setInterval(() => {
      // document.title="TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      // document.title="Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      setBtnColor("primary");
      document.body.style.background = "white";
      showAlert("light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const toggleRedMode = () => {
    if (mode === "light") {
      setMode("red");
      setBtnColor("danger");
      document.body.style.background = "#fc7878";
      document.getElementById("navBar").style.background = "red";
      document.title = "TextUtils - Red Mode";
      showAlert("Red Mode has been enabled", "success");
    } else {
      setMode("light");
      setBtnColor("primary");
      document.body.style.background = "white";
      showAlert("light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const toggleGreenMode = () => {
    if (mode === "light") {
      setMode("green");
      setBtnColor("success");
      document.body.style.background = "#92c174";
      document.getElementById("navBar").style.background = "green";
      document.title = "TextUtils - Green Mode";
      showAlert("Green Mode has been enabled", "success");
    } else {
      setMode("light");
      setBtnColor("primary");
      document.body.style.background = "white";
      showAlert("light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleRedMode={toggleRedMode}
        toggleGreenMode={toggleGreenMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
              btnColor={btnColor}
            />      
      </div>
    </>
  );
}

export default App;
