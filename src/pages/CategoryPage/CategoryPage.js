import React, {useEffect} from 'react';
import "./CategoryPage.scss";
import { useMealContext } from '../../context/mealContext';
import MealList from '../../components/Meal/MealList';
import { Link, useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actions/mealsActions';
import Headersingle from '../../components/Headersingle/Headersingle';
import i from '../../assets/images/he3.png'
import FoodLayout from '../../components/FoodLayout/FoodLayaout';
import { BiChevronsRight } from 'react-icons/bi';
import { fadeIn } from '../../reducers/variants';
import { motion } from 'framer-motion';
const CategoryPage = () => {

  const {name} = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  let catDescription = "";

  if(categories){
    categories.forEach(category => {
      if(category?.strCategory === name) catDescription = category?.strCategoryDescription;
    })
  }

  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
   
  }, [name, dispatch]);

  return (<>
     <main className='main-content py-5'>
     <div className='breadcrumb'>
          <ul className='flex breadcrumb-i align-center '>
          <li className='breadcrumb-item'>
              <Link to="/" className='flex align-center'>
                 <p> Home</p>
              </Link>
            </li>
           
           
            <li className='flex align-center mx-1'>
              <BiChevronsRight size={23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span className='fs-15 fw-5 text-uppercase'>{name}</span>
            </li>
          </ul>
        </div>
     <FoodLayout/>

   <motion.div variants={fadeIn('right','tween', 0.2 , 1.5)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false ,amount: 0.4}} className='container'>
     <div className='cat-description px-4 py-4'>
       <h2 className='text-orange fw-8'>{name}</h2>
       <p className='fs-18 op-07'>{catDescription}</p>
     </div>
   </motion.div>
   {
     (categoryMeals?.length) ? <MealList meals = { categoryMeals } /> : null
   }
 </main>
  </>
   
  )
}

export default CategoryPage
