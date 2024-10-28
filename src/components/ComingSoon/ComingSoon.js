import React, { useState } from "react";
import "./ComingSoon.scss";
import { fadeIn } from "../../reducers/variants";
import { motion } from 'framer-motion';
const ComingSoon = () => {
  return (
    <div className="coming-soon-container-all">
      <motion.div  variants={fadeIn('up','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className="coming-soon-container coming-soon-container-1">
        <div className="content">
          <h4>7 Reasons to Start Your Day With Lemon Water</h4>
          <button className="view-menu-btn">View Menu</button>
        </div>
      </motion.div>
      <motion.div variants={fadeIn('down','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className="coming-soon-container coming-soon-container-2">
        <div className="content">
          <h4>12 Sparkling Wines We're Loving This Summer</h4>
          <button className="view-menu-btn">View Menu</button>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
