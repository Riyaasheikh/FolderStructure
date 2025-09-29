import React from "react";
import { plans } from "../../../../../data/Plans";

const PlanComponent = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border border-[#29292a] rounded-lg bg-[#1f1f1f] hover:border-[#3a3a3a] transition-all duration-300 ${
              plan.popular ? "relative ring-1 ring-[#b7b7b9]" : ""
            } ${index === 0 ? "py-4" : "py-6"}`}
          >
            <div className={`${index === 0 ? "px-6 mb-4" : "px-6 mb-6"}`}>
              <h2 className="text-xl font-semibold"> 👑 {plan.title}</h2>
              <p className="text-gray-400 text-sm ml-8">{plan.description}</p>
            </div>

            <div className={`${index === 0 ? "px-6 mb-4" : "px-6 mb-6"}`}>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-400">/ {plan.period}</span>
              </div>
              <div className="border-b border-[#333] mt-3 w-full"></div>
            </div>

            <div className={`${index === 0 ? "px-6 mb-4" : "px-6 mb-6"}`}>
              <h3 className="text-md font-semibold mb-3">Features include:</h3>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="text-sm mt-0.5">✅</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${index === 0 ? "px-6 " : "px-6"}`}>
              <button
                className={`w-full py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-[#1f1f1f] hover:bg-[#b7b7b9]"
                    : "bg-transparent border border-[#b7b7b9] text-white hover:bg-[#b7b7b9] hover:text-[#1f1f1f]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanComponent;
