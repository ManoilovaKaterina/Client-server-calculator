import './App.css';
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = async (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        // Відправляємо запит на сервер
        const response = await fetch("https://client-server-calculator-backend.onrender.com/calculate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ expression: input }),
        });

        // Перевіряємо відповідь від сервера
        const data = await response.json();
        if (data.result !== undefined) {
          setResult(data.result.toString());
        } else {
          setResult("Error");
        }
      } catch (error) {
        console.error("Error during calculation:", error);
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input className="input" value={input} readOnly />
        <div className="result">{result}</div>
        <div className="grid">
          {[
            ["7", "8", "9", " / "],
            ["4", "5", "6", " * "],
            ["1", "2", "3", " - "],
            ["0", "=", " + ", "C"],
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
