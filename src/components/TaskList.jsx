import Task from "./task";
import Footer from "./footer";
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
