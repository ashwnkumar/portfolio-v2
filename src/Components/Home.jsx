import React from "react";
import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DownloadResume from "./DownloadResume";

function Home() {
  return (
    <div className="flex items-center justify-center text-text cursor-default min-h-screen px-4">
      <motion.div
        className="flex flex-col items-center justify-center bg-background w-full max-w-3xl p-8 md:p-16 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-text text-lg md:text-2xl text-center mb-2">
          Hi, I'm{" "}
          <span className="font-mono text-3xl md:text-4xl">Ashwin Kumar</span>,
        </p>
        <p className="text-text font-bold text-3xl md:text-5xl text-center mb-4">
          Developer, Designer, Dreamer
        </p>
        <p className="text-subtext text-center text-base md:text-xl mb-8 font-medium">
          An engineer who loves to create (and occasionally design) web
          interfaces.
        </p>
        <div className="flex gap-4 items-center">
          <Link to="https://github.com/ashwnkumar" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="lg:hover:scale-110 lg:hover:text-text text-text lg:text-subtext transition-all duration-300 h-8 w-8 "
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ashwin-kumar-221160240/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="lg:hover:scale-110 lg:hover:text-text text-text lg:text-subtext transition-all duration-300 h-8 w-8 "
            />
          </Link>
          <DownloadResume />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
