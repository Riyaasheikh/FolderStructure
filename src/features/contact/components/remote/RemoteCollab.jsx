import React from "react";
import RemoteCard from "./RemoteCard";
import Buttons from "../../../../components/global/Buttons";

const RemoteCollab = () => {
  return (
    <div
      style={{
        background: "linear-gradient(175deg, #0C0C0C ,#0C0C0C,#AC391C)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container mx-auto px-6 py-3 mb-5 grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Remote 
            <br/>
            Collaboration,
            <br />
            Real-World Results
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Work seamlessly with me—from brainstorming to launch—no matter where
            you are in the world. Together we’ll keep the energy high, the
            feedback loops tight, and the momentum rolling so your product ships
            on time and looks incredible.
          </p>

          <Buttons
            button1="Book a Call"
            className="text-sm sm:text-base bg-[#FF5024] hover:bg-[#D63E18] px-6 py-3 rounded-full transition"
          />
        </div>

        {/* RIGHT SIDE — IMAGES */}
        <RemoteCard />
      </div>
    </div>
  );
};

export default RemoteCollab;
