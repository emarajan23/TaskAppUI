import { useEffect, useState } from "react";
import axios from "axios";
import "./ViewTask.css";

const ViewTask = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get("http://localhost:8080/tasks");
    setTasks(result.data);
  };

  return (
    <div className="table-container">

      <h2>Task List</h2>

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

          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.task}</td>
              <td>{task.description}</td>
              <td>{task.date}</td>
              <td>{task.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ViewTask;