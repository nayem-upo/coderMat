"use client";
import React, { useEffect, useState } from "react";
import StackCard from "./StackCard";
import Image from "next/image";
import { Technology } from "@/app/interface";

const SkeletonLoader = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-20 justify-items-center z-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-[330px] md:w-[300px] h-[400px] backdrop-blur-lg bg-[#0000000f] flex flex-col border-[#72006A] border-2 pt-2 rounded-2xl"
        >
          <div className="animate-pulse flex flex-col">
            {/* Stack name */}
            <div className="h-6 bg-white/20 rounded w-3/4 mx-auto mt-4 mb-2"></div>

            {/* Divider line - matches original */}
            <div className="p-[0.2px] bg-[#ffffff58] mx-10"></div>

            {/* Technologies - matches original spacing */}
            <div className="ms-10 my-6 text-sm space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center py-1">
                  {/* Skeleton for technology icon */}
                  <div className="h-6 w-6 bg-white/20 rounded-full mr-2"></div>
                  {/* Skeleton for technology name */}
                  <div className="h-4 bg-white/20 w-24 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TechnologyStack = () => {
  // State for tech stack data
  const [techStack, setTechStack] = useState<Technology[]>([]);
  // State for loading
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetch delay to show loader
    setTimeout(() => {
      fetch("/technologies.json")
        .then((res) => res.json())
        .then((data) => {
          setTechStack(data);
          setLoading(false); // Set loading to false after data is fetched
        });
    }, 1000); // Adjust timeout as needed
  }, []);

  return (
    <div className="py-10 md:py-20 text-white relative">
      <h1 className="text-center font-bold md:text-4xl text-2xl">
        Our Technology Stack
      </h1>
      <p className="text-center md:w-1/2 mx-auto pt-2 md:pt-4 px-5 md:px-0">
        Building the Future with Innovative and Reliable Technologies
      </p>

      <Image
        className="absolute py-32"
        width={500}
        height={500}
        src="https://i.ibb.co/9bBMgsX/Background.png"
        alt="Background"
      />

      {/* Show skeleton loader when data is loading */}
      {loading ? (
        <div className="relative z-10">
          <SkeletonLoader />
        </div>
      ) : (
        // Grid of technology stack
        <div className="max-w-5xl 2xl:max-w-[105rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-y-10 mt-10 md:mt-20 justify-items-center z-0">
          {techStack.map((stack) => (
            <StackCard stack={stack} key={stack.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TechnologyStack;
