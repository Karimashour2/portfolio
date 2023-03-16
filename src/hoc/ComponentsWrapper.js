import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { styles } from '../styles';
import bg from '../assets/bg.jpg'


const ComponentsWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount:0.1 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-[40px]`}
      >
        <span className='hash-span' id={idName}></span>
        <img src={bg} alt="bg" className='w-full h-full z-[-1] absolute inset-0 opacity-[0.1]'/>
        <Component/>
      </motion.section>
    )

  }


export default ComponentsWrapper;
