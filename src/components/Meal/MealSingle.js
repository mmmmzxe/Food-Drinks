import React, { useEffect } from 'react';
import "./Meal.scss";

import { AiFillCheckCircle, AiFillHome, AiTwotoneCheckSquare } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { BiCheckCircle, BiChevronsRight, BiListCheck, BiSolidCheckCircle } from "react-icons/bi";
import { AiOutlineCheckSquare } from 'react-icons/ai';

import ResentMeal from './ResentMeal';
import { PiPlayBold } from 'react-icons/pi';
import { BsCheck2 } from 'react-icons/bs';
import RecentDrink from '../Drink/ResentDrink';
import { motion } from 'framer-motion';
import { fadeIn } from '../../reducers/variants';
const MealSingle = ({ meal }) => {


  let tags = meal?.tags?.split(',');
  let instructions = meal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);

  // Combine ingredients and measures
  const combinedIngredients = meal?.ingredients?.map((ingredient, index) => {
    const measure = meal?.measures[index] || ''; // Get the corresponding measure
    return { ingredient, measure };
  });
 
  
  return (
    <div className='section-wrapper'>
      <div className='container'>
        <motion.div variants={fadeIn('up','tween', 0.2 , 1.3)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='breadcrumb'>
          <ul className='flex breadcrumb-i align-center '>
          <li className='breadcrumb-item'>
              <Link to="/" className='flex align-center'>
                 <p> Home</p>
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size={23} />
            </li>
            <li className='breadcrumb-item'>
              <Link to={`/meal/category/${meal?.category}`} className='flex align-center'>
                 <p>{meal?.category} </p>
              </Link>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size={23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span className='fs-15 fw-5 text-uppercase'>{meal?.title}</span>
            </li>
          </ul>
        </motion.div>

        <div className='sc-title'>Meal Details</div>
        <section className='sc-details'>
        
          <div className='details-head'>
         
          <motion.h3 variants={fadeIn('left','tween', 0.3 , 1.4)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='title text-orange'>{meal?.title}</motion.h3>
              <div className='py-4'>
                <motion.div variants={fadeIn('left','tween', 0.4, 1.5)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='category-t flex align-center'>
                  <span className='text-uppercase fw-8 ls-1 my-1'>category: &nbsp;</span>
                  <span className='text-uppercase ls-2'>{meal?.category}</span>
                </motion.div>

                <motion.div variants={fadeIn('left','tween', 0.5, 1.6)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='source align-center'>
                  <span className='fw-8'>Source: &nbsp;</span>
                  <a href={meal.source} >
                    <div className='paly'><span >Go Watsh </span></div>
                    <div><PiPlayBold/></div>
                  </a>
                </motion.div>
              </div>

         
              <motion.div variants={fadeIn('down','tween', 0.6, 1.7)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:true ,amount: 0.4}} className='details-all'>
               
               
            <div className='details-img'>
              <img src={meal?.thumbnail} alt="" className='img-cover' />
            </div>
            <div className='details-right'>
         <ResentMeal/>
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
                <hr></hr>
                <ul className='grid'>
                  {
                    combinedIngredients?.map((item, idx) => (
                      <li key={idx} className="flex align-center">
                        <span className='li-dot'>{idx + 1}</span>
                        <span className='text-capitalize fs-15'>{`${item.measure} - ${item.ingredient}`}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
<div>  
           
</div>

</motion.div>

           
          </div>
          <motion.div className='details-all'>
               
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
            <RecentDrink/>
         </div>
               </motion.div>
         
            {tags && tags.length > 0 && (
                <motion.div variants={fadeIn('down','tween', 0.4, 1.5)} 
                initial='hidden'
                whileInView={'show'}
                viewport={{ once:true ,amount: 0.4}} className='tags flex align-start flex-wrap'>
                  <h6 className='fs-16'>Tags:</h6>
                  <ul className='flex align-center flex-wrap'>
                    {
                      tags?.map((tag, idx) => (<li key={idx} className="fs-14">{tag}</li>))
                    }
                  </ul>
                </motion.div>
              )}
          
        </section>
      </div>
    </div>
  );
}

export default MealSingle;
