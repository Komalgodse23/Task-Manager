function TaskForm({
    title,
    setTitle,
    description,
    setDescription,
    addTask,
    editId,
  }) {
    return (
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
  
        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
  
        <button onClick={addTask}>
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>
    );
  }
  
  export default TaskForm;