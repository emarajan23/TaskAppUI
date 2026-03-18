import { useState } from "react";
import axios from "axios";
import SearchTask from "../SearchTask/SearchTask";
import "./EditTask.css";

const EditTask = () => {
  const API = process.env.REACT_APP_API_URL;
  const [taskData, setTaskData] = useState(null); 
  const [message, setMessage] = useState("");

  
  const handleTaskFound = (task) => {
    setTaskData(task); 
    setMessage("");
  };

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const updateTask = async (e) => {
    e.preventDefault();
    if (!taskData) return;

    try {
      await axios.put(`${API}/tasks/${taskData.id}`, taskData);
      setMessage("Task updated successfully!");
    } catch (error) {
      console.error("Update error:", error.response || error.message);
      setMessage("Update failed");
    }
  };

  return (
    <div className="edit-container">
      <h2>Edit Task</h2>

      
      {!taskData && <SearchTask onTaskFound={handleTaskFound} />}

      
      {taskData && (
        <form className="edit-form" onSubmit={updateTask}>
          <input
            type="text"
            name="task"
            value={taskData.task || ""}
            onChange={handleChange}
            placeholder="Task Name"
            required
          />
          <textarea
            name="description"
            value={taskData.description || ""}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            type="date"
            name="date"
            value={taskData.date || ""}
            onChange={handleChange}
          />
          <select
            name="status"
            value={taskData.status || "LOW"}
            onChange={handleChange}
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
          <button type="submit">Update Task</button>
          <button
            type="button"
            onClick={() => setTaskData(null)} 
            style={{ marginLeft: "10px" }}
          >
            Search Another
          </button>
        </form>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default EditTask;