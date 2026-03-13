import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaCalendar, FaGlobe, FaVideo, FaUser } from "react-icons/fa";

const ConfirmationPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no state exists (e.g., direct URL access), show the error
  if (!state) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <div className="text-center">
          <p className="text-xl mb-4">No booking found.</p>
          <button onClick={() => navigate("/")} className="text-blue-500 underline">
            Go back to scheduling
          </button>
        </div>
      </div>
    );
  }

  const { name, email, date, time, notes, timezone } = state;

  // Simple Google Calendar link generator
  const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=15+Min+Meeting+with+Subarno+Paul&details=${encodeURIComponent(
    notes || "Meeting scheduled via web app"
  )}&location=Google+Meet`;

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div className="bg-[#0F0F0F] border border-[#262626] rounded-2xl p-10 w-full max-w-2xl text-left shadow-2xl">
        
        {/* Success Header */}
        <div className="flex flex-col items-start mb-8">
          <FaCheckCircle className="text-white text-5xl mb-4" />
          <h2 className="text-3xl font-bold tracking-tight">This meeting is confirmed</h2>
          <p className="text-gray-400 mt-2">A calendar invitation has been sent to your email address.</p>
        </div>

        {/* Meeting Details Card */}
        <div className="border border-[#262626] rounded-xl p-6 space-y-4 mb-8">
          <h3 className="text-xl font-bold border-b border-[#262626] pb-3 mb-2">15 Min Meeting</h3>
          
          <div className="flex items-start gap-3 text-gray-300">
            <FaUser className="mt-1 text-gray-500" />
            <span className="font-medium text-white">{name} ({email})</span>
          </div>

          <div className="flex items-start gap-3 text-gray-300">
            <FaCalendar className="mt-1 text-gray-500" />
            <span className="font-bold text-white">{date} <br/> {time}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <FaVideo className="text-gray-500" />
            <span>Google Meet</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <FaGlobe className="text-gray-500" />
            <span>{timezone || "Asia/Karachi"}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Add to calendar</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 transition"
            >
              Google Calendar
            </a>
            <button className="border border-[#262626] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#1A1A1A] transition">
              Outlook.com
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-[#262626] flex justify-between items-center text-sm">
          <button onClick={() => navigate("/")} className="text-gray-400 hover:text-white transition">
            Reschedule
          </button>
          <button onClick={() => navigate("/")} className="text-gray-400 hover:text-white transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;