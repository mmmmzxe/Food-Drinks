import React, { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { BiChevronsRight } from 'react-icons/bi';
import { PiPlayBold } from 'react-icons/pi';
import { BsCheck2 } from 'react-icons/bs';
import { fetchDrinkDetail } from '../../actions/mealsActions';
import RecentDrink from './ResentDrink';
import RecentMeals from '../Meal/ResentMeal';
import { motion } from 'framer-motion';
import { fadeIn } from '../../reducers/variants';


const DrinkDetail = () => {
  const { id } = useParams(); // Get the drink ID from the URL parameters
  const [drink, setDrink] = useState(null); // State to hold drink data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getDrinkDetail = async () => {
      setLoading(true); // Start loading
      try {
        const fetchedDrink = await fetchDrinkDetail(id); // Fetch drink details
        setDrink(fetchedDrink); // Set the drink data
      } catch (error) {
        console.error('Error fetching drink details:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getDrinkDetail(); // Call the fetch function
  }, [id]);

  // Check if loading or drink data is null
  if (loading) return <p>Loading drink details...</p>;
  if (!drink) return <p>No drink found.</p>;

  // Prepare ingredients, instructions, and tags
  const combinedIngredients = Object.keys(drink)
    .filter(key => key.includes('strIngredient') && drink[key])
    .map((key, index) => ({
      ingredient: drink[key],
      measure: drink[`strMeasure${index + 1}`] || '' // Get measure if exists
    }));

  const instructions = drink.strInstructions ? drink.strInstructions.split('.').filter(Boolean) : []; // Split instructions into steps
  const tags = drink.strTags ? drink.strTags.split(',') : []; // Convert tags to array

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <motion.div variants={fadeIn('up','tween', 0.2 , 1.3)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}}className='breadcrumb'>
          <ul className='flex breadcrumb-i align-center'>
            <li className='breadcrumb-item'>
              <Link to="/" className='flex align-center'>
                 <p> Home</p>
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size={23} />
            </li>
            <li className='breadcrumb-item'>
              <Link to="/drink" className='flex align-center'>
                 <p> Drinks</p>
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size={23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span className='fs-15 fw-5 text-uppercase'>{drink.strDrink}</span>
            </li>
          </ul>
        </motion.div>

        <div className='sc-title'>Drink Details</div>
        <section className='sc-details'>
          <div className='details-head'>
            <motion.h3 variants={fadeIn('left','tween', 0.3 , 1.4)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}}className='title text-orange'>{drink.strDrink}</motion.h3>
            <div className='py-4'>
              <motion.div variants={fadeIn('left','tween', 0.4, 1.5)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='category-t flex'>
                <span className='text-uppercase fw-8 ls-1 my-1'>Category: &nbsp;</span>
                <span className='text-uppercase ls-2'>{drink.strCategory}</span>
              </motion.div>
              <motion.div variants={fadeIn('left','tween', 0.5, 1.6)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='source align-center'>
                <span className='fw-8'>Source: &nbsp;</span>
                <a href={drink.strSource} target="_blank" rel="noopener noreferrer">
                  <div className='paly'><span>Go Watch</span></div>
                  <div><PiPlayBold /></div>
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeIn('down','tween', 0.6, 1.7)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='details-all'>
             
              <div className='details-img'>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} className='img-cover' />
              </div>
              <div className='details-right'>
              <RecentDrink/>
              </div>
            </motion.div>
          </div>

          <div className='details-body-all'>
            <motion.div variants={fadeIn('left','tween', 0.4, 1.5)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='details-body'>
              <div className='details-intro'>
                <div className='ingredients my-5 px-3 py-3'>
                  <h6 className='fs-16'>Ingredients</h6>
                  <hr />
                  <ul className='grid'>
                    {combinedIngredients.map((item, idx) => (
                      <li key={idx} className="flex align-center">
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='text-capitalize fs-15'>{`${item.measure} - ${item.ingredient}`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <div className='details-all'>
               
               <motion.div variants={fadeIn('up','tween', 0.4, 1.5)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='instructions my-4'>
                   <h6 className='fs-16'>Instructions:</h6>
                   <hr></hr>
                   <ul className='grid'>
                     {
                       instructions?.map((instruction, idx) => (
                         <li key={idx} className="fs-14">
                         
                           <span className='fs-16 fw-5 op-09'>  <BsCheck2 size={20} className="icons-i" />{instruction}</span>
                         </li>
                       ))
                     }
                   </ul>
                 </motion.div>
                    
                    <div className='details-right'>
                 <RecentMeals/>
              </div>
                    </div>

            {tags.length > 0 && (
              <motion.div variants={fadeIn('down','tween', 0.4, 1.5)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:true ,amount: 0.4}} className='tags flex align-start flex-wrap'>
                <h6 className='fs-16'>Tags:</h6>
                <ul className='flex align-center flex-wrap'>
                  {tags.map((tag, idx) => (
                    <li key={idx} className="fs-14">{tag}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DrinkDetail;
