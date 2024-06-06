
import { Progress } from "../components/shadcn/progress/progress";
import HomePageNoUser from "../components/useServer/HomePageNoUser";
import HomePageSignIn from "../components/useServer/HomePageSignIn";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center min-h-screen">
      <HomePageNoUser />
      <HomePageSignIn />      
    </div>
  );
}
