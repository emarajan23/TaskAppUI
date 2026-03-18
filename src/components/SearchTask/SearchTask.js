import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SearchTask.css";

const SearchTask = () => {

  const [taskId, setTaskId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const searchTask = async () => {

    if(!taskId){
      setMessage("Enter Task ID");
      return;
    }

    try {

      const res = await axios.get(`http://localhost:8080/tasks/${taskId}`);

      if(res.data == null){
        setMessage("Task not found");
      }
      else{
        setMessage("");
        navigate(`/edit-task/${taskId}`);
      }

    } catch(error){

      setMessage("Task not found");

    }

  };

  return (
    <div className="search-container">

      <h2>Search Task</h2>

      <input
        type="number"
        placeholder="Enter Task ID"
        value={taskId}
        onChange={(e)=>setTaskId(e.target.value)}
      />

      <button onClick={searchTask}>
        Search
      </button>

      {message && <p className="error-msg">{message}</p>}

    </div>
  );
};

export default SearchTask;