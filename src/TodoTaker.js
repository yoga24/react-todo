import React from "react";
import { randomIdGenerator } from "./utils";

export default function TodoTaker({ setTodos }) {
  const [input, setInput] = React.useState("");

  const addTodo = (event) => {
    event.preventDefault();

    //Create Todo obj and add to list
    const todo = {
      id: randomIdGenerator(),
      text: input,
      complete: false,
    };
    setTodos((todos) => todos.concat(todo));

    //Reset input field
    setInput("");
  };

  return (
    <form className="flex jc-center" onSubmit={addTodo}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Type here...."
      />
      <button>Add</button>
    </form>
  );
}
