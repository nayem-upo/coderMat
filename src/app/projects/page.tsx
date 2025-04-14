"use client";
import React, { useEffect, useState } from "react";
import { Project } from "@/app/interface";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/OurLatestProjects/ProjectCard";
import PrimaryBtn from "../components/shared/customized-component/PrimaryBtn";
import FAQ from "../components/FAQ/faq";
import ProjectDiscuss from "../components/shared/projectdiscuss/ProjectDiscuss";

// Skeleton Loader
const ProjectCardSkeleton = () => {
  return (
    <div className="md:w-[390px] md:h-[660px] w-[320px] mx-auto backdrop-blur-md bg-[#2b1d3469] flex flex-col items-start rounded-2xl text-white animate-pulse">
      <div className="w-full h-[260px] bg-white/20 rounded-t-2xl"></div>
      <div className="h-8 my-6 bg-white/20 rounded w-3/4 mb-5 mx-4"></div>

      <div className="h-6 bg-white/20 rounded w-1/2 mb-5 mx-4"></div>
      <div className="h-5 bg-white/20 rounded w-[350px] mb-5 mx-4"></div>
      <div className="h-5 bg-white/20 rounded w-[350px] mb-5 mx-4"></div>
      <div className="h-6 bg-white/20 rounded w-1/2 mb-5 mx-4"></div>
      <div className="h-5 bg-white/20 rounded w-[350px] mb-5 mx-4"></div>
      <div className="h-12 bg-white/20 rounded w-[130px] mt-auto mb-5 mx-4"></div>
    </div>
  );
};

const Projetcs = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(10); // Initial number of visible projects
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
    <div className="text-white min-h-screen ">
      <Image
        className="absolute py-52"
        width={500}
        height={500}
        src="https://i.ibb.co/9bBMgsX/Background.png"
        alt="Background"
      />
      <div className="lg:mx-10 max-w-7xl mx-auto pb-20">
        <div className="pt-20 md:pt-28 pb-16">
          <h1 className="text-center font-bold md:text-4xl text-2xl">
            Our Latest Projects
          </h1>
          <p className="text-center px-5 md:w-1/2 mx-auto pt-2 md:pt-4">
            Explore Our Successful Projects: See How We Bring Ideas to Life!!!!
          </p>
        </div>

        {/* Grid of project cards */}
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 lg:mr-16 items-center justify-center gap-4 lg:gap-20 relative px-4">
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
      </div>
      <div className="border-t">
        <ProjectDiscuss></ProjectDiscuss>
      </div>
      <div className="border-t">
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Projetcs;
