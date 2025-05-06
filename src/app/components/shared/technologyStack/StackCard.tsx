/* eslint-disable @next/next/no-img-element */
import { StackCardProps } from "@/app/interface";
import Image from "next/image";
import './custom.css';
import React from "react";

const StackCard: React.FC<StackCardProps> = ({ stack }) => {
  return (
    <div className="w-[330px] md:w-[300px] h-[400px] container noselect">
      <div className="canvas">
        {/* Tracker background elements */}
        <div className="tracker tr-1"></div>
        <div className="tracker tr-2"></div>
        <div className="tracker tr-3"></div>
        <div className="tracker tr-4"></div>
        <div className="tracker tr-5"></div>
        <div className="tracker tr-6"></div>
        <div className="tracker tr-7"></div>
        <div className="tracker tr-8"></div>
        <div className="tracker tr-9"></div>

        {/* Main card */}
        <div id="card">
          <div className="card-content">
            {/* Cyber animated effects */}
            <div className="card-glare"></div>
            <div className="cyber-lines">
              <span></span><span></span><span></span><span></span>
            </div>
            <div className="glowing-elements">
              <div className="glow-1"></div>
              <div className="glow-2"></div>
              <div className="glow-3"></div>
            </div>
            <div className="card-particles">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="corner-elements">
              <span></span><span></span><span></span><span></span>
            </div>
            <div className="scan-line"></div>

            {/* Your original content */}
            <div className="pt-2 px-4 flex flex-col">
              <h2 className="pt-4 pb-2 text-center font-bold text-white">
                {stack.stack.name}
              </h2>
              <div className="p-[0.2px] bg-[#ffffff58] mx-10"></div>
              <div className="ms-4 my-6 text-sm">
                {stack.technologies.map((item) => (
                  <div className="py-1 flex items-center" key={item.id}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={24}
                      height={24}
                      className="object-cover mr-2 rounded-full"
                    />
                    <p className="text-white">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* End of your content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
