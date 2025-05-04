/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <main className="text-white  bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] px-5">
      <h1 className="text-center font-bold text-2xl md:text-4xl pt-20  md:pt-28">
        Our Story: Connecting Global Technology{" "}
        <br className="hidden md:block" /> Needs with Expertise
      </h1>
      <div className=" md:py-20 max-w-6xl mx-auto">
        {/* Top section */}
        <section className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          {/* Testimonial */}
          <div className=" p-6 rounded-lg max-w-md">
            <div className="flex items-center mb-4 md:w-[300px] lg:w-full">
              <Image
                src="https://i.postimg.cc/gJC17YhH/formal_done.png"
                className="bg-white/10 pt-10 rounded-xl md:transform md:scale-x-[-1]"
                alt="Next Image Description"
                width={600}
                height={400}
                layout="intrinsic"
              />
            </div>

            <p className="font-semibold text-xl text-center">
              <span className="text-2xl font-bold">Shakil Ahmed</span>{" "}
              <br className=" md:hidden" />
              <span className="text-sm font-medium">Co-founder & CEO</span>
            </p>
          </div>

          {/* Mission Extrream*/}
          <div className="max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              On a mission to empower teams
            </h1>
            <p className="mb-4">
              At <span className="font-bold">CoderMat</span>, we are committed
              to equipping businesses with the essential tools to thrive in the
              digital landscape. Our primary focus is on creating intuitive and
              user-friendly websites that establish a strong online presence and
              facilitate easy interactions between your customers and your
              brand. We believe that technology should serve your needs, not
              complicate them. Our aim is to help your team achieve its full
              potential by delivering a seamless digital experience that
              promotes growth and engagement.
            </p>
            <p className="mb-4">
              Our primary goal is to create engaging, high-quality websites. We
              also recognize the importance of making every interaction
              meaningful. Through compelling design and streamlined
              functionality, we ensure that your website enables users to
              achieve their goals easily, without confusion or frustration.
            </p>
            <p className="mb-4">
              At <span className="font-bold text-xl">CoderMat</span>, we
              prioritize both aesthetics and performance. We believe that a
              well-crafted design should enhance the content, which we see as
              the core of every design decision. By understanding your business
              and your customers, we create websites that are not only visually
              appealing but also functional and purpose-driven.
            </p>

            {/* Statistics */}
            {/* <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">2000</h2>
                <p>Founded</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">23K</h2>
                <p>Employees</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">203K</h2>
                <p>Customers</p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">$409M</h2>
                <p>Raised</p>
              </div>
            </div> */}
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">

          <div className="md:w-[600px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Why Choose Us
            </h2>
            <p className="mb-6 hidden">
              We believe that collaboration is key to the success of any
              project. Our process starts with understanding your goals,
              audience, and objectives. From there, we combine design,
              functionality, and usability to create digital solutions that
              work seamlessly and deliver measurable results. Every step of
              our process is guided by a desire to solve your problems, not
              just create a website.
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                <span className="font-bold text-xl">
                  Custom Design & Development:
                </span>{" "}
                Every project is unique. We don’t rely on templates but create
                custom, responsive designs that reflect your brand and meet
                your specific needs.
              </li>
              <li>
                <span className="font-bold text-xl">
                  User-Centered Approach:
                </span>{" "}
                Whether you need to build a brand-new website or revamp an
                existing one, we ensure that your users have a seamless and
                satisfying experience.
              </li>
              <li>
                <span className="font-bold text-xl">
                  Results-Driven Strategy:
                </span>{" "}
                Our work isn’t just about looking good; it’s about achieving
                the business goals that matter. From boosting conversion rates
                to improving engagement, we focus on results that directly
                impact your bottom line.
              </li>
              <li>
                <span className="font-bold text-xl">
                  Scalable & Future-Proof Solutions:
                </span>{" "}
                We build with growth in mind—using modern technologies and best practices
                to ensure your website is scalable, secure, and easy to maintain as your business evolves.
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg max-w-md">
            <div className="flex items-center mb-4 md:w-[300px] lg:w-full">
              <Image
                src="https://i.ibb.co.com/XfWkQmB9/Beige-Minimalist-Rectangular-Menu-Collage-Cafe-Facebook-Post.png"
                className="bg-white/10 pt-5 rounded-xl md:transform"
                alt="Next Image Description"
                width={700}
                height={500}
                layout="intrinsic"
              />
            </div>

            <p className="font-semibold text-xl text-center">
              <span className="text-2xl font-bold">Nayem Islam</span>{" "}
              <br className=" md:hidden" />
              <span className="text-sm font-medium">Co-founder & CEO</span>
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          {/* Testimonial */}
          <div className=" p-6 rounded-lg max-w-md">
            <div className="flex items-center mb-4 md:w-[300px] lg:w-full">
              <Image
                src=""
                className="bg-white/10 pt-10 rounded-xl md:transform md:scale-x-[-1]"
                alt="Next Image Description"
                width={600}
                height={400}
                layout="intrinsic"
              />
            </div>

            <p className="font-semibold text-xl text-center">
              <span className="text-2xl font-bold">Team</span>{" "}
              <br className=" md:hidden" />
              <span className="text-sm font-medium">CoderMat</span>
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Process</h2>
            <p className="mb-6">
              We believe that collaboration is essential for the success of any
              project. Our process begins with understanding your goals,
              audience, and objectives. From there, we integrate design,
              functionality, and usability to create digital solutions that work
              seamlessly and deliver measurable results. Every step of our
              process is driven by the desire to address your challenges, not
              just to create a website.
            </p>

            <div>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  <span className="font-bold text-xl">Discovery & Strategy:</span>{" "}
                  We begin by understanding your business, industry, and goals so
                  we can develop a strategy that works for you.
                </li>
                <li>
                  <span className="font-bold text-xl">Design & Development:</span>{" "}
                  Our design team creates custom, user-friendly designs that
                  reflect your brand, while our developers ensure that the website
                  is fast, secure, and scalable.
                </li>
                <li>
                  <span className="font-bold text-xl">Testing & Launch:</span>{" "}
                  Before going live, we test everything to ensure it’s perfect.
                  From performance to usability, we ensure your website works
                  flawlessly.
                </li>
                <li>
                  <span className="font-bold text-xl">
                    Support & Optimization:
                  </span>{" "}
                  After launch, we continue to support and optimize your website
                  to ensure it remains up-to-date and effective in achieving your
                  goals.
                </li>
              </ul>
            </div>

            <p className="mb-6">
              With <span className="font-bold text-xl">CoderMat</span>, you are
              not just getting a website — you are gaining a partner devoted to
              your business's success. Allow us to assist you in elevating your
              digital presence to the next level.
            </p>
          </div>
        </section>
      </div>
      <Image
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt="Background Image"
        width={1200} // You can adjust the width as needed
        height={800} // You can adjust the height as needed
        className="w-full" // Add the same class for styling
        layout="intrinsic" // This will keep the aspect ratio
      />
    </main>
  );
};

export default AboutUs;
