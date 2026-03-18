import { Routes, Route } from "react-router-dom";
import TaskForm from "../components/Addtask/TaskForm";
import ViewTask from "../components/Viewtask/ViewTask";
import EditTask from "../components/EditTask/EditTask";
import DeleteTask from "../components/DeleteTask/DeleteTask";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/add-task" element={<TaskForm />} />
      <Route path="/view-task" element={<ViewTask />} />
      <Route path="/edit-task" element={<EditTask />} />
      <Route path="/delete-task" element={<DeleteTask />} />
    </Routes>
  );
}