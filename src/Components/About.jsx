import React from "react";
import AboutInfo from "./AboutInfo";
import SkillStack from "./SkillStack";

function About() {
  return (
    <div
      className="flex items-center justify-center pt-24 px-4 sm:px-10 md:px-16 lg:px-20"
      id="about"
    >
      <div className="flex flex-col bg-background text-text gap-10 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <AboutInfo />
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-xl hover:scale-110 transition-transform duration-500 shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
        <SkillStack />
      </div>
    </div>
  );
}

export default About;
