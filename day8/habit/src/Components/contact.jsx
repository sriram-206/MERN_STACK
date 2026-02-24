import React, { useState } from "react";

function Contact() {
  const [msg, setMsg] = useState("");

  const handleClick = () => {
    setMsg("Thanks for reaching out! I will contact you soon.");
  };

  return (
    <section id="contact" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Contact</h2>
      <p>Email: habit.tracker@example.com</p>
      <p>Phone: +1 234 567 890</p>
      <button onClick={handleClick} style={{ marginTop: "20px" }}>
        Send Message
      </button>
      {msg && <p style={{ marginTop: "20px", color: "green" }}>{msg}</p>}
    </section>
  );
}

export default Contact;