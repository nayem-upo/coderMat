import Image from "next/image";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="md:mx-auto mx-8 md:max-w-7xl">
      <div className="md:py-20 py-10">
        <h1 className="text-center font-bold md:text-4xl text-2xl">
          What People Are Saying
        </h1>
        <p className="text-center text-xl md:w-1/2 m-auto pt-4">
          Your Success is Our Mission from Day One{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:py-20">
        <div className="h-[300px] bg-[#5c347d41] backdrop-blur-md p-10 rounded-xl border-b-4 border-r-4 border-[#a033b1]">
          <div className="flex items-center gap-4">
            <Image
              className="size-16 object-cover rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
              alt=""
              width={64}
              height={64}
            />
            <div className="flex flex-col gap-3">
              <h1>
                Dean D. <span className="text-[#ffffff61]">Director</span>
              </h1>
              <div className="text-[#FF9E2A] flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </div>
          <p className="pt-6">
            “ Great quality products - Flags, programs for exceptional
            capacities, birthday, and occasion welcome are largely still
            mainstream on paper.”
          </p>
        </div>
        <div className="bg-[#5c347d41] backdrop-blur-md p-10 rounded-xl border-4 border-t-0 border-[#a033b1]">
          <div className="flex items-center gap-4">
            <Image
              className="size-16 object-cover rounded-full"
              src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
              alt=""
              width={64}
              height={64}
            />
            <div className="flex flex-col gap-3">
              <h1>
                Cristian L. <span className="text-[#ffffff61]">Manager</span>
              </h1>
              <div className="text-[#FF9E2A] flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </div>
          <p className="pt-6">
            “ Best services ever - Flags, programs for exceptional capacities,
            birthday, and are largely still mainstream on paper occasion
            welcome.”
          </p>
        </div>
        <div className="bg-[#5c347d41] backdrop-blur-md p-10 rounded-xl border-b-4 border-l-4 border-[#a033b1]">
          <div className="flex items-center gap-4">
            <Image
              className="size-16 object-cover rounded-full"
              src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
              alt=""
              width={64}
              height={64}
            />
            <div className="flex flex-col gap-3">
              <h1>
                Leonel R. <span className="text-[#ffffff61]">Designer</span>
              </h1>
              <div className="text-[#FF9E2A] flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </div>
          <p className="pt-6">
            “ Top noth support - Flags, programs for, birthday, and occasion
            welcome are largely still mainstream on paper exceptional
            capacities.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
