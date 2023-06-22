import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_qptf51k",
        "template_olq5wsf",
        form.current,
        "4byOww5soNlhGikew"
      )
      .then(
        (result) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Send Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(result.text);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fail to send!',
          })
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-body">
      <div className="contact-title">
        <h2>Contact</h2>
      </div>

      <div className="contact-body">
        <div className="mail">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" required />
            <br />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <br />
            <input type="text" name="subject" placeholder="Subject" required />
            <br />
            <textarea
              placeholder="Message"
              name="message"
              cols="30"
              rows="8"
              required
            />
            <br />
            <button
              style={{
                backgroundColor: "green",
                border: "none",
                width: "100%",
                padding: "10px",
                color: "white",
              }}
            >
              Send
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
