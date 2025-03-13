import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutSection = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => {
        logout({ returnTo: window.location.origin + "/thankyou" });
      }}
      className="bg-gradient-to-tr hover:bg-gradient-to-tl cursor-pointer from-pink-500/70 to-purple-600/70 font-semibold text-white py-1.5 px-3 rounded-md shadow-md hover:opacity-90 transition">
      Logout ?
    </button>
  );
};

export default LogoutSection;
