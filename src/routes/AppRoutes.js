import { Routes, Route } from "react-router-dom";

import TaskPage from "../pages/TaskPage";
import Contact from '../components/Temp/Contact';    
import About from '../components/Temp/About';  



export default function AppRoutes() {
  return (
    <Routes>
     
      <Route path="/" element={<TaskPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

    </Routes>
  );
}