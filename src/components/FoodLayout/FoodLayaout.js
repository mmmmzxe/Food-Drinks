import React from "react";
import "./FoodLayout.scss";
import Drink from '../../assets/images/d.png'
import { fadeIn } from '../../reducers/variants';
import {  motion } from 'framer-motion';
import Food from '../../assets/images/f.png'
import Food2 from '../../assets/images/bread on white ceramic plate 1.png'
const FoodLayout = () => {
  return (
    <div className="food-layout">
   <div className="all-items">
   <div className="all-item">
    <motion.div variants={fadeIn('right','tween', 0.2 , 1.5)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}} className="item image image-1">
        <img src={Drink} alt="Drink" />
      </motion.div>
      <motion.div variants={fadeIn('left','tween', 0.3 , 1.6)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}} className=" text">
        <h2>Melt in Your Mouth</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className="text-p">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>

        </div>
      </motion.div>
      
    </div>
    <div className="all-item-2">
    <motion.div variants={fadeIn('left','tween', 0.3 , 1.7)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}} className="item-2 image image-1">
        <img src={Food} alt="Drink" />
      </motion.div>
      <motion.div variants={fadeIn('right','tween', 0.4 , 1.8)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:true ,amount: 0.4}}className=" text">
        <h2>Melt in Your Mouth</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
       
      </motion.div>
    </div>
    <div className="all-item-3">
    <motion.div variants={fadeIn('up','tween', 0.5 , 1.9)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false ,amount: 0.4}}  className=" text">  
            <div className="text-p"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
     </div>
        <h2>Melt in Your Mouth</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     

       
      </motion.div>
        <motion.div variants={fadeIn('down','tween', 0.6 , 2)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false ,amount: 0.4}}className="item-4 image image-1">
        <img src={Food2} alt="Drink" />
  </motion.div>
    </div>
   </div>
      
    
     
    </div>
  );
};

export default FoodLayout;
