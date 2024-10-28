import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../reducers/variants';

const fetchMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='); // Search for all meals
  const data = await response.json();

  // Simulate showing 4 random meals
  const shuffledMeals = data.meals.sort(() => Math.random() - 0.5); // Shuffle the meals array
  const limitedMeals = shuffledMeals.slice(0, 8); // Take the first 4 meals

  return limitedMeals;
};

const RecentMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mealsData, setMeals] = useState([]); // Meals list

  // Fetch meals when the component mounts
  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        const meals = await fetchMeals();
        setMeals(meals);
      } catch (error) {
        console.error('Failed to fetch meals:', error);
        setMeals([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMeals();
  }, []);

  return (

      <motion.div  className='details-right-all'>
        
        <h6 className='fs-16'>Recent Meals</h6>
<hr></hr>
          {/* Removed Area Filter Dropdown */}

          {/* Show loader while loading meals */}
          <div className=''>
            {/* Check if there are meals */}
         
              <section className='grid'>
                {mealsData.map(mealItem => {
                  const { idMeal: id, strMeal: meal, strMealThumb: thumbnail , strArea } = mealItem; // Assuming strArea is still part of the data

                  return (
                    <motion.div variants={fadeIn('left','tween', 0.4, 1.5)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once:true ,amount: 0.4}} className='all-card ' key={id}>
                         
                      <div className='details-right-image'>
                      
                        <img
                          src={thumbnail}
                          alt={meal}
                          loading='eager'
                          onLoad={() => setIsLoading(false)}
                          style={{ display: isLoading ? 'none' : 'block' }}
                        />
                      {/* Display area if available */}
                      </div>
                      
                      <div className='icons'>
                      <p className=' text-orange fw-6'>{strArea}</p> 
                        <p className='meal op-09'>{meal}</p>
                        <Link to={`/meal/${id}`} className="align-center icon justify-center" > <BsArrowRight/> </Link>
                      </div>
                  
                    </motion.div>
                  
                  );
                })}
              </section>
        
          </div>
      
      </motion.div>
 
  );
};

export default RecentMeals;