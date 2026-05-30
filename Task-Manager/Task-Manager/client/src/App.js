import { useState, useEffect } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import Stats from "./components/Stats";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updatedTasks = tasks.map((task) =>
        task.id === editId
          ? {
              ...task,
              title,
              description,
            }
          : task
      );

      setTasks(updatedTasks);
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
      };

      setTasks([...tasks, newTask]);
    }

    setTitle("");
    setDescription("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };

  const editTask = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task.id);
  };

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Task Management Application</h1>

      <Stats tasks={tasks} />

      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addTask={addTask}
        editId={editId}
      />

      <input
        className="search-box"
        type="text"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="task-list">
        <h2>My Tasks</h2>

        {tasks.length === 0 ? (
          <div className="task-card">
            <h3>No Tasks Available</h3>
            <p>Add your first task above.</p>
          </div>
        ) : (
          tasks
            .filter((task) =>
              task.title
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                toggleTaskStatus={toggleTaskStatus}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default App;