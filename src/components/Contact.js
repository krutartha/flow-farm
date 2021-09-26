import React from "react";

function Contact() {
  return (
    <div className="mt-12 w-full h-[41rem]">
      <div className="flex-col p-12 w-full items-center justify-center">
        <div className="flex text-4xl justify-center">Talk to us here:</div>
        <div className="flex mt-6 text-md justify-center">
          Send a "Hi" or a questions you have about the health benefits of vegetables, or a question regarding buying our produce.
        </div>
      </div>
      <div className="flex-col items-center justify-center p-3 ">
        <div className="flex w-full justify-center items-center md:flex">
          <input className="p-3 w-[80%] h-10 rounded-md shadow-lg outline-none md:w-[40%]" placeholder="Name"></input>
        </div>
        <div className="mt-5 flex justify-center w-full">
          <input className="p-3 w-[80%] h-10 rounded-md shadow-lg outline-none md:w-[40%]" placeholder="Email"></input>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <textarea className="flex p-3 w-[80%] h-40 rounded-md shadow-lg outline-none justify-start md:w-[40%]" placeholder="Message" />
        </div>
        <div className="mt-5 flex w-full justify-center">
          <div className="flex bg-[#CF404D] w-[60%] h-10 shadow-xl justify-center items-center text-white rounded-md hover:cursor-pointer hover:shadow-2xl md:w-[40%]">
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
