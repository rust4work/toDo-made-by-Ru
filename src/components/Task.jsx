import React from "react";

function Task(props) {
  const [text, setText] = React.useState("Editing task");
  if (props.className === "completed") {
    return (
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">Completed task</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    );
  } else if (props.className === "editing") {
    return (
      <li className="editing">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">Editing task</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <input
          type="text"
          className="edit"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </li>
    );
  } else {
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">Active task</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}
export default Task;
