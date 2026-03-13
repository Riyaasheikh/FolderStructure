import React, { useState } from "react";
import PortfolioCard from "../../../components/ui/PortfolioCard";
import Buttons from "../../../components/global/Buttons";
import p3 from "../../../assets/asset/p7.avif";
import p4 from "../../../assets/asset/p8.avif";

const WorkCard = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#0C0C0C] text-white px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      <div className="flex flex-col lg:flex-row justify-center items-stretch">
        <div className="flex-1 max-w-xl m-2">
          <PortfolioCard
            image={p4}
            title="Rewait — Waitlist Platform"
            description="Crafted a clean, convenient focused landing page with modern design principles and user-friendly interface."
            btn="Learn More"
          />
        </div>
        <div className="flex-1 max-w-xl m-2">
          <PortfolioCard
            image={p3}
            title="FitNest — Fitness App UI/UX"
            description="Designed the end-to-end mobile experience with intuitive navigation and engaging user interactions."
            btn="Learn More"
          />
        </div>
      </div>

      {showMore && (
        <div className="flex flex-col lg:flex-row justify-center items-stretch mt-10">
          <div className="flex-1 max-w-xl m-2">
            <PortfolioCard
              image={p4}
              title="UI Revamp — SaaS Dashboard"
              description="A modern, responsive redesign focusing on data visualization and usability."
              btn="Learn More"
            />
          </div>
          <div className="flex-1 max-w-xl m-2">
            <PortfolioCard
              image={p3}
              title="Branding Concept — Health App"
              description="Developed a clean, energetic identity that connects with wellness-focused users."
              btn="Learn More"
            />
          </div>
        </div>
      )}

      <div className="flex justify-center mt-10">
        <Buttons
          button1={showMore ? "Show Less" : "Load More"}
          onClick={() => setShowMore(!showMore)}
          className="bg-[#141414] text-white px-5 py-3 hover:bg-[#1E1E1E]"
        />
      </div>
    </div>
  );
};

export default WorkCard;
