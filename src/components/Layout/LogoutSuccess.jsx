import React from "react";
import { Link } from "react-router-dom";

const LogoutSuccess = () => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <div className="min-w-md max-w-xl p-8 py-10 bg-gradient-to-br from-gray-900 to-slate-800 shadow-xl rounded-2xl border border-slate-700 flex flex-col items-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Thank You!</h2>
        <p className="text-indigo-300 text-center">
          Thank you for choosing our service. We hope to see you again soon!
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default LogoutSuccess;
