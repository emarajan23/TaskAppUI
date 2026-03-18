import { useState } from "react";
import axios from "axios";
import SearchTask from "../SearchTask/SearchTask";
import "./DeleteTask.css";

const DeleteTask = () => {
  const API = process.env.REACT_APP_API_URL;
  const [task, setTask] = useState(null);
  const [message, setMessage] = useState("");

  const handleTaskFound = (foundTask) => {
    setTask(foundTask);
    setMessage("");
  };

  const deleteTask = async () => {
    if (!task) return;
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/tasks/${task.id}`);
      setTask(null);
      setMessage("Task deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error.response || error.message);
      setMessage("Delete failed");
    }
  };

  return (
    <div className="delete-container">
      <h2>Delete Task</h2>

      {!task && <SearchTask onTaskFound={handleTaskFound} />}

      {task && (
        <div className="task-card">
          <p>
            <b>Task:</b> {task.task}
          </p>
          <p>
            <b>Description:</b> {task.description}
          </p>
          <p>
            <b>Date:</b> {task.date}
          </p>
          <p>
            <b>Status:</b> {task.status}
          </p>
          <button className="delete-btn" onClick={deleteTask}>
            Delete Task
          </button>
          <button
            type="button"
            onClick={() => setTask(null)}
            style={{ marginLeft: "10px" }}
          >
            Search Another
          </button>
        </div>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default DeleteTask;