import React from "react";
import { postContact } from "../redux/actions/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postContact(contactData));
  };
  return (
    <form className="mt-2" onSubmit={(e) => handleSubmit(e)}>
      <div className="row g-3">
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control rounded-4"
              id="name"
              placeholder="Your Name"
              name="name"
              value={contactData.name}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="subject">Your Name</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control rounded-4"
              id="email"
              placeholder="Your Email"
              name="email"
              value={contactData.email}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="subject">Your Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control rounded-4"
              id="subject"
              placeholder="Subject"
              name="subject"
              value={contactData.subject}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control rounded-4"
              placeholder="Leave a message here"
              id="message"
              style={{ height: "150px" }}
              name="message"
              value={contactData.message}
              onChange={(e) => handleInputChange(e)}
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <div className="col-12 mt-5">
          <button
            className="btn btn-primary w-100 py-3"
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
