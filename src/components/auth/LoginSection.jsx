import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginSection = () => {
  const navigate = useNavigate();
  const { isLoading, loginWithRedirect, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <button
        style={{
          cursor: isLoading ? "not-allowed" : "pointer",
          opacity: isLoading ? "0.3" : "1",
        }}
        onClick={() => loginWithRedirect()}
        className="bg-gradient-to-r cursor-pointer from-pink-500 to-purple-600 text-white py-2 px-4 font-semibold rounded-md shadow-md hover:opacity-90 transition">
        Login Your Account 
      </button>
      {isLoading && (
        <p className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-bold text-xl">
          Loading....
        </p>
      )}
    </>
  );
};

export default LoginSection;
