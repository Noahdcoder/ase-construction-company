import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      message: formData.message,
    };
    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 10000);
      }
    } catch (error) {
      console.error("Error occurred while sending form data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block mb-2 text-lg font-medium text-gray-800"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            className="w-full px-4 py-2 border border-dixie rounded-md focus:outline-none focus:ring-dixie focus:border-dixie"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block mb-2 text-lg font-medium text-gray-800"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            className="w-full px-4 py-2 border border-dixie rounded-md focus:outline-none focus:ring-dixie focus:border-dixie"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-800"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-dixie rounded-md focus:outline-none focus:ring-dixie focus:border-dixie"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-lg font-medium text-gray-800"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            className="w-full px-4 py-2 border border-dixie rounded-md focus:outline-none focus:ring-dixie focus:border-dixie"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 text-lg font-medium text-gray-800"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="w-full px-4 py-2 border border-dixie rounded-md resize-none focus:outline-none focus:ring-dixie focus:border-dixie"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="px-6 py-3 text-lg font-semibold text-white bg-dixie rounded-lg shadow-xl hover:opacity-75"
        >
          Submit
        </button>
      </div>
      {submitted ? (
        <div className="text-green-500 text-lg font-bold py-4">
          Your message has been sent successfully. You will get a feedback soon!
        </div>
      ) : null}
    </form>
  );
};

export default ContactForm;
