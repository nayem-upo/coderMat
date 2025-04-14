/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does a custom website cost?",
      answer:
        "The cost of a custom website varies depending on the complexity and requirements of the project. For a basic website, prices typically start from $1,500, but more advanced websites with custom features and integrations can range from $5,000 to $20,000 or more. We provide a tailored quote based on your specific needs and budget. Please contact us for a free consultation.",
    },
    {
      question: "How long does it take to deliver a website?",
      answer:
        "The timeline for delivering a custom website depends on the scope of the project. Simple websites can typically be delivered within 4-6 weeks. For more complex websites, it may take 3-6 months. We will work with you to define a timeline and keep you updated throughout the process to ensure that we meet your expectations.",
    },
    {
      question: "What factors affect the price of a custom website?",
      answer:
        "Several factors affect the price of a custom website, including the number of pages, the complexity of the design, custom features (such as e-commerce functionality or user login), integrations with third-party services, and the level of SEO optimization required. The more complex and feature-rich your website needs to be, the higher the cost will be.",
    },
    {
      question:
        "Do you provide maintenance and updates after the website is launched?",
      answer:
        "Yes, we offer ongoing website maintenance and updates after the launch. This includes software updates, security patches, bug fixes, and content updates. Maintenance plans are available to ensure your website continues to perform optimally and remains up-to-date with the latest technology and security standards.",
    },
    {
      question: "Do I need to provide content for my website?",
      answer:
        "Yes, we will need content for your website, including text, images, and any other media. If you need help with content creation, we can provide copywriting and photography services. We'll work closely with you to ensure that the content aligns with your brand voice and goals.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Yes, we build SEO-friendly websites by ensuring that your site is optimized for search engines. This includes proper on-page SEO (such as title tags, meta descriptions, and header tags), fast loading speeds, mobile responsiveness, and clean code. However, ongoing SEO efforts, such as content creation and link-building, may require a separate plan.",
    },
    {
      question: "Can I update my website after it's built?",
      answer:
        "Absolutely! We ensure that you have full control over your website after launch. We can provide you with a content management system (CMS) like WordPress or a custom admin panel, which will allow you to make changes, add new content, and manage your site with ease. If you prefer, we can also offer ongoing support for any updates you may need.",
    },
    {
      question: "Do you provide hosting services for websites?",
      answer:
        "Yes, we can provide website hosting services. We offer reliable and secure hosting solutions with excellent uptime, fast loading speeds, and regular backups. If you prefer to use a different hosting provider, we can also help you set up your website on your preferred hosting platform.",
    },
  ];

  return (
    <div className="md:py-20 py-10 px-2 md:px-10 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-5 md:mb-14 text-center">
          <h2 className="md:text-3xl text-2xl font-bold ">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 md:mt-4">Got Questions? We've Got Answers!</p>
        </div>
        <div className="lg:flex items-center justify-between">
          <div>
            <Image
              src="https://i.postimg.cc/pX4LyG34/FAQ.png"
              alt=""
              className="md:w-[350px] lg:w-[700px] mx-auto"
              width={800}
              height={400}
            />
          </div>

          <div className="w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b">
                <div
                  className="flex justify-between items-center p-4 rounded-lg cursor-pointer hover:bg-[#44475a] transition duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg text-white font-medium">
                    {faq.question}
                  </h3>
                  <span>
                    {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-[max-height] duration-700 ${
                    openFAQ === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="p-4 pt-1 mt-0 text-[#919191] rounded-lg text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
