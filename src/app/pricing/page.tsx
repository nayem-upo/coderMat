import React from "react";
import Pricing from "../components/Pricing/Pricing";
import ProjectDiscuss from "../components/shared/projectdiscuss/ProjectDiscuss";
import FAQ from "../components/FAQ/faq";

const PriceDetails = () => {
  return (
    <div className="pt-10 text-white">
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
