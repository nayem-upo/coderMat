/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="md:pt-20 pt-10 bg-[url('https://i.ibb.co.com/Bq50dx0/chooseusbg.png')] bg-cover ">
        <h1 className="text-center font-bold md:text-4xl text-2xl animate-fade-in">
          Why choose CoderMat?
        </h1>
        <h3 className="text-center mt-2 md:mt-4">
          Empowering Your Digital Vision with Experts.
        </h3>
        <div className="grid lg:grid-cols-3 items-center justify-center md:my-20 my-10 gap-5 lg:gap-20">
          {/* Image Section */}
          <div className="relative self-center animate-zoom-in">
            <Image
              className="rounded-xl"
              width={350}
              height={350}
              src="https://img.freepik.com/free-vector/flat-people-asking-questions-illustrated_23-2148898772.jpg"
              alt="Background"
            />
            <Image
              className="absolute top-44 -right-6 animate-bounce-slow"
              width={200}
              height={200}
              src="https://i.ibb.co.com/FqsS3dH/Untitled-design-1.png"
              alt="Background"
            />
          </div>

          {/* Text Section 1 */}
          <div className="flex flex-col items-center self-center gap-5 lg:gap-10 animate-slide-up">
            <div>
              <h1 className="text-lg font-bold py-2">
                Team’s Seniority & Loyalty
              </h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, we value
                our team's seniority and loyalty. Our experienced professionals
                ensure top-quality results through collaboration and commitment,
                fostering long-term success for our clients and projects.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold py-2">Tech Diversity</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, our tech
                diversity ensures innovative solutions, leveraging the latest
                tools and trends for client success.
              </p>
            </div>
          </div>

          {/* Text Section 2 */}
          <div className="flex flex-col items-center self-center gap-5 lg:gap-10 animate-slide-up-delayed">
            <div>
              <h1 className="text-lg font-bold py-2">Versatility</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, our tech
                diversity ensures innovative solutions, leveraging the latest
                tools and trends for client success.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold py-2">Operational Excellence</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, we
                prioritize operational excellence by optimizing processes,
                ensuring flawless execution, and delivering high-quality,
                efficient solutions for long-term client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
