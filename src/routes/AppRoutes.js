import { Routes, Route } from "react-router-dom";

import TaskPage from "../pages/TaskPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/add-task" element={<TaskForm />} />
      <Route path="/view-task" element={<ViewTask />} />
      <Route path="/edit-task" element={<EditTask />} />
      <Route path="/delete-task" element={<DeleteTask />} /> */}
      <Route path="/" element={<TaskPage />} />

    </Routes>
  );
}