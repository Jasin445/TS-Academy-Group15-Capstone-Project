import { useState } from "react";
import formSchema from "../validator/form-validator";
import useToast from "./use-toast";

const BASE_URL = "/api/contact";

const useSubmitForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    loadingToastHandler,
    errorToastHandler,
    successToastHandler,
    closeToast,
  } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const resetForm = () => {
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const submitForm = async (data) => {
    closeToast();
    setIsSubmitting(true);

    try {
      loadingToastHandler("Submitting your details...");
      const payload = new FormData();

      payload.append("fullname", data.fullname);
      payload.append("email", data.email);
      payload.append("phone", data.phone);
      payload.append("message", data.message);

      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // errorToastHandler(`Request failed with status ${response.status}`);
        throw new Error(`Request failed with status ${response.status}`);
      }

      successToastHandler("Your details have been submitted successfully!");
      return response;
    } catch (error) {
      console.error("Error submitting form:", error);
      errorToastHandler("An error occurred while submitting the form.");
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });

      setErrors(fieldErrors);

      return;
    }

    setErrors({});
    await submitForm(formData);
    resetForm();
  };

  return {
    errors,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
};

export default useSubmitForm;
