import React from "react";
import Landing from "../Landing";
import { rampartOne } from "@/fonts/fonts";
import TagWrapper from "../common/TagWrapper";
import Button from "../common/Button";

const Contact = () => {
  return (
    <div className="w-3/4 flex flex-col gap-4">
      <TagWrapper tagName="h1">
        <div
          className={`flex flex-col font-bold text-6xl md:text-7xl lg:text-8xl ${rampartOne.className}`}
        >
          <span>Contact me</span>
        </div>
      </TagWrapper>
      <TagWrapper tagName="p">
        <span>
          I am open htmlFor a full-time Full Stack Developer or React Developer
          job. Currently,I am working as a full-time Full Stack Developer in
          SoftSuave. With expertise in React and Node, I am working in MERN
          stack & TypeScript.. However, if you have other request or question,
          don’t hesitate to use the form.
        </span>
      </TagWrapper>
      <TagWrapper tagName="form">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
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
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <input
            type="subject"
            id="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Looking for..."
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <textarea
            rows={4}
            cols={50}
            id="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="message."
          />
        </div>
        <div className="flex justify-center">
          <Button>Send Message !</Button>
        </div>
      </TagWrapper>
    </div>
  );
};

export default Contact;
