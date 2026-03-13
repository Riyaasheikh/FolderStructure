import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendar, FaClock, FaVideo, FaGlobe } from "react-icons/fa";
import img10 from "../../../../../assets/asset/p10.png";

const ConfirmationForm = ({
  date = "Friday, January 30, 2026",
  time = "3:45 – 4:00 am",
  timezone = "Asia/Karachi(GMT+5)", // Ensure this matches the parent state
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
    if (isFormValid) {
      navigate("/success", { 
        state: { 
          name: form.name,
          email: form.email,
          notes: form.notes,
          date: date, 
          time: time, 
          timezone: timezone 
        } 
      });
      if (onConfirm) onConfirm(form);
    }
  };

  return (
    <div className="w-full bg-[#0C0C0C] flex justify-center px-6 py-6 min-h-screen items-center">
      <div className="w-full max-w-4xl bg-[#0F0F0F] border border-gray-800 rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT PANEL */}
        <div className="flex-1 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-800 text-left">
          <div className="flex flex-col items-start mb-8">
            <div className="w-12 h-12 mb-4 rounded-full bg-pink-600 overflow-hidden flex items-center justify-center border border-gray-700">
              <img src={img10} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-gray-400 font-medium mb-1">Subarno Paul</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">15 Min Meeting</h2>
          </div>

          <div className="space-y-5 text-gray-300 text-[15px]">
            <div className="flex items-start gap-3">
              <FaCalendar className="mt-1 text-gray-500" />
              <span className="font-semibold text-white leading-relaxed">
                {date} <br /> {time}
              </span>
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
              {/* This will now dynamically show your choice */}
              <span>{timezone?.replace(/_/g, " ") || "Asia/Karachi(GMT+5)"}</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 p-8 lg:p-10 text-left">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">Your name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-lg bg-black border ${
                  touched.name && !isNameValid ? "border-red-500" : "border-gray-800"
                } px-4 py-2 text-white focus:outline-none focus:border-white transition-colors`}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">Email address *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-lg bg-black border ${
                  touched.email && !isEmailValid ? "border-red-500" : "border-gray-800"
                } px-4 py-2 text-white focus:outline-none focus:border-white transition-colors`}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-200 mb-2">Additional notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Please share anything that will help prepare for our meeting."
                className="w-full h-24 resize-none rounded-lg bg-black border border-gray-800 px-4 py-2.5 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600"
              />
            </div>

            <div className="pt-2">
              <p className="flex text-gray-500 font-medium items-center gap-2 cursor-pointer hover:text-white transition-colors text-sm">
                <span className="text-lg">+</span> Add guests
              </p>
              <p className="text-[12px] text-gray-500 leading-relaxed mt-6">
                By proceeding, you agree to our <span className="text-gray-300 underline cursor-pointer">Terms</span> and <span className="text-gray-300 underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>

            <div className="flex justify-end gap-6 pt-4 items-center">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-gray-500 font-bold hover:text-white transition-colors text-sm"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`px-8 py-2 rounded-full font-bold transition ${
                  isFormValid
                    ? "bg-white text-black hover:bg-gray-300"
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

export default ConfirmationForm;