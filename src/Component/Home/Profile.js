import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  const scrollTOBottom = () => {
    window.scrollTo(0,document.body.scrollHeight);
  };
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://instagram.com/harishsiva_13?igshid=N2ZiY2E3YmU=">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/harishraaj-sivakumar-88a183208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqMk5qiDJSLmnmZ2tdOfWzQ%3D%3D">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/Harishraaj">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://twitter.com/HarishraajS?t=zDlzkOfXYOjE7FRR8Orehw&s=09">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {"  "}
              Hi, I'm <span className="highlighted-text">Harishraaj</span>
            </span>
          </div>
          <div className="Profile-details-role">
            <span className="primary-text">
              <h2>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={["Enthusiastic Dev", 1000, "Full Stack Dev", 1000]}
                />
              </h2>
              <span className="profile-role-tagline">
                Knack of building application with front and back end operation.
              </span>
            </span>
          </div>
          <div className="profile-optins">

              <button onClick={scrollTOBottom} className="btn primary-btn">
                Hire Me
              </button>
          
            <a href="Resume.pdf" download="Harish Resume.pdf">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}
