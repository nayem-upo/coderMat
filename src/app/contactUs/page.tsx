import React from "react";
import ContactForm from "../components/contact-form/contact-form";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-black pt-28 text-white bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] ">
      <h1 className="text-center font-bold text-4xl">Contact Us</h1>

      <ContactForm></ContactForm>
      <Image
        className="w-full"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
        layout="responsive"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default ContactUs;
