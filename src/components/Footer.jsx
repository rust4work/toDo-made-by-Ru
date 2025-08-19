import TasksFilter from "./tasksFilter";

function Footer({ activeCount = 0, onClearCompleted, filter, setFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
