import { Project } from "@/app/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, description, image, project_name, technologies, liveLink } = project;

  return (
    <div className="group relative lg:w-[380px] h-[600px] md:h-[620px] lg:h-[580px] w-[330px] mx-auto backdrop-blur-md bg-[#2b1d3469] flex flex-col items-start rounded-2xl text-white hover:scale-105 transition-transform duration-300">

      {/* Scrollable Image on Hover */}
      <div className="relative overflow-hidden rounded-t-2xl h-[230px] w-full">
        <Image
          src={image}
          alt={project_name}
          width={390}
          height={500} // full image height
          className="absolute top-0 left-0 w-full object-cover transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[40%] group-hover:scale-105"
          priority
        />
      </div>


      <div className="p-7">
        <h2 className="py-4 text-xl font-bold">{project_name}</h2>
        <div>
          <h1 className="text-lg mt-2 text-[#A29CA6] font-bold">Description:</h1>
          <p className="text-lg mb-2 text-[#A29CA6]">{description}</p>
        </div>
        <div>
          <h1 className="text-lg mt-3 text-[#A29CA6] font-bold">Technologies:</h1>
          <p className="text-lg mb-2 text-[#A29CA6]">{technologies.join(", ")}</p>
        </div>
      </div>

      <button className="mt-auto mb-5 ml-5 border-2 flex items-center gap-2 border-[#7272723c] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md absolute -bottom-3">
        <Link
          href={`${liveLink}`}
          target="_blank"
          className="flex items-center gap-2"
        >
          Show Live
          <Image
            className="w-4"
            src="https://i.ibb.co/gVjzd78/line-1.png"
            alt="icon"
            width={16}
            height={16}
          />
        </Link>
      </button>
    </div>
  );
};

export default ProjectCard;
