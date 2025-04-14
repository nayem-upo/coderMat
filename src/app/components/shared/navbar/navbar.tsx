"use client";
import { useState, useEffect } from "react";
import { FaBootstrap, FaNode, FaReact } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

import { IoIosArrowDown } from "react-icons/io";
import {
  SiCloudinary,
  SiExpress,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenTech, setDropdownOpenTech] = useState(false);
  const [dropdownOpenNav, setDropdownOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`roboto-regular tracking-wide py-3 fixed top-0 left-0 w-full transition-colors duration-300 z-30  ${
        scrolled ? "bg-[#21112e] bg-opacity-85 shadow-2xl " : "bg-transparent "
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[105rem] mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center  justify-between md:h-16">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  className="w-28 lg:w-[150px]"
                  src="https://i.postimg.cc/pXrT6fkh/Rectangle-4.png"
                  alt="CoderMat"
                  width={112}
                  height={400}
                />
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex flex-1 justify-center sm:ml-6">
            <div className="relative flex items-center  space-x-4 z-40">
              <Link
                href="/"
                onClick={() => setActiveLink("home")}
                className={`${
                  activeLink === "home"
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium`}
              >
                Home
              </Link>
              <div
                className="relative flex justify-center"
                onMouseEnter={() => setDropdownOpenTech(true)}
                onMouseLeave={() => setDropdownOpenTech(false)}
              >
                <Link
                  href="/services"
                  onClick={() => {
                    setActiveLink("services");
                    setDropdownOpenTech(!dropdownOpenTech);
                  }}
                  className={`${
                    activeLink === "services"
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/20 hover:text-white"
                  } px-3 py-2 rounded-md  font-medium  flex items-center  gap-2`}
                >
                  Services
                  <IoIosArrowDown></IoIosArrowDown>
                </Link>
                {dropdownOpenTech && (
                  <div
                    className="absolute -left-[290px]  mt-10 w-max  backdrop-blur-3xl bg-[#381c4489] border-[#72006A] border-2 rounded-xl text-white shadow-lg p-6 grid grid-cols-4 gap-4"
                    style={{ minWidth: "300px" }} // Adjust minWidth as needed
                  >
                    {/* Services Dropdown Content */}
                    <div>
                      <h3 className="font-bold  mb-4">
                        Custom Web Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom Web Design",
                          "Responsive Layouts",
                          "User-Friendly Interfaces",
                          "Scalable Solutions",
                          "Fast Load Times",
                          "SEO Optimization",
                          "Advanced Security",
                          "Ongoing Support",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center  text-[12px]"
                          >
                            <span className="flex-shrink-0 w-1 h-1 bg-white rounded-full mr-2"></span>
                            <a href="#" className=" font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold  mb-4">
                        Web Portal Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom Portal Solutions",
                          "Responsive Layouts",
                          "Secure User Authentication",
                          "Multi-Device Compatibility",
                          "User-Friendly Interfaces",
                          "Real-Time Analytics",
                          "Advanced Search Features",
                          "Ongoing Maintenance",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-[12px]"
                          >
                            <span className="flex-shrink-0 w-1 h-1 bg-white rounded-full mr-2"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold  mb-4">
                        E-commerce Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom Online Stores",
                          "Payment Gateway Integration",
                          "Product Management",
                          "Secure Transactions",
                          "Mobile-Friendly Design",
                          "User Account Management",
                          "SEO-Friendly Features",
                          "Order Tracking Systems",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-[12px]"
                          >
                            <span className="flex-shrink-0 w-1 h-1 bg-white rounded-full mr-2"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold  mb-4">WordPress Development</h3>
                      <ul className="space-y-2">
                        {[
                          "Custom Themes",
                          "Plugin Integration",
                          "Responsive Design",
                          "SEO Optimization",
                          "Content Management",
                          "E-commerce Solutions",
                          "Speed Optimization",
                          "Ongoing Support",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-[12px]"
                          >
                            <span className="flex-shrink-0 w-1 h-1 bg-white rounded-full mr-2"></span>
                            <a href="#" className="font-semibold">
                              {item}t{" "}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold  mb-4">UI & UX Design</h3>
                      <ul className="space-y-2">
                        {[
                          "User-Centered Design",
                          "Intuitive Interfaces",
                          "Responsive Layouts",
                          "Wireframing & Prototyping",
                          "Visual Consistency",
                          "Engaging User Experience",
                          "Cross-Platform Compatibility",
                          "Usability Testing",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-[12px]"
                          >
                            <span className="flex-shrink-0 w-1 h-1 bg-white rounded-full mr-2"></span>
                            <a href="#" className=" font-semibold">
                              {item}t{" "}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold  mb-4">
                        Front-end Web Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom UI/UX Design",
                          "Interactive Interfaces",
                          "Responsive Design",
                          "HTML/CSS/JavaScript Expertise",
                          "Fast Load Times",
                          "Mobile Optimization",
                          "SEO-Friendly Code",
                          "User-Focused Layouts",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-[12px]"
                          >
                            <span className="flex-shrink-0 w-1 h-1 bg-white rounded-full mr-2"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold  mb-4">
                        Back-end Web Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Database Integration",
                          "Server-Side Scripting",
                          "API Development",
                          "Secure Data Handling",
                          "Scalable Architecture",
                          "Performance Optimization",
                          "Content Management Systems",
                          "Third-Party Integrations",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center text-[12px]"
                          >
                            <span className="flex-shrink-0 w-1 h-1 bg-white rounded-full mr-2"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative flex justify-center"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href="/Technologies"
                  onClick={() => {
                    setActiveLink("technologies");
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className={`${
                    activeLink === "technologies"
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/20 hover:text-white"
                  } px-3 py-2 rounded-md font-medium flex items-center gap-2`}
                >
                  Technologies
                  <IoIosArrowDown />
                </Link>
                {dropdownOpen && (
                  <div
                    className="absolute -left-[360px] mt-10 w-max backdrop-blur-3xl bg-[#381c4489] border-[#72006A] border-2 rounded-xl text-white shadow-lg p-6 grid grid-cols-4 gap-4"
                    style={{ minWidth: "300px" }}
                  >
                    {/* MERN-Stack Dropdown Content */}
                    <div>
                      <h3 className="font-bold">MERN-Stack</h3>
                      <ul>
                        <li>
                          <a
                            href="https://react.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/JHL2Pd5/react.png"
                              alt="React JS"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            React JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://nodejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/PWFDZ3b/nodejs.png"
                              alt="Node JS"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Node JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://expressjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/frpdrGT/Express.png"
                              alt="Express JS"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Express JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.mongodb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/X2JL6BY/mongodb.png"
                              alt="MongoDB"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            MongoDB
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Front-End Dropdown Content */}
                    <div>
                      <h3 className="font-bold">Front-End</h3>
                      <ul>
                        <li>
                          <a
                            href="https://react.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/JHL2Pd5/react.png"
                              alt="React JS"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            React JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/5W5q0CY/nextjs.png"
                              alt="Next JS"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Next JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/BnVxMSs/js.png"
                              alt="JavaScript"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            JavaScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.typescriptlang.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/Jy6bMst/ts.png"
                              alt="TypeScript"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            TypeScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://redux.js.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/pbz2PWm/redux.png"
                              alt="Redux"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Redux
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tailwindcss.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/3hXsTg1/tailwind.png"
                              alt="Tailwind"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Tailwind
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://vuejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://w7.pngwing.com/pngs/595/279/png-transparent-vue-js-javascript-library-angularjs-react-vue-js-template-angle-text-thumbnail.png"
                              alt="Vue.js"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Vue.js
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://angular.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUcQofbdW28AoTCjLFzojT7sSZQVsEurWQA&s"
                              alt="Angular"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Angular
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Back-End Dropdown Content */}
                    <div>
                      <h3 className="font-bold">Back-End</h3>
                      <ul>
                        <li>
                          <a
                            href="https://nodejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/PWFDZ3b/nodejs.png"
                              alt="Node JS"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Node JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://expressjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/frpdrGT/Express.png"
                              alt="Express JS"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Express JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.python.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-1713885634631.webp"
                              alt="Python"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Python
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.djangoproject.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png"
                              alt="Django"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Django
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.java.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM3JO-10pqUHbWWP5tuOo-9LKUZhogZEEww&s"
                              alt="Java"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Java
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://dotnet.microsoft.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://w7.pngwing.com/pngs/929/60/png-transparent-net-framework-c-net-core-software-framework-mono-studio-purple-studio-violet-thumbnail.png"
                              alt="C#"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            C#
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.php.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                              alt="PHP"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            PHP
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://laravel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png"
                              alt="Laravel"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Laravel
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Database Dropdown Content */}
                    <div>
                      <h3 className="font-bold">Database</h3>
                      <ul>
                        <li>
                          <a
                            href="https://www.mongodb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/X2JL6BY/mongodb.png"
                              alt="MongoDB"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            MongoDB
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.postgresql.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/SwQHDwN/Postgresql.png"
                              alt="PostgresQL"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            PostgresQL
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.mysql.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png"
                              alt="MySQL"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            MySQL
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://firebase.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuawUuQCcq6fD-KpdmL4QixUOyqQqdrVNIDg&s"
                              alt="Firebase"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Firebase
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mongoosejs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://i.ibb.co/3SdzPRZ/mongoose.png"
                              alt="Mongoose"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Mongoose
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* UI/UX Design Dropdown Content */}
                    <div>
                      <h3 className="font-bold">UI/UX Design</h3>
                      <ul>
                        <li>
                          <a
                            href="https://www.figma.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                              alt="Figma"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Figma
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.adobe.com/products/xd.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png"
                              alt="Adobe XD"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Adobe XD
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.sketch.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oCenqvw4j6W7oaiG2scIQiHcGC-FpTu63g&s"
                              alt="Sketch"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Sketch
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* CMS & E-commerce Dropdown Content */}
                    <div>
                      <h3 className="font-bold">CMS & E-commerce</h3>
                      <ul>
                        <li>
                          <a
                            href="https://wordpress.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png"
                              alt="WordPress"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            WordPress
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.shopify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gV071l8VQBqOvaWyMctGOQ7zD30Z77Swyg&s"
                              alt="Shopify"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Shopify
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://business.adobe.com/products/magento/magento-commerce.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://w7.pngwing.com/pngs/1024/250/png-transparent-magento-e-commerce-logo-wordpress-miscellaneous-angle-company-thumbnail.png"
                              alt="Magento"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Magento
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://webflow.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1 flex items-center gap-2"
                          >
                            <Image
                              src="https://img.icons8.com/color/512/webflow.png"
                              alt="Web Flow"
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            Web Flow
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                onClick={() => setActiveLink("About ")}
                className={`${
                  activeLink === "About "
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                About
              </Link>
              <Link
                href="/projects"
                onClick={() => setActiveLink("projects")}
                className={`${
                  activeLink === "projects"
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                Projects
              </Link>
              <Link
                href="/pricing"
                onClick={() => setActiveLink("pricing")}
                className={`${
                  activeLink === "pricing"
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                Pricing
              </Link>
              <Link
                href="/blogs"
                onClick={() => setActiveLink("Blogs")}
                className={`${
                  activeLink === "Blogs"
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                Blogs & News
              </Link>
            </div>
          </div>

          {/* Add this for mid-sized (tablet) devices */}
          <div className="md:flex relative hidden lg:hidden">
            <span
              onClick={() => setDropdownOpenNav(!dropdownOpenNav)}
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium cursor-pointer"
            >
              <FaAnglesRight />
            </span>
            {dropdownOpenNav && (
              <div className="absolute top-12 bg-white text-black rounded-md w-40 shadow-lg p-2">
                <Link
                  href="/about"
                  onClick={() => setActiveLink("About")}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    activeLink === "About"
                      ? "bg-gray-100 text-black"
                      : "hover:bg-gray-200"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setActiveLink("pricing")}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    activeLink === "pricing"
                      ? "bg-gray-100 text-black"
                      : "hover:bg-gray-200"
                  }`}
                >
                  Pricing
                </Link>
                <a
                  href="/projects"
                  onClick={() => setActiveLink("projects")}
                  className="block px-3 py-2 rounded-md font-medium text-black hover:bg-gray-200"
                >
                  Projects
                </a>
                <Link
                  href="/blogs"
                  onClick={() => setActiveLink("Blogs")}
                  className="block px-3 py-2 rounded-md font-medium text-black hover:bg-gray-200"
                >
                  Blogs & News
                </Link>
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              href={`/contactUs`}
              className="flex items-center  text-base py-2 gap-2 text-white mt-auto ml-5 border-2 border-[#c1c1c13c]  bg-gradient-to-r hover:bg-gradient-to-l hover:from-[#49156D] hover:to-[#691a86] hover:border-[#a33ed2] from-[#6C00A5] to-[#6A0170] duration-150 px-5 rounded-md"
            >
              Contact Us{" "}
              <div>
                <Image
                  className="w-4"
                  src="https://i.ibb.co.com/gVjzd78/line-1.png"
                  alt=""
                  width={16}
                  height={16}
                />
              </div>
            </Link>
          </div>

          <div className="sm:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center  z-50 justify-center p-2 rounded-md hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 focus:ring-1 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" // Cross (X) icon for the open state
                      : "M4 6h16M4 12h16M4 18h16" // Three equal horizontal lines for the closed state
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-l from-[#36184bdd] to-[#49165C] text-white z-40 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <h2 className="text-white text-lg font-bold">Menu</h2>
        </div>
        <div className="px-4 py-6 space-y-4">
          <a
            href="/"
            onClick={() => setActiveLink("home")}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeLink === "home"
                ? "bg-gradient-to-l from-[#49156D] to-[#930087] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
                : "hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
            }`}
          >
            Home
          </a>
          <div className="relative">
            <a
              href="/services"
              onClick={() => {
                setActiveLink("services");
                setDropdownOpenTech(!dropdownOpenTech); // Toggle services dropdown
              }}
              className={`px-3 py-2 rounded-md text-base font-medium flex items-center  justify-between ${
                activeLink === "services"
                  ? "bg-gradient-to-l from-[#49156D] to-[#930087] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
                  : "hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
              }`}
            >
              Services
              <IoIosArrowDown
                className={`transform transition-transform duration-300 ${
                  dropdownOpenTech ? "rotate-180" : ""
                }`}
              />
            </a>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                dropdownOpenTech ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="backdrop-blur-3xl bg-[#381c4489] border-[#72006A] border-2 rounded-md text-white shadow-lg mt-2 p-4">
                <ul className="space-y-2">
                  <li className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-full">
                    Custom Web Application Development
                  </li>
                  <li className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-full">
                    Web Portal Development
                  </li>
                  <li className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-full">
                    E-commerce Development
                  </li>
                  <li className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-full">
                    WordPress Development
                  </li>
                  <br />
                  <li className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-full">
                    UI & UX Design
                  </li>
                  <li className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-full">
                    Front-end Web Development
                  </li>
                  <li className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-full">
                    Back-end Web Development
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <a
              href="/Technologies"
              onClick={() => {
                setActiveLink("technologies");
                setDropdownOpen(!dropdownOpen); // Toggle technologies dropdown
              }}
              className={`px-3 py-2 rounded-md text-base font-medium flex items-center  justify-between ${
                activeLink === "technologies"
                  ? "bg-gradient-to-l from-[#49156D] to-[#930087] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
                  : "hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
              }`}
            >
              Technologies
              <IoIosArrowDown
                className={`transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </a>
            <div
              className={`transition-all duration-300 ease-out overflow-hidden ${
                dropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              } backdrop-blur-3xl bg-[#381c4489] border-[#72006A] border-2 rounded-md text-white shadow-lg`}
            >
              {/* Adjust grid-cols for responsiveness */}
              <div className="px-4 pt-2">
                <h3 className="font-bold">MERN-Stack</h3>
                <ul>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <SiMongodb /> MongoDB
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <SiExpress /> Express JS
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <FaReact /> React JS
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <FaNode /> Node JS
                  </li>
                </ul>
              </div>

              <div className="mt-2 px-4 pb-2">
                <h3 className="font-bold">Front-End</h3>
                <ul>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <FaReact /> React JS
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <SiNextdotjs /> Next JS
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <IoLogoJavascript /> JavaScript
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <SiTypescript /> TypeScript
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <SiRedux /> Redux
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <SiTailwindcss /> Tailwind
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <FaBootstrap /> Bootstrap
                  </li>
                  <li className="flex items-center  gap-2 relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#942b8d] after:transition-all after:duration-300 hover:after:w-1/2">
                    <SiMui /> Material UI
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            href="/about"
            onClick={() => setActiveLink("about")}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeLink === "about"
                ? "bg-gradient-to-l from-[#49156D] to-[#930087] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
                : "hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
            }`}
          >
            About
          </a>
          <a
            href="/pricing"
            onClick={() => setActiveLink("pricing")}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeLink === "pricing"
                ? "bg-gradient-to-l from-[#49156D] to-[#930087] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
                : "hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
            }`}
          >
            Pricing
          </a>

          <a
            href="/projects"
            onClick={() => setActiveLink("projects")}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeLink === "projects"
                ? "bg-gradient-to-l from-[#49156D] to-[#930087] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
                : "hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
            }`}
          >
            Projects
          </a>
          <a
            href="/blogs"
            onClick={() => setActiveLink("blogs")}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeLink === "blogs"
                ? "bg-gradient-to-l from-[#49156D] to-[#930087] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
                : "hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150"
            }`}
          >
            Blogs & News
          </a>
          <div className="flex justify-center">
            <button className="text-white border-2 py-2 border-[#c1c1c13c]  bg-gradient-to-r hover:bg-gradient-to-l hover:from-[#49156D] hover:to-[#691a86] hover:border-[#a33ed2] from-[#6C00A5] to-[#6A0170] duration-150 px-5 rounded-md">
              Choose Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
