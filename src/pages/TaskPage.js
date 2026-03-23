import { useEffect, useState } from "react";
import TaskTable from "../components/taskfolder/TaskTable";
import TaskFormModal from "../components/taskfolder/TaskFormModal";
import ViewModal from "../components/taskfolder/ViewModal";
import { getTasks, deleteTask } from "../services/taskService";
import "../components/taskfolder/Task.css";

const TaskPage = () => {

  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  return (
    <div className="container mt-3">

      <div className="header-bar">
        <h4>Manage Tasks</h4>

        <button className="btn btn-success" onClick={() => {
          setSelectedTask(null);
          setModalOpen(true);
        }}>
          + Add New Task
        </button>
      </div>

      <TaskTable
        tasks={tasks}
        onEdit={(task) => {
          setSelectedTask(task);
          setModalOpen(true);
        }}
        onView={(task) => {
          setSelectedTask(task);
          setViewOpen(true);
        }}
        onDelete={async (id) => {
          await deleteTask(id);
          loadTasks();
        }}
      />

      <TaskFormModal
        isOpen={modalOpen}
        close={() => setModalOpen(false)}
        reload={loadTasks}
        task={selectedTask}
      />

      <ViewModal
        isOpen={viewOpen}
        close={() => setViewOpen(false)}
        task={selectedTask}
      />

    </div>
  );
};

export default TaskPage;