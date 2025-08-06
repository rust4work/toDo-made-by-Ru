import { useState } from "react";

function NewTaskForm({ setTasks }) {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
        state: "active",
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setText(""); // очистить поле ввода
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

function Header() {
  return <h1>ToDo made by Ru</h1>;
}

export default NewTaskForm;
export { Header };
