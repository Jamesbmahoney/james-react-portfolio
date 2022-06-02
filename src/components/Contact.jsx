import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/72e2becd-3c59-4ab0-9bf5-c6c58a726ca0"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#800040] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below/shoot me an email - jbm03003@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#800040] hover:border-[#800040] px-4 py-4 my-8 mx-auto flex items-center">
          Let's Connect!
        </button>
      </form>
    </div>
  );
};

export default Contact;
