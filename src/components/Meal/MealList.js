import React, { useState } from "react";
import "./Meal.scss";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { CgArrowRight } from "react-icons/cg";
import { fadeIn } from "../../reducers/variants";
import { motion } from 'framer-motion';
const MealList = ({ meals }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // Show 4 meals initially

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Increase the number of visible meals by 4
  };

  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="sc-title">Meals</div>
        <motion.section  className="sc-meal grid">
          {meals?.slice(0, visibleCount).map((mealItem) => {
            const { idMeal: id, strMeal: meal, strMealThumb: thumbnail } = mealItem;

            return (
              <motion.div variants={fadeIn('right','tween', 0.2 , 1.5)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false ,amount: 0.4}} className="meal-itm" key={id}>
                <div className="meal-itm-img">
                  {isLoading && <Loader />}
                  <img
                    src={thumbnail}
                    alt={meal}
                    loading="eager"
                    onLoad={() => setIsLoading(false)} // Hide loader once image loads
                    style={{ display: isLoading ? "none" : "block" }} // Hide image until loaded
                  />
                </div>

                <div className="meal-itm-body">
                  <div className="meal-itm-body-info flex flex-column">
                    <h5 className="meal op-09">{meal}</h5>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link
                      to={`/meal/${id}`}
                      className="align-center link justify-center"
                    >
                      <p className="link-p">Read More</p>
                      <p className="fs-20">
                        <CgArrowRight className="link-i" />
                      </p>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Show "See More" button if there are more meals to display */}
        {visibleCount < meals?.length && (
          <div className='show-more-btn'>
            <button onClick={handleSeeMore} >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealList;
