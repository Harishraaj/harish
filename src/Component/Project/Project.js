import React from "react";
import "./Project.css";
export function Project() {
  return (
    <div className="project-body">
      <div className="project-title">
        <h2>Projects</h2>
      </div>
      <div className="project-cards">
        <div class="cards">
          <h4>Vaccine Booking</h4>
          <div class="details">
            <div class="center">
              <h1>
                Vaccine Portal
                <br />
              </h1>
              <p>
                Designed a desktop application using Java swing and Mysql
                database.
              </p>
            </div>
          </div>
        </div>
        <div class="cards">
          <h4>Contract Booking</h4>
          <div class="details">
            <div class="center">
              <h1>
                Web Application
                <br />
              </h1>
              <p>Designed a web application using Reactjs and Firebase.</p>
            </div>
          </div>
        </div>
        <div class="cards">
          <h4>Student Management</h4>
          <div class="details">
            <div class="center">
              <h1>
                Web Application
                <br />
              </h1>
              <p>
                Designed a web application using Reactjs, .net Web api and Sql
                database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
