"use client";
import Image from "next/image";
import ProjectDiscuss from "../components/shared/projectdiscuss/ProjectDiscuss";
import Service from "./services/services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
const Services = () => {
  return (
    <main className="pt-10 bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42]">
      <div>
        <Service></Service>
      </div>
      <div className="text-white border-t">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div className="border-t">
        <ProjectDiscuss></ProjectDiscuss>
      </div>
      <div>
        <Image
          className="w-full"
          src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
          alt=""
          width={1920}
          height={1080}
        />
      </div>
    </main>
  );
};

export default Services;
