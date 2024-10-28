import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.scss";
import { TbArrowRight } from 'react-icons/tb';

import drink from '../../assets/images/lemonade-juice-lemon-lime-drink-food-lemon-b3bfa6a6f55acd72090905215e1cd757.png';
import { motion } from 'framer-motion';
import {plateVariants , staggerContainer , fadeIn} from '../../reducers/variants';
const CategoryList = ({categories}) => {
  
  return (<motion.div  className='all'>
  
    <div className=' '>
   
     
      
        <motion.div    className='container'>
          <motion.div variants={fadeIn('up','tween', 0.3 , 1.2 )} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount: 0.4}} className='ca'>
          <div  className='sc-title'><h2>categories -</h2>
          </div>
        
      
           <div>
           <Link  className='ca-l' to='/mealListAll'>
            <h2>All</h2>
              <TbArrowRight/>
            </Link>
           </div>
         
          </motion.div>
          <motion.section className='category' 
         
        >
            {
              categories.map(category => {
                const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category;

                return (
                  <motion.div  key = {id} variants={fadeIn('right','tween', 0.4 , 1.3 )} 
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false , amount: 0.4}}>
                  <Link  to = {`/meal/category/${title}`} className = "category-itm align-center justify-center" >
                    <motion.div     className='category-itm-img flex align-center justify-center'>
                      <img src = {thumbnail} alt = {title} />
                      </motion.div>
                      <motion.div  
      className='category-itm-title'>
                   <h3 className=' fs-11 fw-6 ls-1 text-uppercase'>{title}</h3>
                 </motion.div>
                    
                  </Link>
              
                 
               </motion.div>
               
                )
              })
            }
             <motion.div  className='dirnk' variants={fadeIn('right','tween', 0.5 , 1.4 )} 
                  initial='hidden'
                  whileInView={'show'}>
             <Link to = {`/drink`} className = "category-itm align-center justify-center" >
                    <motion.div   className='category-itm-img  flex align-center justify-center'>
                      <img src = {drink} alt ='dr' />
                      </motion.div>
                      <motion.div  className='category-itm-title'>
                        <h3 className=' fs-11 fw-6 ls-1 text-uppercase'>drinks</h3>
                      </motion.div>

                  </Link>
               
             </motion.div>
          </motion.section>
        </motion.div>
    </div></motion.div>
  )
}

export default CategoryList