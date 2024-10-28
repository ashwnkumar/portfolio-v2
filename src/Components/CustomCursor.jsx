// CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Default cursor replaced with a white dot */}
      <div
        className="fixed rounded-full bg-text pointer-events-none hidden xl:block z-50" // Hidden on small screens, visible on medium and up
        style={{
          width: "10px", // Size of the white dot
          height: "10px", // Size of the white dot
          left: cursorPosition.x + 5, // Center the dot
          top: cursorPosition.y + 4, // Center the dot
        }}
      />

      {/* Follow cursor animation */}
      <motion.div
        className="fixed rounded-full border border-subtext pointer-events-none hidden xl:block z-50" // Hidden on small screens, visible on medium and up
        style={{
          width: "40px", // Size of the follow cursor
          height: "40px", // Size of the follow cursor
          left: cursorPosition.x - 10, // Center the follow cursor
          top: cursorPosition.y - 10, // Center the follow cursor
        }}
        animate={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
