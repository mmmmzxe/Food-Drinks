import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";

import Header from '../../components/Header/Header';
import About from '../../components/About/About';

import ChiefsSection from '../../components/ChiefsSection/ChiefsSection';
import Chef from '../../components/Chef/Chef';
import Features from '../../components/Features/Features';


import CaloriesBalance from '../../components/Category2/CategoryList2';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import MenuGrid from '../../components/Menu/Menu';
import FilteredDrinks from '../../components/Drink/DrinksC';


const HomePage = () => {
  const {categories, categoryLoading, } = useMealContext();

  return (
    <main className='main-content'>
          <Header />
    
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
      <div>
        <Chef/>
      </div>
      <div>
     <About/>
     </div>
     <div>
        <Features/>
      </div>
      <div>
        <MenuGrid/>
      </div>
     
     
      { (categoryLoading) ? <Loader /> : <CaloriesBalance categories = {categories} /> }
      <div>
        <ComingSoon/>
      </div>
      <FilteredDrinks/>
     
      <div>
        <ChiefsSection/>
      </div>
    
     {/*
     <div>
      <CulinarySkills/>
     </div>
     <div>
      <ChiefsSection/>
     </div>*/}

    </main>
  )
}

export default HomePage;
