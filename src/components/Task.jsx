import React, { useState } from "react";

function Task({ text, state, date }) {
  const [editText, setEditText] = useState(text);

  return (
    <li
      className={
        state === "completed"
          ? "completed"
          : state === "editing"
          ? "editing"
          : ""
      }
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={state === "completed"}
          readOnly
        />
        <label>
          <span className="description">{editText}</span>
          <span className="created">created {date}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>

      {state === "editing" && (
        <input
          type="text"
          className="edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      )}
    </li>
  );
}

export default Task;
