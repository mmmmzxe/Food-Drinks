// src/components/FoodiesHub.js
import React from 'react';
import './Chef.scss'; // External CSS for styling
import Imag from '../../assets/images/Image1.png'
import { motion } from 'framer-motion';
import Imag3 from '../../assets/images/Leaf1.png'
import { fadeIn, plateVariants, staggerContainer } from '../../reducers/variants';
const Chef = () => {

  return (
    <div className="excellent-cook-container">
    <motion.div className="image-section" variants={fadeIn('up','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} >
    
      <motion.div  className="chef-image">
      <img  src={Imag} alt="Chef preparing meal " />
      </motion.div>

  
      
    </motion.div>
    
    <motion.div 
    viewport={{once:false , amount: 0.4}}  className="text-section">
      <motion.h1 variants={fadeIn('up','tween', 0.4 , 2 )} 
    initial='hidden'  viewport={{once:false , amount: 0.4}}
    whileInView={'show'}>Excellent cook</motion.h1>
      <motion.p variants={fadeIn('down','tween', 0.6 , 2.4 )} 
    initial='hidden'
    whileInView={'show'}  viewport={{once:false , amount: 0.4}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</motion.p>
      <motion.img variants={fadeIn('left','tween', 0.6 , 2.4 )} 
    initial='hidden'
    whileInView={'show'}  viewport={{once:false , amount: 0.4}} src={Imag3} alt="Salmon dish" className="salmon-image" />
    </motion.div>
  </div>
  );
};

export default Chef;
