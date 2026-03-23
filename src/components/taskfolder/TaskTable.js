import TaskRow from "./TaskRow";

const TaskTable = ({ tasks, onEdit, onDelete, onView }) => {

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // 📱 MOBILE VIEW
  if (isMobile) {
    return (
      <div>
        {tasks.map(task => (
          <div key={task.id} className="task-card">

            <div className="row-item">
              <span className="label">ID</span>
              <span className="value">{task.id}</span>
            </div>

            <div className="row-item">
              <span className="label">Task</span>
              <span className="value">{task.task}</span>
            </div>

            <div className="row-item">
              <span className="label">Description</span>
              <span className="value">{task.description}</span>
            </div>

            <div className="row-item">
              <span className="label">Status</span>
              <span className={`badge ${
                task.status === "HIGH"
                  ? "bg-danger"
                  : task.status === "MEDIUM"
                  ? "bg-warning"
                  : "bg-success"
              }`}>
                {task.status}
              </span>
            </div>

            <div className="row-item">
              <span className="label">Date</span>
              <span className="value">{task.date}</span>
            </div>

            <div className="actions">
              <span onClick={() => onView(task)}>👁️</span>
              <span onClick={() => onEdit(task)}>✏️</span>
              <span onClick={() => onDelete(task.id)}>🗑️</span>
            </div>

          </div>
        ))}
      </div>
    );
  }

  // 💻 DESKTOP VIEW
  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Description</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onView={onView}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;