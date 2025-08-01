import TasksFilter from "./TasksFilter";

function Footer({ activeCount = 0, onClearCompleted = () => {} }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </span>
      <TasksFilter />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
