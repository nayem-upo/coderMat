"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ServiceCard from "./serviceCard";
import { service } from "@/app/interface";

// SkeletonLoader component accepts a `count` prop
type SkeletonLoaderProps = {
  count: number;
};

const SkeletonLoader = ({ count }: SkeletonLoaderProps) => {
  return (
    <div className="max-w-7xl xl:max-w-[105rem] 2xl:max-w-[84rem] 3xl:max-w-[105rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 px-10 justify-center gap-12 mt-10 md:mt-20">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl backdrop-blur-md bg-[#2F1748] flex flex-col items-start border-l-0 border-t-0 border-[#5C099B] border-4 p-5 rounded-xl w-full h-[343px]"
        >
          <div className="animate-pulse flex flex-col w-full h-full justify-between">
            <div>
              <div className="h-14 w-14 bg-white/20 rounded"></div>
              <div className="h-6 bg-white/20 rounded w-3/4 mt-4"></div>
              <div className="space-y-2 w-full mt-4">
                <div className="h-4 bg-white/20 rounded w-full"></div>
                <div className="h-4 bg-white/20 rounded w-5/6"></div>
                <div className="h-4 bg-white/20 rounded w-2/3"></div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <div className="h-9 bg-white/20 rounded w-24"></div>
              <div className="h-4 w-4 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [services, setServices] = useState<service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      fetch("/servicesdata.json")
        .then((res) => res.json())
        .then((data) => {
          setServices(data);
          setLoading(false);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // run once initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleItemsCount = () => {
    if (!isHomePage) return services.length || 8;
    if (windowWidth >= 1540) return services.length || 8;
    return 6;
  };

  const visibleServices = services.slice(0, getVisibleItemsCount());

  return (
    <div className="py-10 md:py-20 text-white px-4 md:px-0">
      <h1 className="text-center font-bold md:text-4xl text-2xl">
        Services We Provide
      </h1>
      <p className="text-center md:w-1/2 mx-auto text-sm md:pt-4 pt-2">
        Get the WebSite that will help you grow your business. We have many
        features that you will love.
      </p>

      {loading ? (
        <SkeletonLoader count={getVisibleItemsCount()} />
      ) : (
        <div className="max-w-7xl xl:max-w-[105rem] 2xl:max-w-[84rem] 3xl:max-w-[105rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 px-10 justify-center gap-12 mt-10 md:mt-20">
          {visibleServices.map((service: service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
