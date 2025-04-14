"use client";

import React, { useState } from "react";

const ClaimForm = () => {
  const [files, setFiles] = useState<File[]>([]); // State to store the selected files

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles)); // Convert FileList to array
    }
  };

  return (
    <section className="py-28 text-white bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] px-5 lg:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          Submit a Claim
        </h1>

        <form className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mt-6">
              1. Personal Information
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6">2. Claim Details</h2>
            <div className="space-y-4">
              <textarea
                placeholder="Describe your claim"
                rows={6} // Ensure rows is a number
                className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent"
              ></textarea>
              <input
                type="file"
                multiple
                onChange={handleFileChange} // Handle file input changes
                className="w-full p-3 border border-gray-300 rounded-lg text-white bg-transparent"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6">
              3. Terms and Conditions
            </h2>
            <p className="text-lg mb-4">
              By submitting this claim, you agree to our{" "}
              <a href="/terms-condition" className="text-blue-600 underline">
                Terms and Conditions
              </a>
              .
            </p>
          </section>

          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-6 bg-[#93239d] hover:bg-[#690f69] text-white rounded-lg"
            >
              Submit Claim
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ClaimForm;
