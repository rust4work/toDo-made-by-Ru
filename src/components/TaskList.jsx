import Task from "./task";

function TaskList({ tasks, date }) {
  return (
    <div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task key={task.id} text={task.text} state={task.state} date={date} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
