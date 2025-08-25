import Task from "./Task";
import PropTypes from "prop-types";

function TaskList({ tasks, setTasks }) {
  return (
    <div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            state={task.state}
            createdAt={task.createdAt}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      state: PropTypes.oneOf(["active", "completed", "editing"]).isRequired,
      createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
      ]).isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
