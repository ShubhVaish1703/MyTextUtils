import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowerClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="6"
            style={{
              backgroundColor: props.mode === "dark" ? "#c7d9e5" : "white",
              color:
                props.mode === "light" ||
                props.mode === "red" ||
                props.mode === "green"
                  ? "black"
                  : "white",
            }}
          ></textarea>
        </div>
        <button
          id="btn1"
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} mx-2 my-2`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          id="btn2"
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} mx-2 my-2`}
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>
        <button
          id="btn3"
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} mx-2 my-2`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          id="btn4"
          disabled={text.length===0}
          className={`btn btn-${props.btnColor} mx-2 my-2`}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>Words : {text.split(/\s+/).filter((word) => word !== "").length}</p>
        <p>Characters : {text.trim(' ').length}</p>
        <p>
          Approximate time(minutes) to read :{" "}
          {0.008 * text.split(/\s+/).filter((word) => word !== "").length}
        </p>

        <h2>Preview</h2>
        <p>{text.length> 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
