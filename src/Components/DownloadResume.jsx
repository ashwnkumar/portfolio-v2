import React from "react";

const DownloadResume = () => {
  return (
    <div>
      <a
        href="/Resume-Ashwin-Kumar.pdf"
        download
        className="flex text-background lg:text-text bg-text lg:bg-background  border border-subtext px-4 py-2 rounded-full lg:hover:scale-110 hover:text-background lg:hover:bg-text transition-all duration-500  "
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;
