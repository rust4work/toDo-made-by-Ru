import { useState } from "react";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import NewTaskForm, { Header } from "./components/NewTaskForm";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    // { id: 1, text: "1 task", state: "completed" },
    // { id: 2, text: "2 task", state: "editing" },
    // { id: 3, text: "3 task", state: "active" },
    // { id: 4, text: "4 task", state: "active" },
  ]);

  const currentDate = format(new Date(), "dd.MM.yyyy hh.mm");
  const activeCount = tasks.filter((task) => task.state === "active").length;

  return (
    <>
      <Header />
      <NewTaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} date={currentDate} />
      <Footer activeCount={activeCount} />
    </>
  );
}

export default App;
