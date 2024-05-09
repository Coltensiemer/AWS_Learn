import HomePageNoUser from "../components/useServer/HomePageNoUser";
import HomePageSignIn from "../components/useServer/HomePageSignIn";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <HomePageNoUser />
      <HomePageSignIn />
    </div>
  );
}
