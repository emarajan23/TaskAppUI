import Modal from "react-modal";

const ViewModal = ({ isOpen, close, task }) => {
  if (!task) return null;

  return (
    <Modal isOpen={isOpen} className="modal-box" overlayClassName="modal-overlay">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Task Details</h5>
        </div>

        <div className="card-body">

          <p><b>ID:</b> {task.id}</p>

          <p><b>Task:</b> {task.task}</p>

          <p><b>Description:</b> {task.description}</p>

          <p>
            <b>Status:</b>{" "}
            <span className={`badge ${
              task.status === "HIGH"
                ? "bg-danger"
                : task.status === "MEDIUM"
                ? "bg-warning"
                : "bg-success"
            }`}>
              {task.status}
            </span>
          </p>

          <p><b>Date:</b> {task.date}</p>

        </div>

        <div className="card-footer text-end">
          <button className="btn btn-secondary" onClick={close}>
            Close
          </button>
        </div>

      </div>

    </Modal>
  );
};

export default ViewModal;