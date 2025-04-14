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
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Blogs & News
            </h1>
            <p className="">
              Creativity is a highfalutin word for the work I have to{" "}
              <br className="hidden md:block" /> do between now and Tuesday.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:pt-14">
            <div className="space-y-6">
              <div className="">
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
            </div>

            <div className="space-y-4">
              {secondarticles.slice(0, visibleCount).map((article) => (
                <Link
                  key={article.id}
                  href={`/blogSingle/${article.id}`}
                  className="bg-[#a545b2]/25 rounded-tl-2xl h-[170px] backdrop-blur-md p-2 flex gap-7 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div>
                    <Image
                      className="w-[400px] h-[150px] p-1 rounded-tl-2xl object-cover"
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

          <div className="mt-16 space-y-12">
            {/* Blog Header Section */}
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

            {/* Blog Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {secondarticles.slice(0, 6).map((article) => (
                <div
                  key={article.id}
                  className="bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col"
                >
                  {/* Article Category */}
                  <span className="text-xs bg-pink-500 px-3 w-28 py-1 rounded-full uppercase font-semibold">
                    {article.category}
                  </span>

                  {/* Article Title and Description */}
                  <div className="flex-grow">
                    <h3 className="mt-6 md:text-2xl font-bold text-white hover:text-purple-300 transition-colors duration-300">
                      <Link href={`/blogSingle/${article.id}`}>
                        {article.subTitle}
                      </Link>
                    </h3>
                    <p className="mt-4 text-purple-200 text-sm">
                      {getShortDescription(article.description)}
                      <Link
                        href={`/blogSingle/${article.id}`}
                        className="ms-2 text-blue-500 hover:text-blue-400 transition-colors duration-300"
                      >
                        Read More →
                      </Link>
                    </p>
                  </div>

                  {/* Author Details - Aligned at the Bottom */}
                  {/* <div className="flex items-center gap-4 mt-8">
                    <Image
                      className="w-12 h-12 rounded-full object-cover"
                      src="https://i.postimg.cc/6qv5TDS6/1.jpg"
                      alt="Author"
                      width={50}
                      height={50}
                    />
                    <div className="text-sm text-purple-300">
                      <p className="font-bold">Shakil Ahmed</p>
                      <p className="text-xs text-purple-400">
                        Jun 27, 2020 • 6 min read
                      </p>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
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
