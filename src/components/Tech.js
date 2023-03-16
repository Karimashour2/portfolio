import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from '../styles';
import { technologies } from '../constants';
import ComponentsWrapper from '../hoc/ComponentsWrapper';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Techs.</h2>
      </motion.div>
      <div className='my-10 flex flex-row flex-wrap justify-center gap-10 md:grid md:grid-cols-5 '> 
        {technologies.map((tech)=>
          <div className='flex justify-center' key={tech.name}>
            <img className='w-28 h-28 object-cover' src={tech.icon} alt={tech.name} />
          </div>
        )}
      </div>
    </>
  )
}

export default ComponentsWrapper(Tech , 'tech');