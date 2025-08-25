import { useState } from "react";
import PropTypes from "prop-types";

function NewTaskForm({ setTasks }) {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
        state: "active",
        createdAt: new Date(),
      };

      setTasks((prevTasks) => [newTask, ...prevTasks]);
      setText("");
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

NewTaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

NewTaskForm.defaultProps = {
  setTasks: () => {},
};

function Header() {
  return <h1>ToDo made by Ru</h1>;
}

export default NewTaskForm;
export { Header };
