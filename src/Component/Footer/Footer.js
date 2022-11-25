import React from "react";
import './Footer.css';
export function Footer(){
    return(
        <div className="footer-body">
            <div className="footer-content">
                <p>Designed By</p>
                <p>Harishraaj</p>
            </div>
            <div className="footer-icon">
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
    )
}