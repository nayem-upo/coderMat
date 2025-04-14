"use client";
import React, { useRef, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null); // Correct type for formRef

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          "service_u0e6rrn", // Service ID
          "template_ctk2p65", // Template ID
          formRef.current, // Correct reference
          "UANiDaV9CE5zcmzkX" // Public Key
        );

        // Display toast notification
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        // Clear form inputs
        formRef.current.reset();
      } catch (error) {
        toast.error("❌ Failed to send the message. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
    }
  };

  return (
    <section className="text-white md:pt-20 py-10">
      <ToastContainer />
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 content-center gap-8">
        {/* Contact Info Section */}
        <div>
          <h3 className="md:text-left text-center text-2xl lg:text-4xl font-semibold mb-2 md:mb-4">
            Contact Info
          </h3>
          <p className="mb-6 text-[#898989] md:text-left text-center">
            Reach Out to Us for Your Next Project or Inquiry. We're Here to
            Help!
          </p>
          <div className="flex items-center mb-4">
            <AiOutlineMail className="text-xl mr-2" />
            <a href="mailto:support@website.com" className="text-white">
              codermatteam@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <AiOutlinePhone className="text-xl mr-2" />
            <a href="tel:+14805550103" className="text-white">
              +8801910882903
            </a>
          </div>
          <div className="md:w-[320px]">
            <Image
              src="https://i.postimg.cc/BnhzgkBQ/ccccc.png"
              alt="Image description"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
          <form ref={formRef} className="grid gap-4" onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Your name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email address</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@gmail.com"
                  className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Phone number</label>
                <input
                  type="text"
                  name="user_phone"
                  placeholder="20 111 2345 6789"
                  className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Type here"
                  className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Type here"
                className="w-full h-[150px] resize-none p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="md:ms-auto mt-auto border-2 flex items-center gap-2 border-[#7272723c] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
