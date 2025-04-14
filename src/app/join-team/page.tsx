/* eslint-disable react/no-unescaped-entities */
"use client";
import { div, section } from "framer-motion/client";
import React from "react";

const JoinOurCreativeTeam = () => {
  return (
    <section className="py-28 text-white bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] px-5 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Join Our Creative Team</h1>
          <p className="text-lg mb-4">
            At CoderMat, we're always looking for talented, driven individuals
            to join our dynamic and creative team. If you're passionate about
            web development, design, and making an impact through technology,
            you're in the right place!
          </p>
          <p className="text-lg mb-4">
            We value innovation, collaboration, and the ability to solve complex
            problems. Whether you're a seasoned developer or just starting your
            career, you'll have the opportunity to work on exciting projects
            that make a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1a1a1a]/40 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Why Work with Us?</h3>
            <p className="text-sm mb-4">
              - Work on innovative and challenging projects
            </p>
            <p className="text-sm mb-4">- Grow and expand your skillset</p>
            <p className="text-sm mb-4">- Collaborate with a passionate team</p>
            <p className="text-sm mb-4">
              - Flexible working hours and remote opportunities
            </p>
          </div>
          <div className="bg-[#1a1a1a]/40 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Current Openings</h3>
            <p className="text-sm mb-4">
              We're currently hiring for the following positions:
            </p>
            <ul className="list-disc pl-5 text-sm mb-4">
              <li>Web Developer</li>
              <li>UI/UX Designer</li>
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>Project Manager</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Join Us?</h3>
          <p className="text-lg mb-8">
            If you’re ready to take the next step in your career and join a team
            of passionate individuals, we’d love to hear from you. Please drop
            your resume and portfolio to the email below.
          </p>
          <p className="text-lg mb-4">
            Send your resume and portfolio to:{" "}
            <a
              href="mailto:careers@codermat.com"
              className="text-blue-600 hover:underline"
            >
              codermatteam@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinOurCreativeTeam;
