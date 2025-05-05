"use client";
import Link from "next/link";
import React, { useState } from "react";

const Pricing = () => {
  const [currency, setCurrency] = useState("USD");

  const pricingPlans = [
    {
      title: "Starter",
      priceBDT: 15000,
      priceUSD: 200,
      features: [
        "3-5 Pages",
        "Basic Design",
        "Mobile Responsive",
        "Contact Form",
        "Speed Optimization",
      ],
      ctaText:
        "Perfect for startups, providing essential features for building a strong and scalable online presence.",
    },
    {
      title: "Business",
      priceBDT: 30000,
      priceUSD: 500,
      features: [
        "5-10 Pages",
        "Custom Design",
        "Basic SEO",
        "Blog Setup",
        "Speed Optimization",
      ],
      ctaText:
        "Ideal for growing businesses, offering custom design, SEO, and optimization for better online performance.",
      recommended: true,
    },
    {
      title: "Premium",
      priceBDT: 50000,
      priceUSD: 1000,
      features: [
        "Unlimited Pages",
        "Latest Technology",
        "E-commerce Integration",
        "Chatbot Support",
        "Advanced Analytics",
      ],
      ctaText:
        "Complete solution for large businesses, offering unlimited pages, advanced features, and full website control.",
    },
  ];

  const formatPrice = (
    plan:
      | {
        title: string;
        priceBDT: number;
        priceUSD: number;
        features: string[];
        ctaText: string;
        recommended?: undefined;
      }
      | {
        title: string;
        priceBDT: number;
        priceUSD: number;
        features: string[];
        ctaText: string;
        recommended: boolean;
      }
  ) => {
    return currency === "BDT"
      ? `৳${plan.priceBDT.toLocaleString()}`
      : `$${plan.priceUSD}`;
  };

  return (
    <div className="py-8 md:py-20 md:mx-auto md:max-w-[1480px]">
      <h1 className="text-center font-bold md:text-4xl text-2xl md:px-0 px-4">
        Pricing Options for Our Services
      </h1>
      <p className="text-center md:px-0 px-4 md:w-1/2 m-auto pt-2 md:pt-4">
        Affordable Plans Customized for Your Business Needs: Select the Right
        Package for Your Success.
      </p>
      <div className="flex justify-center pt-6">
        <button
          onClick={() => setCurrency(currency === "BDT" ? "USD" : "BDT")}
          className="border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-all"
        >
          Switch to {currency === "BDT" ? "USD" : "BDT"}
        </button>
      </div>
      <div className="lg:mx-20 pt-8 md:pt-20 md:px-8 lg:px-0 ">
        <div className="grid md:mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-10 justify-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative grid gap-4 mx-auto bg-gradient-to-br from-[#2D1B38] to-[#1E1227] p-8 rounded-3xl shadow-xl md:w-[360px] w-[330px] hover:scale-105 transition-all duration-300 ${plan.recommended ? "border-t-4 border-[#7D1A8D]" : ""
                }`}
            >
              {plan.recommended && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#7D1A8D] w-[240px] h-[30px] rounded-b-full flex justify-center items-center text-white text-lg">
                  Recommended
                </div>
              )}
              <h1 className="text-xl font-semibold text-white text-center">
                {plan.title}
              </h1>
              <h2 className="text-center text-3xl font-bold text-white">
                {formatPrice(plan)}
              </h2>
              <p className="text-[#ffffff80] text-center">Billed per project</p>
              <p className="pt-2 text-[#ffffffa6] italic">{plan.ctaText}</p>
              <div className="grid gap-5">
                <button className="mb-2 mt-2 border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-4 py-2 rounded-xl">
                  <Link href={`/contactUs`}> Start Now</Link>
                </button>
                <div className="w-full border-t border-dashed border-white"></div>
                <div className="flex flex-col gap-1 text-white">
                  {plan.features.map((feature, idx) => (
                    <p key={idx}>✔️ {feature}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
