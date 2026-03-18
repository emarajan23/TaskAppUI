
import { Routes, Route } from "react-router-dom";
import TaskForm from "../components/Addtask/TaskForm";
import ViewTask from "../components/Viewtask/ViewTask";
import SearchTask from "../components/SearchTask/SearchTask";
import EditTask from "../components/EditTask/EditTask";
import DeleteTask from "../components/DeleteTask/DeleteTask";


export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/add-task" element={<TaskForm />} />
        <Route path="/view-task" element={<ViewTask />} />
        <Route path="/search-edit-task" element={<SearchTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
        <Route path="/delete-task" element={<DeleteTask />} />
      </Routes>
    </div>
  )
}
