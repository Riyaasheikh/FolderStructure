import React from "react";
import { plans } from "../../../../../data/Plans";
import { PiCrownLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";

const PlanComponent = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-8xl mx-auto px-4 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border border-[#29292a] rounded-xl bg-[#1f1f1f] hover:border-[#3a3a3a] transition-all duration-300 `}
            >
              <div className="px-6 pt-6 pb-4">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-2">
                  <PiCrownLight className="text-xl" />
                  {plan.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>
              <div className="px-6 py-4 ">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">/ {plan.period}</span>
                </div>
              </div>

              <div className="px-6 py-6">
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                  Features include:
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FaCheck className="text-white text-sm mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=""></div>

              <div className="px-6 py-6">
                <button
                  className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#D63E18] text-white  "
                      : "bg-transparent border border-[#b7b7b9] mb-5 text-white hover:bg-[#b7b7b9] hover:text-[#1f1f1f]"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanComponent;
