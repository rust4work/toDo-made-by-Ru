import React, { useState } from "react";

function Task({ id, text, state, date, setTasks, tasks }) {
  const [editText, setEditText] = useState(text);
  const isEditing = state === "editing";

  const toggleCompleted = () => {
    const updated = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            state: task.state === "completed" ? "active" : "completed",
          }
        : task
    );
    setTasks(updated);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const saveEdit = (e) => {
    if (e.key === "Enter") {
      const updated = tasks.map((task) =>
        task.id === id ? { ...task, text: editText, state: "active" } : task
      );
      setTasks(updated);
    }
  };

  const startEditing = () => {
    console.log("Edit clicked:", id);
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, state: "editing" } : task
    );
    setTasks(updated);
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
          <span className="created">created {date}</span>
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

export default Task;
