import React from "react";
import "./Card.css";

const About = () => {
  return (
    <div className="card-container">
      <div className="card">

        <div className="card-header">
          <h2>About</h2>
        </div>

        <div className="card-body">
          <p>
            I am a Full Stack Developer skilled in Core Java,React js
            Spring Boot, and PostgreSQL.
          </p>

          <p>
            Built a Task Management Application with CRUD operations
            and API integration.
          </p>

          <hr />

          <p>Looking for opportunities to grow as a developer.</p>
        </div>

      </div>
    </div>
  );
};

export default About;