import './App.css';
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
      if (value === "C") {
          setInput("");
          setResult("");
      } else if (value === "=") {
          try {
              setResult(eval(input).toString());
          } catch {
              setResult("Error");
          }
      } else {
          setInput(input + value);
      }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input
          className="input"
          value={input}
          readOnly
        />
        <div className="result">{result}</div>
        <div className="grid">
          {[
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            ["0", "=", "+", "C"]
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((btn) => (
                <button
                  key={btn}
                  className="button"
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
