import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faCode,
  faHeadphones,
  faIcons,
  faMugSaucer,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import JapaneseText from "./JapaneseText";

const AboutInfo = () => {
  return (
    <div className="flex flex-col gap-7 w-full md:w-1/2 px-4 sm:px-6 lg:px-8">
      <div>
        <p className="text-3xl sm:text-3xl font-semibold text-text">
          About Me:
        </p>
      </div>
      <div>
        <p className="text-base sm:text-lg text-subtext/60 tracking-widest">
          <FontAwesomeIcon icon={faCode} /> Developer
        </p>
        <p className="text-base sm:text-xl text-subtext leading-relaxed mt-2">
          I am a{" "}
          <span className="text-text font-medium">
            ReactJS Front-End Developer
          </span>{" "}
          with a degree in{" "}
          <span className="text-text font-medium">Computer Engineering.</span>{" "}
          Creating web interfaces has always fascinated me, and I love bringing
          designs to life in code.
        </p>
        <p className="text-sm sm:text-lg text-subtext/50 tracking-widest mt-4">
          // Skills{" "}
          <span className="text-subtext">
            ReactJS | HTML | CSS | TailwindCSS | JavaScript | Git | VSCode
          </span>
        </p>
      </div>
      <div>
        <p className="text-base sm:text-lg text-subtext/60 tracking-widest">
          <FontAwesomeIcon icon={faPencil} /> Designer
        </p>
        <p className="text-base sm:text-xl text-subtext mt-2 leading-relaxed">
          I’ve always been the{" "}
          <span className="text-text font-medium">creative</span> kind. My
          foundational knowledge of{" "}
          <span className="text-text font-medium">
            Modern UI Design Principles
          </span>{" "}
          helps me bridge functionality and aesthetics. I use{" "}
          <span className="text-text font-medium">Figma</span> for mockups
          before coding.
        </p>
        <p className="text-sm sm:text-lg text-subtext/50 tracking-widest mt-4">
          // Skills <span className="text-subtext">Figma | Pen & Paper</span>
        </p>
      </div>
      <div>
        <p className="text-base sm:text-lg text-subtext/60 tracking-widest">
          <FontAwesomeIcon icon={faCameraRetro} /> Misc
        </p>
        <p className="text-base sm:text-xl text-subtext mt-2 leading-relaxed">
          In my free time, I enjoy{" "}
          <span className="text-text font-medium">music</span>, watching{" "}
          <span className="text-text font-medium">movies</span>, and being{" "}
          <span className="text-text font-medium">behind the camera</span> to
          capture moments. I’m always up for a cup of{" "}
          <span className="text-text font-medium">coffee.</span>
        </p>
        <JapaneseText />
      </div>
    </div>
  );
};

export default AboutInfo;
