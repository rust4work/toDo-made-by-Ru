import { useState } from "react";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import NewTaskForm, { Header } from "./components/NewTaskForm";
import "./App.css";
import useTasks from "./components/useTasks";

function App() {
  const [filter, setFilter] = useState("all");
  const { tasks, setTasks, error, loading } = useTasks();

  const activeCount = tasks.filter((task) => task.state === "active").length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active")
      return task.state === "active" || task.state === "editing";
    if (filter === "completed") return task.state === "completed";
    return false;
  });

  const onClearCompleted = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.state !== "completed")
    );
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <>
      <Header />
      <NewTaskForm setTasks={setTasks} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
      <Footer
        activeCount={activeCount}
        filter={filter}
        setFilter={setFilter}
        onClearCompleted={onClearCompleted}
      />
    </>
  );
}

export default App;
