import { useState } from "react";
import axios from "axios";
import "./TaskForm.css";

const TaskForm = () => {

  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    date: "",
    status: "LOW"
  });

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/tasks",
        taskData
      );

      console.log(response.data);

      alert("Task Added Successfully");

    } catch (error) {
      console.error(error);
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
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
        </select>

        <button type="submit">Add Task</button>

      </form>

    </div>
  );
};

export default TaskForm;