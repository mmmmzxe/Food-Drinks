import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { BsArrowRight } from 'react-icons/bs';
import { fetchNonAlcoholicDrinks } from '../../actions/mealsActions';
import { motion } from 'framer-motion';
import { fadeIn } from '../../reducers/variants';

const RecentDrink = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [drinksData, setDrinks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const nonAlcoholicDrinks = await fetchNonAlcoholicDrinks();
        
        console.log('Fetched drinks:', nonAlcoholicDrinks); // Log fetched drinks to debug

        // Ensure there are drinks to display
        if (nonAlcoholicDrinks && nonAlcoholicDrinks.length > 0) {
          // Shuffle the drinks array
          const shuffledDrinks = nonAlcoholicDrinks.sort(() => 0.5 - Math.random());
          // Take the first 4 drinks
          const selectedDrinks = shuffledDrinks.slice(0, 8);
          console.log('Selected drinks:', selectedDrinks); // Log selected drinks
          setDrinks(selectedDrinks);
        } else {
          setError('No drinks available.');
        }
      } catch (error) {
        console.error('Error fetching drinks:', error);
        setError('Failed to fetch drinks. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getDrinks();
  }, []);

  return (
    <div className='details-right-all'>
      <h6 className='fs-16'>Recent Drinks</h6>
      <hr />

      {/* Show loader while loading drinks */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div>
          <section className='grid'>
            {drinksData.map(drink => (
              <motion.div variants={fadeIn('left','tween', 0.4, 1.5)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:true ,amount: 0.4}} className='all-card' key={drink.idDrink}>
                <div className='details-right-image'>
                  <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    loading='eager'
                  />
                </div>
                <div className='icons'>
                  <p className=''>{drink.strDrink}</p>
                
                  <Link to={`/drink/${drink.idDrink}`} className="align-center icon justify-center">
                    <BsArrowRight />
                  </Link>
                 
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default RecentDrink;
