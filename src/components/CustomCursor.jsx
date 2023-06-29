import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const CustomCursor = () => {
    const [cursorVariant, setCursorVariant] = useState("default");

  // state for mouse position
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
        height: 150,
        width: 150,
        x: mousePosition.x - 70,
        y: mousePosition.y - 70,
        backgroundColor: "aqua",
        mixBlendMode: "difference",
      },
  };
  return (
    <motion.div
      
      variants={variants}
      animate={cursorVariant}
      className="cursor z-50 pointer-events-none h-4 w-4 rounded-full fixed top-0 left-0 bg-black"
    ></motion.div>
  );
};

export default CustomCursor;
