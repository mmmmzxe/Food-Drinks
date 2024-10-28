import React from "react";
import "./Category2.scss";
import I from "../../assets/images/s.png";
import Im from "../../assets/images/s2.png";
import Img from "../../assets/images/s3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../reducers/variants";
const CaloriesBalance = ({ categories }) => {
  // Limit the categories to the first 3
  const limitedCategories = categories.slice(0, 3);

  // Custom images array
  const categoriess = [Im, Img, I];

  return (
    <motion.div variants={fadeIn('up','tween', 0.3 , 1.8 )} 
    initial='hidden'
    whileInView={'show'} className="calories-balance-container">
      <div className="header">
        <h1>Calories Energy Balance</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="categories grid">
        {limitedCategories.map((category, index) => {
          const { idCategory: id, strCategory: title } = category;

          return (
            <motion.div className="category-item" variants={fadeIn('down','tween', 0.6 , 2.4 )} 
            initial='hidden'
            whileInView={'show'} key={id}>
              {/* Use the custom images instead of the thumbnail */}
              <img src={categoriess[index]} alt={title} />
              <div className="category-info">
               <div>
               <h3>{title}</h3>
               </div>
                <div>
                <Link to={`/meal/category/${title}`}>→</Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CaloriesBalance;
