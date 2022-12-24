import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [input, handleInput] = useState<string>("");
  const [todoArray, handleTodo] = useState<string[]>([]);

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(e.currentTarget.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTodo([...todoArray, input]);
      handleInput("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <ul>{todoArray.length ? todoArray.map((i) => <li>{i}</li>) : ""}</ul>
      <input type="text" onChange={handleChangeEvent} onKeyDown={handleKeyPress} value={input} />
      <h2>{input}</h2>
    </div>
  );
}

export default App;
