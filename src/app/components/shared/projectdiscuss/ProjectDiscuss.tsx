import Link from "next/link";
import React from "react";

const ProjectDiscuss = () => {
  return (
    <div className="text-center z-10 py-10 md:py-20 text-white px-5">
      <h1 className="font-bold md:text-4xl text-2xl">
        Let’s Discuss Your Project
      </h1>
      <p className="lg:text-xl  md:w-7/12 m-auto pt-4 text-sm">
        We’re ready to dive into your project goals and transform them into an
        outstanding digital product. Reach out to us for a complimentary
        consultation, and let’s make your vision a reality!
      </p>
      <button className="mt-5 bg-gradient-to-r mb-2 border-4 md:text-lg text-md gap-2 border-[#ffffffb2] from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 border-l-0 border-t-0 border-[#ffffff] my-8 py-2 px-6 rounded-lg border-light-200">
        SCHEDULE A DISCOVERY CALL
      </button>
      <p className="cursor-pointer underline">
        <Link href="/contactUs">
          Or, Use this form to tell us about your needs.
        </Link>
      </p>
    </div>
  );
};

export default ProjectDiscuss;
