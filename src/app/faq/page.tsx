import React from "react";
import FAQ from "../components/FAQ/faq";
import OurWebDevelopmentProcess from "../components/OurWebDevelopmentProcess/OurWebDevelopmentProcess";
import ProjectDiscuss from "../components/shared/projectdiscuss/ProjectDiscuss";

const FAQPage = () => {
  return (
    <div className="text-white pt-14">
      <FAQ></FAQ>
      <div className="border-t">
        {" "}
        <OurWebDevelopmentProcess></OurWebDevelopmentProcess>
      </div>{" "}
      <div className="border-t">
        <ProjectDiscuss></ProjectDiscuss>
      </div>
    </div>
  );
};

export default FAQPage;
