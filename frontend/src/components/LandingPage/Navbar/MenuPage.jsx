import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./MenuPage.css";

// Variants for the entire menu container (handling slide-down and exit effects)
const containerVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeInOut" } 
  },
  exit: { 
    y: "100%", 
    opacity: 0, 
    transition: { duration: 0.6, ease: "easeIn" } // Changed to easeIn for exit
  }
};

// Variants for individual nav items – they slide in from the right
const navItemVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { 
    x: "0%", 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

// Parent variants for staggering the children animations
const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const MenuPage = () => {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

  // When close is clicked, trigger the exit animation
  const handleClose = () => {
    setIsClosing(true);
  };

  // Once the exit animation completes, navigate away
  const handleAnimationComplete = () => {
    if (isClosing) {
      navigate("/");
    }
  };

  return (
    <motion.div
      className="menu-container"
      variants={containerVariants}
      initial="hidden"
      animate={isClosing ? "exit" : "visible"}
      onAnimationComplete={handleAnimationComplete}
    >
      {/* Background image with pulsing oscillation */}
      <motion.div
        className="bg-image"
        style={{
          backgroundImage: `url("/banner_img.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -10,
          filter: "brightness(97%)"
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [1, 0.9, 1]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut"
        }}
      />

      <button className="close-button" onClick={handleClose}>
        Close
      </button>

      <motion.div
        className="menu-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={navItemVariants}>ABOUT</motion.h1>
        <motion.h1 variants={navItemVariants}>COURSES</motion.h1>
        <motion.h1 variants={navItemVariants}>FEATURES</motion.h1>
        <motion.h1 variants={navItemVariants}>ROADMAPS</motion.h1>
        <motion.button variants={navItemVariants} className="contact-button">
          CONTACT
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MenuPage;
