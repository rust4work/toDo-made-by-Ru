import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import NewTaskForm, { Header } from "./components/NewTaskForm";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const mappedTasks = data.slice(0, 10).map((todo) => ({
          id: todo.id,
          text: todo.title,
          state: todo.completed ? "completed" : "active",
        }));
        setTasks(mappedTasks);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const currentDate = format(new Date(), "dd.MM.yyyy HH:mm");
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
      <TaskList tasks={filteredTasks} setTasks={setTasks} date={currentDate} />
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
