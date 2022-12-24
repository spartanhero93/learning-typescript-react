import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Todo {
  input: string,
  key: string
}

function App() {
  const [input, handleInput] = useState<string>("");
  const [todoArray, handleTodo] = useState<Todo[]>([]);

  const handleInputChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(e.currentTarget.value);
  };
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTodo([...todoArray, {input, key: String(new Date().getTime())}]);
      handleInput("");
    }
  };

  // const handleInputClickEvent = ((id: string) => {
  //   handleTodo([...todoArray.indexOf(index+i)])
  // }

  return (
    <div className="App">
      <ul>{todoArray.length ? todoArray.map((i, index) => 
      <li onClick={() => handleTodo([...todoArray.filter(singleTodo => singleTodo.key !== i.key)])} key={i.key}>{i.input}</li>
      ) : ""}</ul>
      <input type="text" onChange={handleInputChangeEvent} onKeyDown={handleInputKeyPress} value={input} />
    </div>
  );
}

export default App;
