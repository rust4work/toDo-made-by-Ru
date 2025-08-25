import PropTypes from "prop-types";
import TasksFilter from "./tasksFilter";

function Footer({ activeCount, onClearCompleted, filter, setFilter }) {
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

Footer.propTypes = {
  activeCount: PropTypes.number,
  onClearCompleted: PropTypes.func,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

Footer.defaultProps = {
  activeCount: 0,
  onClearCompleted: () => {},
  filter: "all", // по умолчанию показываем все задачи
  setFilter: () => {},
};

export default Footer;
