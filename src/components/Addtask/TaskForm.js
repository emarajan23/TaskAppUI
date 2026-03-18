import { useState } from "react";
import axios from "axios";
import "./TaskForm.css";

const TaskForm = () => {

  const API = process.env.REACT_APP_API_URL; 

  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    date: "",
    status: "LOW"
  });

  const [message, setMessage] = useState(""); 
 
  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/tasks`, taskData);

      console.log(response.data);

      setMessage("Task Added Successfully!"); 

      
      setTaskData({
        task: "",
        description: "",
        date: "",
        status: "LOW"
      });

    } catch (error) {
      console.error(error);
      setMessage("Failed to add task."); 
    }
  };

  return (
    <div className="task-container">
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit} className="task-form">

        <input
          type="text"
          name="task"
          placeholder="Task Name"
          value={taskData.task}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={taskData.description}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={taskData.date}
          onChange={handleChange}
        />

        <select
          name="status"
          value={taskData.status}
          onChange={handleChange}
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default TaskForm;