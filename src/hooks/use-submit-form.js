import { useState } from "react";
import { z } from "zod";
import formSchema from "../validator/form-validator";
import useToast from "./use-toast";

const useSubmitForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const {
    loadingToastHandler,
    errorToastHandler,
    successToastHandler,
    closeToast,
  } = useToast();

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const resetForm = () => {
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const submitForm = async (data, url) => {
    closeToast();
    setIsSubmitting(true)
    try {
      loadingToastHandler("Submitting your details...");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        errorToastHandler("Failed to submit form");
        throw new Error("Failed to submit form");
      }

      successToastHandler("Your details have been submitted successfully!");

      return response;
    } catch (error) {
      closeToast();
      console.error("Error submitting form:", error);
      errorToastHandler("An error occured while submitting form!");
      throw error;
    }finally {
      setIsSubmitting(false)
    }
  };

  const handleSubmit = (e) => {
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
    console.log("Form submitted:", formData);
    submitForm(
      formData,
      `https://corsproxy.io/?${encodeURIComponent("https://whitebricks.com/tsacademy.php")}`,
    );
    resetForm();
  };

  return {
    errors,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    isSubmitting
  };
};

export default useSubmitForm;
