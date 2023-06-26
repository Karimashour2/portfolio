import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Laptop, Stars } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#000]" />
          <div className="w-1 sm:h-80 h-40 black-gradient-bottom" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#000]`}>
            Hi, I'm <span className="text-[#d56666]">Karim</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 black-text-gradient`}>
            I'm Software Developer - FrontEnd
          </p>
          <div className="relative w-[100px] h-[200px]"></div>
        </div>
      </div>
      <a href="#about" className="arrows hidden sm:block absolute w-[85px] left-[25%] top-[80%] lg:top-[60%]  ">
          <span></span>
          <span></span>
          <span></span>
      </a>
      <div
        className={`${styles.paddingX} absolute z-10 xs:bottom-5 bottom-20 w-full flex  items-center justify-center sm:justify-start`}
      >
        <a href="#about" className="block sm:hidden">
          <div className="w-[30px] h-[55px] border-[3px] border-black rounded-3xl">
            <motion.div
              className="w-3 h-3 rounded-full bg-[#b56666] mx-auto p-2 mt-1"
              animate={{
                y: [0, 26, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
      <Laptop />
      <Stars />
    </section>
  );
};

export default Hero;
