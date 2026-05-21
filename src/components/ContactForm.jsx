import React, { useState } from "react";
import useSubmitForm from "../hooks/use-submit-form";
import Input from "./ui/Input";
import { Button } from "./ui/Button";
import { ChevronRight } from "lucide-react";

const ContactForm = () => {
  const { formData, setFormData, handleChange, handleSubmit, errors, isSubmitting } = useSubmitForm();

  return (
    <section id="contact-section" className="form-filling-section">
      <h2>Have Questions About Planetary Science?</h2>
      <p>
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed? Reach out and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-columns">
          <div className="form-group">
            <label htmlFor="fullname">
              Full name<span className="required">*</span>
            </label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Fullname"
              value={formData.fullname}
              error={errors.fullname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone number<span className="required">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Please enter a valid phone number"
              value={formData.phone}
              error={errors.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <Input
              id="message"
              name="message"
              type="text"
              placeholder="Enter your message"
              value={formData.message}
              error={errors.message}
              onChange={handleChange}
            />
            <small>100 characters</small>
          </div>
        </div>

        <Button variant="default" className="submit-btn" type="submit">
          <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
          <ChevronRight size={16} className="right-arrow" />
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
