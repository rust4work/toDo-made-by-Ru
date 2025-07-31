import Task from "./Task";
import Footer from "./Footer";
import NewTaskForm, { Header } from "./newTaskForm";

function TaskList() {
  return (
    <div>
      <Header />
      <NewTaskForm />
      <ul className="todo-list">
        <Task className="completed" />
        <Task className="editing" />
        <Task />
      </ul>
      <Footer />
    </div>
  );
}
export default TaskList;
