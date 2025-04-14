/* eslint-disable @next/next/no-img-element */
import { StackCardProps } from "@/app/interface";
import Image from "next/image";
import React from "react";

const StackCard: React.FC<StackCardProps> = ({ stack }) => {
  return (
    <div
      className="w-[330px] md:w-[300px] h-[400px] backdrop-blur-lg bg-[#0000000f] flex flex-col border-[#72006A] border-2 pt-2 rounded-2xl 
                 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl  hover:text-white"
    >
      <h2 className="pt-4 pb-2 text-center font-bold">{stack.stack.name}</h2>
      <div className="p-[0.2px] bg-[#ffffff58] mx-10"></div>
      <div className="ms-10 my-6 text-sm">
        {stack.technologies.map((item) => (
          <div className="py-1 flex items-center" key={item.id}>
            <Image
              src={item.image}
              alt={""}
              width={24}
              height={24}
              className="object-cover mr-2 rounded-full"
            />
            <p className="text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackCard;
