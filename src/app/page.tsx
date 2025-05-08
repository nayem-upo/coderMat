"use client";
import { useEffect, useState } from "react";
import ContactForm from "./components/contact-form/contact-form";
import HeroSection from "./components/hero-section/hero-section";
import FAQ from "./components/FAQ/faq";
import OurWebDevelopmentProcess from "./components/OurWebDevelopmentProcess/OurWebDevelopmentProcess";
import TechnologyStack from "./components/shared/technologyStack/TechnologyStack";
import Services from "./services/services/services";
import ProjectDiscuss from "./components/shared/projectdiscuss/ProjectDiscuss";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Projetcs from "./components/OurLatestProjects/Projetcs";
import Loader from "./components/loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show loader
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout
    }, 10); // Adjust timeout as needed

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section
        className="relative min-h-[950px] md:min-h-screen lg:min-h-screen xl:min-h-screen 2xl:min-h-screen 3xl:min-h-screen border-b bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/hPDQGNGn/banner-final.jpg')",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Content on top of the overlay */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#21112E] via-[#280d42] to-[#280d42]">
        <Services />
      </section>

      <section className="text-white bg-gradient-to-b from-[#181819] to-[#1F122A] border-b">
        <WhyChooseUs />
      </section>

      <section className="bg-gradient-to-t from-[#181819] to-[#21122F]">
        <TechnologyStack />
      </section>

      <section className="bg-gradient-to-t from-[#181819] to-[#240f35] text-white border-b">
        <Projetcs />
      </section>

      <section className="text-white bg-gradient-to-b from-[#181619] to-[#240F35] border-b">
        <Pricing />
      </section>

      <section className="bg-gradient-to-t from-[#181819] to-[#21122F]">
        <div>
          <OurWebDevelopmentProcess />
        </div>
      </section>

      <section className="bg-gradient-to-t from-[#321544] to-[#20112E] border-b">
        <ProjectDiscuss />
      </section>

      {/* <section className="bg-gradient-to-t from-[#240f35] to-[#1F122A] text-white">
        <div>
          <Testimonials />
        </div>
      </section> */}

      <section className="bg-gradient-to-t from-[#21122F] to-[#181819] text-white border-b">
        <FAQ />
      </section>

      <main className="">
        <section className="text-black bg-gradient-to-b from-[#21122F] to-[#181819]">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
