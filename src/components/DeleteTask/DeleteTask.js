import { useState } from "react";
import axios from "axios";
import "./DeleteTask.css";

const DeleteTask = () => {

  const [taskId, setTaskId] = useState("");
  const [task, setTask] = useState(null);
  const [message, setMessage] = useState("");

  const searchTask = async () => {

    try {

      const res = await axios.get(`http://localhost:8080/tasks/${taskId}`);

      if(res.data){
        setTask(res.data);
        setMessage("");
      }

    } catch (error) {

      setTask(null);
      setMessage("Task not found");

    }

  };

  const deleteTask = async () => {

    const confirmDelete = window.confirm("Are you sure you want to delete this task?");

    if(!confirmDelete) return;

    try {

      await axios.delete(`http://localhost:8080/tasks/${taskId}`);

      setTask(null);
      setMessage("Task deleted successfully");

    } catch (error) {

      setMessage("Delete failed");

    }

  };

  return (

    <div className="delete-container">

      <h2>Delete Task</h2>

      <div className="search-box">

        <input
          type="number"
          placeholder="Enter Task ID"
          value={taskId}
          onChange={(e)=>setTaskId(e.target.value)}
        />

        <button onClick={searchTask}>
          Search
        </button>

      </div>

      {message && <p className="message">{message}</p>}

      {task && (

        <div className="task-card">

          <p><b>Task:</b> {task.task}</p>
          <p><b>Description:</b> {task.description}</p>
          <p><b>Date:</b> {task.date}</p>
          <p><b>Status:</b> {task.status}</p>

          <button
            className="delete-btn"
            onClick={deleteTask}
          >
            Delete Task
          </button>

        </div>

      )}

    </div>

  );

};

export default DeleteTask;