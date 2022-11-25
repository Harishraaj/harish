import React from "react";
import "./Contact.css";

export  function Contact() {
  return (
    <div className="contact-body">
      <div className="contact-title">
        <h2>Contact</h2>
      </div>
      <div className="contact-content">
        <div className="details-title">
          <div className="contact-icon">
            <i className="fa fa-map-marker"></i>
          </div>
          <h4>Location :</h4>
        </div>
      </div>
      <div className="details-content-location">
        <p>Kumaramuthusamy St, Ammapet, Salem-636003</p>
      </div>
      <div className="details-title">
        <div className="contact-icon">
          <i className="fa fa-phone"></i>
        </div>
        <h4>Contact :</h4>
      </div>
      <div className="details-content-phone">
        <p>9003673507</p>
      </div>
      <div className="details-title">
        <div className="contact-icon">
          <i className="fa fa-envelope"></i>
        </div>
        <h4>Mail :</h4>
      </div>
      <div className="details-content-mail">
        <p>harish.s.raaj@gmail.com</p>
      </div>
    </div>
  );
}
