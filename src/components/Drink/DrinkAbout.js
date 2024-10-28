import React, { useState, useEffect } from 'react';
import './DrinkAbout.scss'
import i from '../../assets/images/front-view-refreshing-lemonade-with-pomegranate-mint.jpg'
import i2 from '../../assets/images/brown-cup-with-tea-cinnamon-sticks-wooden-support.jpg'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiChevronsRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { fadeIn } from '../../reducers/variants';

const DrinkAbout = () => {
 
  return (
    <div className="section-About">
        <div className='breadcrumb'>
          <ul className='flex align-center'>
            <li className='breadcrumb-item'>
              <Link to="/" className='flex align-center'>
             <p>  Home</p>
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size={23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span className='fs-15 fw-5 text-uppercase'>Drinks</span>
            </li>
          </ul>
        </div>
        <motion.div variants={fadeIn('up','tween', 0.2, 1.4)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false ,amount: 0.4}} className='s2'>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. </p>  
      </motion.div>
       <div className='section-About-Images'>
        <motion.div variants={fadeIn('left','tween', 0.4, 1.5)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false ,amount: 0.4}}>
            <img src={i}></img>
        </motion.div>
        <motion.div variants={fadeIn('right','tween', 0.4, 1.5)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false ,amount: 0.4}}>
        <img src={i2}></img>
        </motion.div>

       </div>
       <motion.div variants={fadeIn('down','tween', 0.6, 1.6)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:false ,amount: 0.4}} className='s-t'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed sit. Mattis quis scelerisque consectetur orci dui est sem nulla.Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in ornare amet id praesent. Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus mauris est. Nec, lacinia eleifend amet, quis turpis et massa duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>  
      </motion.div>
    </div>
  );
};

export default DrinkAbout;
