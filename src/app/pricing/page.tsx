import React from "react";
import Pricing from "../components/Pricing/Pricing";
import ProjectDiscuss from "../components/shared/projectdiscuss/ProjectDiscuss";
import FAQ from "../components/FAQ/faq";

const PriceDetails = () => {
  return (
    <div className="pt-10 text-white bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42]">
      <Pricing></Pricing>{" "}
      <div className="border-t">
        <FAQ></FAQ>
      </div>{" "}
      <div className="border-t">
        <ProjectDiscuss></ProjectDiscuss>
      </div>
    </div>
  );
};

export default PriceDetails;
