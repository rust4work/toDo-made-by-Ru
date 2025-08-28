import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

function Task({ id, text, state, createdAt, setTasks }) {
  const [editText, setEditText] = useState(text);
  const isEditing = state === "editing";

  const toggleCompleted = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              state: task.state === "completed" ? "active" : "completed",
            }
          : task
      )
    );
  };

  const deleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const saveEdit = (e) => {
    if (e.key === "Enter") {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, text: editText, state: "active" } : task
        )
      );
    }
  };

  const startEditing = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, state: "editing" } : task
      )
    );
  };

  return (
    <li className={state}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={state === "completed"}
          onChange={toggleCompleted}
        />
        <label>
          <span className="description">{text}</span>
          <span className="created">
            created{" "}
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </span>
        </label>
        <button className="icon icon-edit" onClick={startEditing}></button>
        <button className="icon icon-destroy" onClick={deleteTask}></button>
      </div>

      {isEditing && (
        <input
          type="text"
          className="edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={saveEdit}
          autoFocus
        />
      )}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  state: PropTypes.oneOf(["active", "completed", "editing"]).isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
      ]).isRequired,
    })
  ).isRequired,
};

Task.defaultProps = {
  state: "active",
};

export default Task;
