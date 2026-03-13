import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendar, FaClock, FaVideo, FaGlobe } from "react-icons/fa";
import img10 from "../../../../../assets/asset/p10.png";

const Form = ({
  date = "Friday, January 30, 2026",
  time = "3:45 – 4:00 am",
  timezone = "Asia/Karachi", // Default prop added here
  onConfirm,
}) => {
  const [form, setForm] = useState({ name: "", email: "", notes: "" });
  const [touched, setTouched] = useState({ name: false, email: false });
  const navigate = useNavigate();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isNameValid = form.name.trim().length > 0;
  const isFormValid = isEmailValid && isNameValid;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleBlur = (e) =>
    setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid && onConfirm) onConfirm(form);
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl bg-[#0F0F0F] border border-gray-800 rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT PANEL - Left Aligned */}
        <div className="flex-1 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-800 text-left">
          <div className="flex flex-col items-start mb-8">
            <div className="w-12 h-12 mb-4 rounded-full bg-pink-600 overflow-hidden flex items-center justify-center border border-gray-700">
              <img src={img10} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-gray-400 font-medium mb-1">Subarno Paul</p>
            <h2 className="text-2xl font-bold text-white">15 Min Meeting</h2>
          </div>

          <div className="space-y-4 text-gray-300 text-[15px]">
            <div className="flex items-start gap-3">
              <FaCalendar className="mt-1 text-gray-500" />
              <span className="font-semibold">{date}<br/>{time}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-gray-500" />
              <span>15m</span>
            </div>
            <div className="flex items-center gap-3">
              <FaVideo className="text-gray-500" />
              <span>Google Meet</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGlobe className="text-gray-500" />
              {/* Dynamic timezone displayed here */}
              <span>{timezone.replace(/_/g, " ")}</span> 
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Left Aligned Form */}
        <div className="flex-1 p-8 lg:p-10 text-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">
                Your name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg bg-black border border-gray-800 px-4 py-2.5 text-white focus:outline-none focus:border-white transition-colors"
              />
              {touched.name && !isNameValid && (
                <p className="text-red-500 text-xs mt-1">Name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">
                Email address *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg bg-black border border-gray-800 px-4 py-2.5 text-white focus:outline-none focus:border-white transition-colors"
              />
              {touched.email && !isEmailValid && (
                <p className="text-red-500 text-xs mt-1">
                  That doesn't look like an email address
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">
                Additional notes
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Please share anything that will help prepare for our meeting."
                className="w-full h-28 resize-none rounded-lg bg-black border border-gray-800 px-4 py-2.5 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600"
              />
            </div>

            <div className="space-y-3">
              <p className="flex text-gray-300 font-medium items-center gap-2 cursor-pointer hover:text-white transition-colors">
                <span className="text-lg">+</span> Add guests
              </p>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                By proceeding, you agree to our{" "}
                <span className="text-gray-300 underline cursor-pointer">Terms</span> and{" "}
                <span className="text-gray-300 underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>

            <div className="flex justify-end gap-6 pt-4 items-center">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-gray-400 font-bold hover:text-white transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`px-8 py-2.5 rounded-full font-bold transition ${
                  isFormValid
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-[#222] text-gray-600 cursor-not-allowed"
                }`}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;