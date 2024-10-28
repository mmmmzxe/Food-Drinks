import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Secions.scss";
import { fadeIn } from "../../reducers/variants";
import { motion } from 'framer-motion';
const Secions = () => {

  return (
    <motion.div variants={fadeIn('left','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'} className="section-container">
      <div className="content-s">
       <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
      </div>
    </motion.div>
  );
};

export default Secions;
