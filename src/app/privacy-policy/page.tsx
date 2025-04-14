"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="py-28 text-white bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42]">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At <span className="font-semibold">CoderMat</span>, your privacy is
          important to us.
        </p>

        <p className="mb-6">
          We collect basic personal information like your name, email address,
          and project details to provide and improve our services. We do not
          sell or share your data with third parties.
        </p>

        <h2 className="text-xl font-semibold mb-2">What we collect:</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Contact information (name, email)</li>
          <li>Project-related data</li>
          <li>Website usage data (via cookies)</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">How we use your data:</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>To communicate with you</li>
          <li>To improve our services</li>
          <li>To provide technical support</li>
        </ul>

        <p className="mb-6">
          We use secure methods to store your data and respect your right to
          update or delete your information anytime.
        </p>

        <p>
          If you have any questions, email us at:{" "}
          <a
            href="mailto:support@codermat.com"
            className="text-blue-600 hover:underline"
          >
            codermatteam@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
