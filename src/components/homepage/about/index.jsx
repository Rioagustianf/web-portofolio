import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalData } from "../../../utils/personalData";

const About = () => {
  const aboutRef = useRef(null);
  const { scrollY } = useScroll();

  // Transformasi untuk opacity dan pergeseran vertikal
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="relative">
        <motion.div
          className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"
          style={{ opacity, y }}
        ></motion.div>
        <div className="flex items-center justify-start relative">
          <motion.span
            className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ABOUT ME
          </motion.span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </motion.div>
        <motion.div
          id="profile"
          className="flex justify-center items-center order-1 lg:order-2 relative w-300 h-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/blob.svg"
            width={300}
            height={300}
            alt="blob"
            className="z-0 md:w-200 sm:w-200"
          />
          <img
            src="/profile.png"
            width={310}
            height={300}
            alt="profile"
            className="profile-img absolute"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
