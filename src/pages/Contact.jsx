import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <div className="container-xxl py-5 mt-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="section-title text-secondary">Contact Us</h4>
          <h1 className="display-5 mb-4 fw-bold">
            If You Have Any Query, Please Feel Free Contact Us
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <ContactInfo
              icon="fa fa-map-marker-alt text-primary"
              title="Address"
              info="Mid-Baneshwor, Kathmandu"
            />
            <ContactInfo
              icon="fa fa-phone-alt text-primary"
              title="Follow Us On Facebook"
              info="+977-9840953995"
            />
            <ContactInfo
              icon="fa fa-phone-alt text-primary"
              title="Call Us Now"
              info="+977-9846014473"
            />
            <ContactInfo
              icon="fa fa-envelope-open text-primary"
              title="Mail Us Now"
              info="apexhubcontact@gmail.com"
            />
          </div>
          <div className="col-lg-6" data-wow-delay="0.5s">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
