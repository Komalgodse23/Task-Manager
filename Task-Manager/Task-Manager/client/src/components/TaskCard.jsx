function TaskCard({
    task,
    toggleTaskStatus,
    editTask,
    deleteTask,
  }) {
    return (
      <div className="task-card">
        <span
          className={
            task.completed
              ? "done"
              : "pending"
          }
        >
          {task.completed
            ? "Completed"
            : "Pending"}
        </span>
  
        <h3>{task.title}</h3>
  
        <p>{task.description}</p>
  
        <button
          onClick={() =>
            toggleTaskStatus(task.id)
          }
        >
          {task.completed
            ? "Undo"
            : "Mark Complete"}
        </button>
  
        <button
          onClick={() =>
            editTask(task)
          }
        >
          Edit
        </button>
  
        <button
          onClick={() =>
            deleteTask(task.id)
          }
        >
          Delete
        </button>
      </div>
    );
  }
  
  export default TaskCard;