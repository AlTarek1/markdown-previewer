import "./App.css";
import React from "react";
import { marked } from "marked";
import useLocalStorage from "./customhooks/useLocalStoarge";
import Doc from "./components/Doc";

const App = () => {
  const [code, setCode] = useLocalStorage("code", "## Hello");
  const [compiled, setCompiled] = useLocalStorage(
    "compiled",
    '<h2 id="hello">Hello</h2>'
  );
  const [hide, setHide] = useLocalStorage("hide", 0);
  const handleHide = (number) => {
    setHide(number);
  };
  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={() => handleHide(0)} className="btn">
            MarkDown
          </button>
          <button onClick={() => handleHide(1)}>Preview</button>
          <button onClick={() => handleHide(2)}>Docs</button>
        </div>
        {hide === 0 ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : hide === 1 ? (
          <div>
            <textarea readOnly value={compiled} />
          </div>
        ) : (
          <Doc />
        )}
      </div>
    </>
  );
};

export default App;
