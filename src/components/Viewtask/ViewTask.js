import { useEffect, useState } from "react";
import axios from "axios";
import "./ViewTask.css";

const ViewTask = () => {

  const API = process.env.REACT_APP_API_URL; 
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const result = await axios.get(`${API}/tasks`);
      setTasks(result.data);
      setMessage(""); 
    } catch (error) {
      console.error(error);
      setMessage("Failed to load tasks.");
    }
  };

  return (
    <div className="table-container">

      <h2>Task List</h2>

      {message && <p className="message">{message}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.task}</td>
                <td>{task.description}</td>
                <td>{task.date}</td>
                <td>{task.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTask;