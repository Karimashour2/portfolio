import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import ComponentsWrapper from "../hoc/ComponentsWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import link from '../assets/link.png'

const Work = () => {
  return (
    <>
      <motion.div  variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-[#777777] text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {projects.map((proj, idx) => (
          <ProjectCard proj={proj} idx={idx} key={proj.name}/>
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({proj,idx})=> {
  return (
    <motion.div
    variants={fadeIn("up", "spring", idx * 0.5, 0.75)}
  >
    <Tilt
      className="black-white-gradient rounded-2xl p-[1px]"
      key={proj.name}
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <div className="bg-[#00000019]  p-5 rounded-2xl sm:w-[400px] w-full h-[420px]">
        <div className="relative w-full h-[200px]">
          <img
            src={proj.image}
            alt={proj.name}
            className="rounded-2xl h-full"
          />
          <div className="absolute top-0 right-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() =>
                window.open(proj.source_code_link, "_blank")
              }
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" />
            </div>
          </div>
          <div className="absolute top-0 left-0 flex justify-start m-4 card-img_hover">
            <div
              onClick={() => window.open(proj.demo_link, "_blank")}
              className="black-gradient w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={link} alt="github" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-[24px]">{proj.name}</h3>
          <p className="text-[#b0b0b0] text-[14px]">
            {proj.description}
          </p>
        </div>
        <div className="flex gap-2">
          {proj.tags.map((tag) => (
            <p
              key={tag.name}
              className={`${tag.color} text-[14px] mt-2`}
            >{`#${tag.name}`}</p>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
  )
}

export default ComponentsWrapper(Work, "work");
