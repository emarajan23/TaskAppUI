import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditTask.css";

const EditTask = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    date: "",
    status: "LOW"
  });

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {

    try {

      const result = await axios.get(
        `http://localhost:8080/tasks/${id}`
      );

      setTaskData(result.data);

    } catch(error){

      console.error(error);

    }

  };

  const handleChange = (e) => {

    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });

  };

  const updateTask = async (e) => {

    e.preventDefault();

    await axios.put(
      `http://localhost:8080/tasks/${id}`,
      taskData
    );

    alert("Task Updated");

    navigate("/view-task");

  };

  return (

    <div className="edit-container">

      <h2>Edit Task</h2>

      <form className="edit-form" onSubmit={updateTask}>

        <input
          type="text"
          name="task"
          value={taskData.task}
          onChange={handleChange}
          placeholder="Task Name"
        />

        <textarea
          name="description"
          value={taskData.description}
          onChange={handleChange}
          placeholder="Description"
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

        <button type="submit">
          Update Task
        </button>

      </form>

    </div>

  );

};

export default EditTask;