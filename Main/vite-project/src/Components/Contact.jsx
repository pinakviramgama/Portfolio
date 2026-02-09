import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./contact.css";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rzi0eh4",   // ✅ Your Service ID
        "template_3jkphyu",  // ✅ Paste Template ID here
        formRef.current,
        "LDsDDoDR4GPwlRnp1"    // ✅ Paste Public Key here
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message!");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-title">
          Contact <span>Me</span> 📩
        </h2>

        <div className="contact-box">
          <form ref={formRef} onSubmit={sendEmail}>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message 🚀
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
