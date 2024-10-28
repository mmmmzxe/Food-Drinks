import React from "react";
import './About.scss';
import { motion } from "framer-motion";
import tableSettingImage from "../../assets/images/7.png"; // replace with the actual path to your image
import restaurantImage from "../../assets/images/6.png";      // replace with the actual path to your image
import Imag from '../../assets/images/rosemary.png'
import { fadeIn } from "../../reducers/variants";
const About=()=> {
  return (
    <motion.div className="app-container" variants={fadeIn('up','tween' , 0.1 , 1)}
    initial='hidden'
    whileInView={'show'}  viewport={{once:false , amount: 0.3}}>
     
    <motion.div className="app-container-1"  variants={fadeIn('down','tween' , 0.2 , 1.5)}
						initial='hidden'
						whileInView={'show'}  viewport={{once:false , amount: 0.3}}
            >

    <motion.div  variants={fadeIn('left','tween' , 0.1 , 1)}
						initial='hidden'
						whileInView={'show'} className="image-gallery">
      <img src={tableSettingImage} alt="Table Setting" className="table-image"/>
    </motion.div>
    <motion.div className="contact-info"  viewport={{once:false , amount: 0.3}} variants={fadeIn('left','tween' , 0.3 , 2)}
						initial='hidden'
						whileInView={'show'}>
      <p>We can be contacted via</p>
      <p>
        email <a href="mailto:info@foodzero.com">info@foodzero.com</a>
        <br />
        or telephone on <a href="tel:+852852346000">+86 852 346 000</a>
      </p>
    </motion.div>
    </motion.div>
   <motion.div className="location"  viewport={{once:false , amount: 0.3}} variants={fadeIn('left','tween' , 0.5 ,2.5 )}
						initial='hidden'
						whileInView={'show'}>
   <div className="location-info">
   <p>We are located in 1959 Sepulveda Blvd, Culver City, CA. 90230</p>
   <a href="https://maps.google.com" className="maps-link">View in maps</a>
   </div>
   <motion.div className="location-image" variants={fadeIn('down','tween' , 0.4 , 3)}
					 viewport={{once:false , amount: 0.3}}	initial='hidden'
						whileInView={'show'}>
   <img src={restaurantImage} alt="Restaurant" className="restaurant-image"/>

   </motion.div>
    </motion.div>
    </motion.div>
  );
}

export default About;
