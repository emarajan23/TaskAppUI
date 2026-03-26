import React from "react";
import "./Card.css";

const Contact = () => {
  return (
    <div className="card-container">
      <div className="card">

        <div className="card-header">
          <h2>Contact</h2>
        </div>

        <div className="card-body">
          <p><strong>Name:</strong> Emarajan Raja</p>
          <p><strong>Email:</strong> emarajan@email.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>

          <hr />

          <div className="actions">
            <button className="btn">LinkedIn</button>
            <button className="btn secondary">GitHub</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;