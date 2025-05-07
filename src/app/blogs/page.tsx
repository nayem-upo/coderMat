"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { secondarticles } from "../blogSingle/blogData";

const Blogs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setVisibleCount(isExpanded ? 8 : 3);
  }, [isExpanded]);

  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (description: string) => {
    const words = description.split(" ");
    return words.length > 30
      ? `${words.slice(0, 30).join(" ")}...`
      : description;
  };

  if (!mounted) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] pt-20 md:pt-28">
      <div className="min-h-screen text-white">
        <div className="max-w-7xl 3xl:max-w-[1680px] mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Blogs & News
            </h1>
            <p>
              Creativity is a highfalutin word for the work I have to{" "}
              <br className="hidden md:block" /> do between now and Tuesday.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:pt-14">
            {/* Left Section */}
            <div className="space-y-6">
              <p className="text-sm text-purple-300 uppercase mb-2">
                From the Blog
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Design is intelligence <br /> made visible.
              </h2>
              <p className="mb-4">
                Responsive web design is essential for providing a seamless
                <br /> user experience across all devices.
              </p>
              <Link
                href="/blogSingle/6"
                className="py-[10px] w-36 text-center border-2 flex items-center justify-center gap-2 border-[#7272723c] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 rounded-md"
              >
                Read more
              </Link>
            </div>

            {/* Right Section with Zoom Cards */}
            <div className="space-y-4">
              {secondarticles.slice(0, visibleCount).map((article) => (
                <Link
                  key={article.id}
                  href={`/blogSingle/${article.id}`}
                  className="blog-card bg-[#a545b2]/25 rounded-tl-2xl h-[170px] backdrop-blur-md p-2 flex gap-7 transform transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="blog-card-image-wrapper ">
                    <Image
                      className="blog-card-image h-[150px]"
                      src={article.cardImage}
                      alt={article.title}
                      width={400}
                      height={150}
                    />
                  </div>

                  <div className="p-1">
                    <p className="text-sm bg-pink-400 w-20 rounded-xl text-center">
                      {article.category}
                    </p>
                    <h3 className="md:text-lg font-semibold mt-2">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Blog Grid Section */}
          <div className="mt-16 space-y-12">
            <div className="border-b border-purple-800 pb-16 max-w-[400px]">
              <p className="text-sm text-purple-300 uppercase mb-2 tracking-wider">
                From the Blog
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Design is intelligence made visible.
              </h2>
              <p className="text-lg text-purple-200">
                Creativity is a highfalutin word for the work I have to do
                between now and Tuesday.
              </p>
            </div>

            <section className="text-gray-300 body-font overflow-hidden">
              <div className="container px-5 py-2 mx-auto">
                <div className="-m-12 flex flex-wrap">
                  {secondarticles.slice(0, 6).map((article) => (
                    <div
                      key={article.id}
                      className="p-12 w-full md:w-1/2 3xl:w-1/3 flex flex-col items-start"
                    >
                      {/* Category Badge */}
                      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                        {article.category}
                      </span>

                      {/* Title */}
                      <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4 hover:text-purple-300 transition-colors duration-300">
                        <Link href={`/blogSingle/${article.id}`}>
                          {article.subTitle}
                        </Link>
                      </h2>

                      {/* Short Description */}
                      <p className="leading-relaxed mb-8 text-purple-200">
                        {getShortDescription(article.description)}
                      </p>

                      {/* Meta Section */}
                      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-700 mt-auto w-full">
                        <Link
                          href={`/blogSingle/${article.id}`}
                          className="text-indigo-400 inline-flex items-center"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                        <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-600">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          {article.likes}
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          {article.comments}
                        </span>
                      </div>

                      {/* Author Info */}
                      <div className="inline-flex items-center">
                        <Image
                          src={article.author_image}
                          alt="author"
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-white">
                            {article.author}
                          </span>
                          <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                            {article.author_role}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Image
        className="w-full pt-14"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt="Background image"
        width={1920}
        height={1080}
      />
    </main>
  );
};

export default Blogs;
