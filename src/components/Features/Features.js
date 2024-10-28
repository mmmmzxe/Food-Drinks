// src/components/FoodiesHub.js
import React from 'react';
import './Features.scss'; // External CSS for styling
import Imag from '../../assets/images/CircleIcon.png'
import Imag2 from '../../assets/images/CircleIcon2.png'
import Imag3 from '../../assets/images/CircleIcon3.png'
import { fadeIn } from "../../reducers/variants";
import { motion } from 'framer-motion';
const Features = () => {

  return (
    <>
    <div className='features'>
        <motion.div variants={fadeIn('up','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className='features-1'>
            <div className='features-img'><img src={Imag}></img></div>
            <div className='features-text'>
              <h4>Premium Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
        </motion.div>
        <motion.div variants={fadeIn('down','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className='features-1'>
            <div className='features-img' ><img src={Imag2}></img></div>
            <div className='features-text'>
              <h4>Premium Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
        </motion.div>
        <motion.div variants={fadeIn('up','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className='features-1'>
            <div className='features-img'><img src={Imag3}></img></div>
            <div className='features-text'>
              <h4>Premium Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
        </motion.div>

    </div>
    </>
  );
};

export default Features;
