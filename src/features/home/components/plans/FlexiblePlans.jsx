import React from "react";
import SectionHeading from "../../../../components/global/SectionHeading";
import PlanComponent from "./component/PlanComponent";

const FlexiblePlans = () => {
  return (
    <div className="mt-16">
      <div className="text-white">
        <SectionHeading
          title={
            <>
              <div>Flexible Plans for</div>
              <div>Every Project</div>
            </>
          }
          subtitle={
            <>
              <div>Transparent, scalable packages—designed to fit </div>
              <div>startups, small businesses, and enterprise teams.</div>
            </>
          }
          titleClassName={"text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight m-6 "}
          subtitleClassName={"text-[#B4B4B4] mb-4"}
        />
        <div>
          <PlanComponent />
        </div>
      </div>
    </div>
  );
};

export default FlexiblePlans;