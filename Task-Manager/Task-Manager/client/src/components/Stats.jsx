function Stats({ tasks }) {
    return (
      <div className="stats">
        <div className="stat-card">
          <h2>{tasks.length}</h2>
          <p>Total Tasks</p>
        </div>
  
        <div className="stat-card">
          <h2>
            {
              tasks.filter(
                (task) => task.completed
              ).length
            }
          </h2>
          <p>Completed</p>
        </div>
  
        <div className="stat-card">
          <h2>
            {
              tasks.filter(
                (task) => !task.completed
              ).length
            }
          </h2>
          <p>Pending</p>
        </div>
      </div>
    );
  }
  
  export default Stats;