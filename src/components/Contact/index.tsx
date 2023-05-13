"use client";
import React, { useState } from "react";
import TagWrapper from "../common/TagWrapper";
import Button from "../common/Button";
import HeaderTag from "../common/HeaderTag";

const initialFormData = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [isLoading, setLoading] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const handleOnSubmit = () => {
    const { name, email, subject, message } = formData;
    if (name && email && subject) {
      setLoading(true);
      fetch(`http://localhost:3001/api/email`, {
        method: "POST",
        body: JSON.stringify({
          subject,
          email,
          message,
          name,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setFormData(initialFormData);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="w-full md:w-3/4 flex flex-col gap-3">
      <HeaderTag>
        <span>Contact me</span>
      </HeaderTag>
      <TagWrapper tagName="p">
        <span>
          I am open For a full-time Full Stack Developer or React Developer job.
          Currently,I am working as a full-time Full Stack Developer in
          SoftSuave. With expertise in React and Node, I am working in MERN
          stack & TypeScript. However, if you have other request or question,
          don’t hesitate to use the form.
        </span>
      </TagWrapper>
      <TagWrapper tagName="form">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              value={formData.name}
              onChange={handleOnChange}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleOnChange}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <input
            value={formData.subject}
            onChange={handleOnChange}
            type="subject"
            id="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Looking for..."
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={handleOnChange}
            rows={3}
            cols={50}
            id="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="message..."
          />
        </div>
        <div className="flex justify-center">
          <Button onClick={handleOnSubmit}>Send Message!</Button>
        </div>
      </TagWrapper>
    </div>
  );
};

export default Contact;
