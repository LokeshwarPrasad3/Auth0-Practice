import React from "react";
import Login from "../../components/auth/LoginSection";

const AuthPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center gap-3 flex-col">
      <Login />
    </div>
  );
};

export default AuthPage;
