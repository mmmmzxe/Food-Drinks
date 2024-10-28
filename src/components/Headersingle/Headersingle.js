import React from "react";
import "./Headersingle.scss";
import { fadeIn } from "../../reducers/variants";
import { motion } from 'framer-motion';
const Headersingle = ({ bgImages , title}) => {


  return (
    <motion.div   
      className="h-container"
      style={{ backgroundImage: `url(${bgImages})` }}
    >
      <div className="content-s">
        <motion.h2 variants={fadeIn('up','tween', 0.2 , 1.3)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}}>{title}</motion.h2>
      </div>
    </motion.div>
  );
};

export default Headersingle;
