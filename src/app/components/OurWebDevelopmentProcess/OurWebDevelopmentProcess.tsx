import Image from "next/image";
import React from "react";

const OurWebDevelopmentProcess = () => {
  return (
    <main className="bg-[url('https://i.postimg.cc/Y24H959r/pattern-developmen-process.png')] bg-no-repeat bg-left-top">
      <div className="min-h-screen flex items-center  justify-center md:p-5 bg-no-repeat bg-right lg:bg-[length:50%] 2xl:bg-[length:40%] bg-[url('https://i.postimg.cc/TYvK038H/Pattern-for-development-process.png')]">
        <div className="max-w-5xl mx-auto text-white pb-20 md:pb-0 md:py-20">
          {/* Title */}
          <div className="text-center mt-5 md:mt-0 mb-5 md:pb-20">
            <h1 className="text-2xl md:px-0 px-8 md:text-4xl font-bold">
              Our Web Development Process
            </h1>
            <p className="mt-2 md:mt-4 text-gray-300 px-5 md:px-0">
              From Idea to Implementation: Our Seamless Web Development Process
              to Bring Your Vision to Life
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative mx-5 md:mx-10 lg:mx-0">
            {/* Vertical Line - Visible on All Screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full z-0">
              <Image
                className="h-full w-[100px] md:w-[160px] lg:w-[223px]"
                src="https://i.ibb.co.com/0mcjR09/Group-1000002433.png"
                alt="Vertical process line"
                layout="intrinsic"
                width={223}
                height={1000}
              />
            </div>

            {/* Steps 1 */}
            <div className="relative flex items-center mb-5 lg:mb-16 z-10">
              <div className="w-1/2 pr-4 md:pr-20 text-right mt-10">
                <div className="bg-[#2d1b39] p-2 md:p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300 md:mt-3 -mt-1 mr-7 md:mr-0 lg:mt-0">
                  <div className=" absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-10 md:h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="lg:text-lg text-[10px] md:text-sm font-semibold">
                    1.Business Analysis
                  </h2>
                  <p className="text-gray-300 text-sm hidden lg:block">
                    The initial research efforts in the project definition start
                    with the project discovery phase, where our business
                    analysts understand the project’s purpose.
                  </p>
                </div>
              </div>
              <div className="w-1/2"></div> {/* Empty spacer for alignment */}
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center mb-5 md:mb-16 z-10">
              <div className="w-1/2"></div> {/* Empty spacer for alignment */}
              <div className="w-1/2 pl-4 md:pl-20 mt-5">
                <div className="bg-[#2d1b39] p-2 md:p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300 md:mt-7 mt-[10px] ml-8 md:ml-0 md:mr-0 lg:mt-0">
                  <div className=" absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-10 md:h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="lg:text-lg text-[10px] md:text-sm font-semibold ">
                    2. Front-end{" "}
                    <span className="hidden lg:block lg:inline">
                      design and
                    </span>
                    development
                  </h2>
                  <p className="text-gray-300 text-sm hidden lg:block">
                    After understanding user audience needs, our web designers
                    incorporate these requirements in UI design.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center mb-5 md:mb-16 z-10">
              <div className="w-1/2 pr-4 md:pr-20 text-right mt-5">
                <div className="bg-[#2d1b39] p-2 md:p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300 md:mt-[0px] mt-[0px] mr-8 md:mr-0 md:mr-0 lg:mt-0">
                  <div className=" absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-10 md:h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="lg:text-lg text-[10px] md:text-sm font-semibold">
                    3. Back-end development
                  </h2>
                  <p className="text-gray-300 text-sm hidden lg:block">
                    In this stage, we implement the application logic on the
                    back end using proven frameworks.
                  </p>
                </div>
              </div>
              <div className="w-1/2"></div> {/* Empty spacer for alignment */}
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center mb-5 md:mb-16 z-10">
              <div className="w-1/2"></div> {/* Empty spacer for alignment */}
              <div className="w-1/2 pl-4 md:pl-20 mt-4">
                <div className="bg-[#2d1b39] p-2 md:p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300 md:-mt-2 mt-4 ml-8 md:ml-0 md:mr-0 lg:-mt-1">
                  <div className=" absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-10 md:h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="lg:text-lg text-[10px] font-semibold md:text-sm">
                    4. Integration
                  </h2>
                  <p className="text-gray-300 text-sm hidden lg:block">
                    We set up APIs for web app integration to ensure seamless
                    data synchronization.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex items-center mb-5 md:mb-16 z-10">
              <div className="w-1/2 pr-4 md:pr-20 text-right mt-4">
                <div className="bg-[#2d1b39] p-2 md:p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300 md:-mt-2 lg:mt-1 mt-[23px] mr-8 md:mr-0 md:mr-0 lg:mt-0">
                  <div className=" absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-10 md:h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="lg:text-lg font-semibold md:text-sm text-[10px]">
                    5. Testing{" "}
                    <span className="hidden lg:block lg:inline">
                      and Hot Fixes
                    </span>
                  </h2>
                  <p className="text-gray-300 text-sm hidden lg:block">
                    We extend hot fixes within 24 hours to resolve any issues in
                    the functionality of your application.
                  </p>
                </div>
              </div>
              <div className="w-1/2"></div> {/* Empty spacer for alignment */}
            </div>

            {/* Step 6 */}
            <div className="relative flex items-center mb-5 md:mb-16 z-10">
              <div className="w-1/2"></div> {/* Empty spacer for alignment */}
              <div className="w-1/2 pl-4 md:pl-20 mt-5">
                <div className="bg-[#2d1b39] p-2 md:p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300 md:-mt-[8px] mt-[16px] ml-8 md:ml-0 md:mr-0 lg:mt-0">
                  <div className=" absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-10 md:h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <div className="flex items-center mb-2">
                    <h2 className="lg:text-lg font-semibold md:text-sm text-[10px]">
                      6. Support
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm hidden lg:block">
                    We continually support and advance your software by adding
                    new features to align with your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurWebDevelopmentProcess;
