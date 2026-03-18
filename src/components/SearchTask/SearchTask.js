import { useState } from "react";
import axios from "axios";
import "./SearchTask.css";

const SearchTask = ({ onTaskFound }) => {
  const [taskId, setTaskId] = useState("");
  const [message, setMessage] = useState("");
  const API = process.env.REACT_APP_API_URL;

  const searchTask = async () => {
    if (!taskId) {
      setMessage("Enter Task ID");
      return;
    }

    try {
      const res = await axios.get(`${API}/tasks/${taskId}`);
      if (!res.data) setMessage("Task not found");
      else onTaskFound(res.data);
    } catch (error) {
      console.error("Search error:", error.response || error.message);
      setMessage("Task not found");
    }
  };

  return (
    <div className="search-container">
      <input
        type="number"
        placeholder="Enter Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
      />
      <button onClick={searchTask}>Search</button>
      {message && <p className="error-msg">{message}</p>}
    </div>
  );
};

export default SearchTask;