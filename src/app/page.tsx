
import { Progress } from "../components/atomic/progress/progress";
import HomePageNoUser from "../components/home/HomePageNoUser";
import HomePageSignIn from "../components/home/HomePageSignIn";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center min-h-screen">
      <HomePageNoUser />
      <HomePageSignIn />      
    </div>
  );
}
