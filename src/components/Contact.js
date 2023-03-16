import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComponentsWrapper from "../hoc/ComponentsWrapper";
import { slideIn } from "../utils/motion";
import Tilt from "react-tilt";
import { contacts } from "../constants";
import contactLogo from '../assets/contact.png'

const Contact = () => {
  return (
    <div className="flex-col flex over-flow-hidden w-full">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#b0b0b0] p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
      </motion.div>
      <div 
        className="flex flex-col items-center md:flex-row-reverse md:justify-between  md:flex-nowrap w-full"
      >

        <div
          className="flex justify-center items-center w-[100%] md:w-[50%] sm:h-[400px] lg:h-[550px] h-[350px]"
        >
          <img className="object-contain h-[70%]" src={contactLogo} alt='contact-logo' />
        </div>

        <div className="flex flex-col gap-5 w-[100%] md:w-[50%] h-[100%]">
          {contacts.map((con, i) => (
            <motion.div
              variants={slideIn("left", "tween", 0.6, 1)}
              key={`contact-${i}`}
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="w-[100%] md:w-[85%]  h-[60px] white-black-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div className="bg-[#b0b0b0] rounded-[20px] min-h-[60px] flex items-center">
                  <img
                    className="w-[50px] h-[50px] px-[5px] object-contain"
                    src={con.icon}
                    alt={con.contact}
                  />
                  <p className="truncate text-primary text-[14px] px-[10px]">
                    <a target="_blank" href={con.contact} rel="noreferrer">
                      {con.contact}
                    </a>
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ComponentsWrapper(Contact, "contact");
