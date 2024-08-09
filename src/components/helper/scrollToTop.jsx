import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8  text-blue-900 p-3 rounded-full shadow-lg ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <FaCircleArrowUp size={34} />
    </motion.button>
  );
};

export default ScrollToTopButton;
