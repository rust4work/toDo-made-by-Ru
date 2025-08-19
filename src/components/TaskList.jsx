import Task from "./task";

function TaskList({ tasks, setTasks, date }) {
  return (
    <div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            state={task.state}
            date={date}
            setTasks={setTasks}
            tasks={tasks}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
