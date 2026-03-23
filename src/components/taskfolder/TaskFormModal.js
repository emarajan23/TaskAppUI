import Modal from "react-modal";
import { useState, useEffect } from "react";
import { createTask, updateTask } from "../../services/taskService";

const TaskFormModal = ({ isOpen, close, reload, task }) => {

  const [form, setForm] = useState({
    task: "",
    description: "",
    status: "",
    date: ""
  });

  useEffect(() => {
    if (task) setForm(task);
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.id) {
      await updateTask(form.id, form);
    } else {
      await createTask(form);
    }

    reload();
    close();
  };

  return (
  <Modal isOpen={isOpen} className="modal-box" overlayClassName="modal-overlay">
    
    <div className="container">
      <h4 className="text-center mb-3">
        {form.id ? "Edit Task" : "Add Task"}
      </h4>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            value={form.task}
            onChange={e => setForm({...form, task: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({...form, description: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={form.date}
            onChange={e => setForm({...form, date: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            value={form.status}
            onChange={e => setForm({...form, status: e.target.value})}
          >
            <option value="">Select Status</option>
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
        </div>

        <button className="btn btn-success w-100">
          Save
        </button>

        <button
          type="button"
          className="btn btn-secondary w-100 mt-2"
          onClick={close}
        >
          Cancel
        </button>

      </form>
    </div>

  </Modal>
);
};

export default TaskFormModal;