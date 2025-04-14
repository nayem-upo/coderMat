import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#22102F] text-white">
      <div className="bg-[#6461616d] p-[1px] md:mb-12 mb-8" />

      <div className="max-w-7xl 2xl:max-w-[105rem] mx-auto px-5 md:px-10">
        <div className="md:flex justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-sm mt-2 mb-2">
              Get the latest insights, design trends, and web development news
              from CoderMat.
            </p>
            <p className="text-xs text-[#b8b8b8]">
              Hand-crafted updates from our creative minds, weekly.
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center h-[40px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-72 resize-none px-2 py-[10px] bg-[#ffffff00] border border-[#6461616d] rounded-lg text-white focus:outline-none"
            />
            <button className="py-[10px] border-2 flex items-center gap-2 border-[#7272723c]  bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-2 md:px-5 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-[#6461616d] p-[0.3px] my-10" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left">
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">
              SOLUTIONS
            </h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/services"> Web Development</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/services">UI/UX Design</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/services">E-commerce Platforms</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/services">CMS & Dashboard</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">
              SUPPORT
            </h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/faq">FAQ</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/contactUs">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">
              COMPANY
            </h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/services">Services</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/about">About</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/blogs">Our Blog</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">LEGAL</h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/claim">Claim</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/terms-condition">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">
              CAREER
            </h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/join-team">Join Our Creative Team</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center border-t border-[#6461616d] pt-6 flex flex-col md:flex-row justify-between items-center pb-7">
          <p className="text-sm order-2 md:order-1 mt-5 md:mt-0">
            © 2025 <strong>CoderMat</strong>. All rights reserved.
          </p>

          <div className="mt-4 flex justify-center space-x-6 order-1 md:order-2">
            <a
              href="https://www.facebook.com/codermat"
              target="_blank"
              className="w-8 h-8 rounded-full hover:bg-[#93239d] duration-150"
            >
              <Image
                src="https://i.ibb.co/RTMngt9/logo-facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://twitter.com/codermat"
              target="_blank"
              className="w-8 h-8 rounded-full hover:bg-[#93239d] duration-150"
            >
              <Image
                src="https://i.ibb.co/yh5pjSH/logo-twitter.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/codermat"
              target="_blank"
              className="w-8 h-8 rounded-full hover:bg-[#93239d] duration-150"
            >
              <Image
                src="https://i.ibb.co/9hkzwqC/logo-instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://github.com/codermat03"
              target="_blank"
              className="w-8 h-8 rounded-full hover:bg-[#93239d] duration-150"
            >
              <Image
                src="https://i.ibb.co/Zf6dH50/logo-github.png"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/+8801910882903"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CoderMat on WhatsApp"
      >
        <div className="fixed bottom-[30px] right-1 z-50">
          <button className="rounded-full hover:bg-[#66237e] transition-all duration-200">
            <Image
              className="w-10 md:w-14"
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
              alt="WhatsApp"
              width={56}
              height={56}
            />
          </button>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
