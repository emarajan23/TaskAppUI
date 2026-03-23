import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const TaskRow = ({ task, onEdit, onDelete, onView }) => (
  <tr>
    <td>{task.id}</td> 
    <td>{task.task}</td>
    <td>{task.description}</td>
    <td>
      <span className={`badge ${task.status === "Completed" ? "bg-success" : "bg-warning"}`}>
        {task.status}
      </span>
    </td>
    <td>{task.date}</td>
    <td>
      <FaEye style={{cursor:"pointer", marginRight:"10px"}} onClick={() => onView(task)} />
      <FaEdit style={{cursor:"pointer", marginRight:"10px", color:"orange"}} onClick={() => onEdit(task)} />
      <FaTrash style={{cursor:"pointer", color:"red"}} onClick={() => onDelete(task.id)} />
    </td>
  </tr>
);

export default TaskRow;