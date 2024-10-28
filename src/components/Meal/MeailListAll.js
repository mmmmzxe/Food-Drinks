import React, { useState, useEffect } from 'react';
import "./Meal.scss";
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { fetchAreas } from '../../actions/mealsActions';
import { CgArrowRight } from 'react-icons/cg';
import { fadeIn } from "../../reducers/variants";
import { motion } from 'framer-motion';
const fetchMealsWithArea = async (area) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await response.json();
    return data.meals.map(meal => ({ ...meal, strArea: area, })); 
};

const MealListAll = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedArea, setSelectedArea] = useState('All');
    const [areas, setAreas] = useState([]);
    const [mealsData, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]); 
    const [visibleMeals, setVisibleMeals] = useState(10); 

    // Fetch areas when the component mounts
    useEffect(() => {
       
        const fetchAreaList = async () => {
            try {
                const areaList = await fetchAreas();
                setAreas(areaList);
            } catch (error) {
                console.error('Failed to fetch areas:', error);
            }
        };
        fetchAreas();
        fetchAreaList();
     
    }, []);

    // Fetch meals when selectedArea changes
    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            try {
                let meals = [];
                if (selectedArea === 'All') {
                    // Fetch meals for all areas
                    const areaPromises = areas.map(area => fetchMealsWithArea(area.strArea));
                    const allMeals = await Promise.all(areaPromises);
                    meals = allMeals.flat(); // Combine all the meal lists
                } else {
                    meals = await fetchMealsWithArea(selectedArea);
                }
                setMeals(meals);
                setFilteredMeals(meals);
            } catch (error) {
                console.error('Failed to fetch meals:', error);
                setMeals([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMeals();
    }, [selectedArea, areas]);

    // Handler for showing more meals
    const showMoreMeals = () => {
        setVisibleMeals((prevVisibleMeals) => prevVisibleMeals + 5); // Show 5 more meals
    };

    return (
        <div className='section-wrapper'>
            
            <div className='container'>
                <motion.div variants={fadeIn('up','tween', 0.1 , 1.1)} 
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once:true ,amount: 0.4}} className='f'>
                    <div className='sc-title'>Meals</div>

                    {/* Area Filter Dropdown */}
                    <div className='filter-area'>
                        <label htmlFor="areaFilter">Filter by Area: &nbsp;</label>
                        <select
                            id="areaFilter"
                            value={selectedArea}
                            onChange={(e) => setSelectedArea(e.target.value)}
                        >
                            <option value="All">All</option>
                            {
                                areas.map(area => (
                                    <option key={area.strArea} value={area.strArea}>{area.strArea}</option>
                                ))
                            }
                        </select>
                    </div>
                </motion.div>

                {/* Show loader while loading meals */}
                {isLoading ? <Loader /> : null}
                <div className='all-page'>
                    {/* Check if there are filtered meals */}
                    {filteredMeals && filteredMeals.length > 0 ? (
                        <section    className='sc-meal grid'>
                            {
                                filteredMeals.slice(0, visibleMeals).map(mealItem => {
                                    const { idMeal: id, strMeal: meal, strMealThumb: thumbnail , strArea } = mealItem;

                                    return (
                                        <motion.div variants={fadeIn('up','tween', 0.3 , 1.3)} 
                                        initial='hidden'
                                        whileInView={'show'}
                                        viewport={{ once:false ,amount: 0.4}}>
                                        <Link to={`/meal/${id}`} className="meal-itm align-center justify-center" key={id}>
                                            <div className='meal-itm-img'>
                                                {isLoading && <Loader />}
                                                <img
                                                    src={thumbnail}
                                                    alt={meal}
                                                    loading='eager'
                                                    onLoad={() => setIsLoading(false)} // Hide loader once image loads
                                                    style={{ display: isLoading ? 'none' : 'block' }} // Hide image until loaded
                                                />
                                                                    <div className='meal-itm-cat text-orange fw-6'>{strArea}</div>

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
                                        </Link></motion.div>
                                    );
                                })
                            }
                        </section>
                    ) : (
                        // Show "Not Found" message when no meals are found
                        <div className="not-found-message">
                            <p>No meals found for the selected area.</p>
                        </div>
                    )}
                    {/* Show "Show More" button if there are more meals to display */}
                    {filteredMeals.length > visibleMeals && (
                        <div className='show-more-btn'>
                            <button onClick={showMoreMeals}>Show More</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MealListAll;
