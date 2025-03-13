import React from "react";
import UserDetails from "../../components/user/UserDetails";

const HomePage = () => {
  // Example Usage
  const user = {
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    username: "John Doe",
    nickname: "Johnny",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    email_verified: true,
    last_update: "2025-03-13T11:11:47.788Z",
  };

  return (
    <div className="h-full w-full flex justify-center h-screen items-center">
      <UserDetails />
    </div>
  );
};

export default HomePage;
