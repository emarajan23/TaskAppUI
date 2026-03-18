import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
        <Link to="/add-task">ADD TASK</Link>
        <Link to="/view-task">VIEW TASK</Link>
        <Link to="/search-edit-task">EDIT TASK</Link>
        <Link to="/delete-task">DELETE TASK</Link>
    </div>
  )
}

export default SideBar
 