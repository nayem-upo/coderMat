"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/interface";
import PrimaryBtn from "../shared/customized-component/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";

const ProjectCardSkeleton = () => {
  return (
    <div className="w-[330px] lg:w-[380px] h-[600px] md:h-[580px] mx-auto backdrop-blur-md bg-[#2b1d3469] flex flex-col rounded-2xl text-white animate-pulse overflow-hidden">
      {/* Image skeleton - exact match to original */}
      <div className="w-full h-[230px] bg-white/20"></div>

      {/* Content container - exact padding match */}
      <div className="p-7 flex flex-col flex-grow">
        {/* Project name - matches text-xl size */}
        <div className="h-7 bg-white/20 rounded w-3/4 mb-4"></div>

        {/* Description section */}
        <div className="mb-5">
          <div className="h-5 bg-white/20 rounded w-1/3 mb-3"></div>
          <div className="space-y-2">
            <div className="h-4 bg-white/20 rounded w-full"></div>
            <div className="h-4 bg-white/20 rounded w-4/5"></div>
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
          </div>
        </div>

        {/* Technologies section */}
        <div className="mb-5">
          <div className="h-5 bg-white/20 rounded w-1/3 mb-3"></div>
          <div className="h-4 bg-white/20 rounded w-full"></div>
        </div>

        {/* Button - matches exact position and size */}
        <div className="mt-auto w-[130px] h-10 bg-white/20 rounded-md ml-[-8px]"></div>
      </div>
    </div>
  );
};

const Projetcs = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(3); // Initial number of visible projects
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("ourProjects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);

  const showMoreProjects = () => {
    setVisibleProjects(projects.length); // Show all projects when the button is clicked
  };

  return (
    <div className="text-white min-h-screen">
      <Image
        className="absolute py-52"
        width={500}
        height={500}
        src="https://i.ibb.co/9bBMgsX/Background.png"
        alt="Background"
      />
      <div className="lg:mx-12">
        <div className="py-10 md:py-20 px-5  md:px-0">
          <h1 className="text-center font-bold md:text-4xl text-2xl">
            Our Latest Projects
          </h1>
          <p className="text-center md:w-1/2 m-auto pt-2 md:pt-4">
            Explore Our Successful Projects: See How We Bring Ideas to Life!!!!
          </p>
        </div>

        {/* Grid of project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto items-center justify-center lg:gap-x-8 lg:gap-y-10 gap-y-10 relative px-5 md:px-8 lg:px-0">
          {loading
            ? // Render skeleton loader while loading
            Array.from({ length: visibleProjects }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))
            : // Render actual project cards after data is fetched
            projects
              .slice(0, visibleProjects)
              .map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
        </div>

        {/* Show more projects button */}

        <Link href="/projects">
          <div className="text-center py-16">
            <PrimaryBtn
              className="px-6 py-2 rounded-xl"
              onClick={showMoreProjects}
            >
              Show More
            </PrimaryBtn>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projetcs;
