import React from 'react';
import {  motion } from 'framer-motion';
import "./Header.scss";
import steakImage from '../../assets/images/Image4.png';
import spiceImage1 from '../../assets/images/Images3.png';
import spiceImage2 from '../../assets/images/h1.png';
import spiceImage3 from '../../assets/images/h2.png';
import { fadeIn } from '../../reducers/variants';

const Header = () => {
  return (
    <div className="bg">
      <motion.div   variants={fadeIn('up','tween', 0.1 , 1.1)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}} className='healthy-eating-container'>
        <motion.div
          className="text-section"
          variants={fadeIn('up','tween', 0.2 , 1.5 )} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}}
        >
          <motion.h1   variants={fadeIn('down','tween', 0.3 , 1.7 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:true ,amount: 0.4}}>Healthy Eating is an important part of lifestyle</motion.h1>
          <motion.p  variants={fadeIn('up','tween', 0.2 , 1.5 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</motion.p>
          <div className="scroll-indicator">
            <span>........................... Scroll</span>
          </div>
        </motion.div>

        <motion.div
          className="image-section"
          variants={fadeIn('up','tween', 0.4 , 1.6 )} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}}
        >
          <img loading="lazy" src={steakImage} alt="Healthy steak meal" className="main-image" />
          <motion.div
  variants={fadeIn('up','tween', 0.5 , 1.7 )} 
  initial='hidden'
  whileInView={'show'}
  viewport={{ once:true ,amount: 0.4}}
   className="spices-container"
          >
            <img loading="lazy" src={spiceImage1} alt="Spice 1" className="spice-image" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className='se2'>
        <motion.div
          className='se2-2'
          variants={fadeIn('right','tween', 0.6 , 1.8 )} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}}
        >
          <motion.img
            src={spiceImage2} loading="lazy"
            alt="Healthy steak meal"
            className="main-image"
            variants={fadeIn('up','tween', 0.7 , 1.9)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:true ,amount: 0.4}}
          />
          < motion.h1
       
       variants={fadeIn('up','tween', 0.8 , 2 )} 
       initial='hidden'
       whileInView={'show'}
       viewport={{ once:true ,amount: 0.4}}>Start to plan your diet today</motion.h1>
          <motion.p   variants={fadeIn('up','tween', 0.9 , 2.2 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}}>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet</motion.p>
        </motion.div>

        <motion.div
          className='se2-1'
          variants={fadeIn('left','tween', 1 , 2.3)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}}
        >
          <motion.p   variants={fadeIn('up','tween', 1.2 , 2.4 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}}>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet</motion.p>
          <motion.img loading="lazy"
            src={spiceImage3}
            alt="Healthy steak meal"
            className="main-image"
            variants={fadeIn('up','tween', 1.3 , 2.6 )} 
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:true ,amount: 0.4}}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
