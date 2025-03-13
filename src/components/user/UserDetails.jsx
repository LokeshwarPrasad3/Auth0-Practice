import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutSection from "../auth/LogoutSection";

const UserDetails = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <p className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-bold text-2xl text-center">
        Loading....
      </p>
    );
  }

  if (!isAuthenticated || !user) {
    return <p className="text-white text-center">User not logged in</p>;
  }

  // Destructure only after checking if `user` exists
  const { name, nickname, email, email_verified, updated_at, picture } = user;

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-2">
      <div className="buttons_container flex justify-end items-center w-full">
        <LogoutSection />
      </div>
      <div className="min-w-md max-w-xl p-6 bg-gradient-to-br from-gray-900 to-slate-800 shadow-2xl rounded-2xl border border-slate-700 flex flex-col items-center space-y-4">
        <img
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
          src={picture}
          alt={name}
        />
        <div className="text-center w-full">
          <h2 className="text-2xl font-bold text-white mb-3">{name}</h2>
          <div className="space-y-2 flex flex-col bg-slate-800 p-4 rounded-lg shadow-md">
            <p className="text-indigo-300">
              Username: <span className="text-gray-300">{name}</span>
            </p>
            <p className="text-indigo-300">
              Nickname: <span className="text-gray-300">{nickname}</span>
            </p>
            <p className="text-indigo-300">
              Email: <span className="text-gray-300">{email}</span>
            </p>
            <p className="text-indigo-300">
              Email Verified:{" "}
              <span className="text-gray-300">
                {email_verified ? "True" : "False"}
              </span>
            </p>
            <p className="text-indigo-300">
              Last Updated:{" "}
              <span className="text-gray-300">
                {new Date(updated_at).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
