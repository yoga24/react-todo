import React from "react";
import ReactDOM from "react-dom";
import TodoTaker from "./TodoTaker";
import Todos from "./Todos";
import "./index.css";

const defTodos = [
  { id: 1, text: "takeNote", complete: false },
  { id: 2, text: "design diagrams", complete: false },
  { id: 3, text: "Mockups done ?", complete: true },
];

function Todo() {
  const [todos, setTodos] = React.useState(defTodos);

  return (
    <div className="container">
      <TodoTaker setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById("root")
);
