import React from "react";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Player X turn");

  const [data, setData] = useState(Array(9).fill(null));

  function reset() {
    const newData = Array(9).fill(null);
    setData(newData);
    setMessage("Player X turn");
  }

  function turn(index) {
    const newData = [...data];

    if (message === "Player X turn") {
      newData[index] = "X";
      setData(newData);
      if (winner(newData)) {
        setMessage("Player X Wins");
      } else {
        setMessage("Player O turn");
      }
    } else if (message === "Player O turn") {
      newData[index] = "O";
      setData(newData);
      if (winner(newData)) {
        setMessage("Player O Wins");
      } else {
        setMessage("Player X turn");
      }
    }
  }

  function winner(newData) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        newData[a] &&
        newData[a] === newData[b] &&
        newData[a] === newData[c]
      ) {
        console.log("here");
        return true;
      }
    }
    return false;
  }

  console.log(data);

  return (
    <div className="app">
      <div className="message"> {message}</div>
      <div className="container">
        <div className="grid">
          {data.map((value, index) => (
            <div key={index} onClick={() => turn(index)} className="item">
              {value}
            </div>
          ))}
        </div>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
