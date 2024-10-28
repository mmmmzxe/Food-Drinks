import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { useMealContext } from '../../context/mealContext';

import Loader from '../../components/Loader/Loader';
import Secions from '../../components/secsion/Secions';

import CaloriesBalance from '../../components/Category2/CategoryList2';
import DrinkC from '../../components/Drink/DrinksC';
import DrinkDetail from '../../components/Drink/SingleDrink';
const DrinkDetailsPage = () => {
  const {id} = useParams();
  const { categories, dispatch, meal, categoryLoading, mealLoading} = useMealContext();





  return (
    <main className='main-content bg-whitesmoke'>
    
     <DrinkDetail /> 
      <Secions/>
      <div className='s-t'>
        <p>Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed sit. Mattis quis scelerisque consectetur orci dui est sem nulla.
        Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in ornare amet id praesent. Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus mauris est. Nec, lacinia eleifend amet, quis turpis et massa duis.</p>  
      </div>
      { (categoryLoading) ? <Loader /> : <CaloriesBalance categories = {categories} /> }

   
    </main>
  )
}

export default DrinkDetailsPage
