import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchNonAlcoholicDrinks } from '../../actions/mealsActions';
import Loader from '../Loader/Loader';
import { CgArrowRight } from 'react-icons/cg';
import { fadeIn } from '../../reducers/variants';
import { motion } from 'framer-motion';

const DrinkC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3); // Show 4 meals initially
  const [drinks, setDrinks] = useState([]);



  useEffect(() => {
    const getDrinks = async () => {
      try {
        const nonAlcoholicDrinks = await fetchNonAlcoholicDrinks();
        setDrinks(nonAlcoholicDrinks);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      } finally {
        setIsLoading(false); // Set loading to false once the fetch is complete
      }
    };

    getDrinks();
  }, []);
  return (
    <div className="section-wrapper">
      <div className="container">
       
        <motion.section  className="sc-meal grid">
          {drinks?.slice(0, visibleCount).map((drink) => {
           

            return (
              <motion.div  className="meal-itm"  key={drink.idDrink}>
                <div className="meal-itm-img">
                  {isLoading && <Loader />}
                  <img
                   src={drink.strDrinkThumb} alt={drink.strDrink} 
                    loading="eager"
                    onLoad={() => setIsLoading(false)} // Hide loader once image loads
                    style={{ display: isLoading ? "none" : "block" }} // Hide image until loaded
                  />
                     <div className='meal-itm-cat text-orange fw-6'>Drinks</div>
                </div>

                <div className="meal-itm-body">
                  <div className="meal-itm-body-info flex flex-column">
                    <h5 className="meal op-09">{drink.strDrink}</h5>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link
                      to={`/drink/${drink.idDrink}`}
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

      </div>
    </div>
  );
};

export default DrinkC;
