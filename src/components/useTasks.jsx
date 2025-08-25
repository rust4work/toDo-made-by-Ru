import { useState, useEffect } from "react";

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const mappedTasks = data.slice(0, 20).map((todo) => ({
          id: todo.id,
          text: todo.title,
          state: todo.completed ? "completed" : "active",
          createdAt: new Date(),
        }));
        setTasks(mappedTasks);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { tasks, setTasks, error, loading };
}

export default useTasks;
