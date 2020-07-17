import React from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

export default function Todos({ todos, setTodos }) {
  const iconStyle = (type) => ({
    width: "40px",
    height: "40px",
    backgroundColor: type === "delete" ? "#d13434" : "#43993f",
  });

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const toggleCheckTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos([...todos]);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li className="flex todo" key={todo.id}>
          <div
            className="icon-wrapper"
            style={iconStyle("delete")}
            onClick={() => removeTodo(todo.id)}
          >
            <FaTrashAlt size="20px" color="white" />
          </div>
          <div
            className="icon-wrapper"
            style={iconStyle("check")}
            onClick={() => toggleCheckTodo(todo.id)}
          >
            <FaCheck size="25px" color="white" />
          </div>
          <p className={todo.complete ? "complete" : undefined}>{todo.text}</p>
        </li>
      ))}
    </ul>
  );
}
