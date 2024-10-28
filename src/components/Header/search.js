import React from 'react';
import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
import CategoryList from '../Category/CategoryList';
import DrinkCategories from '../Drink/Drink';
import MealListAll from '../Meal/MeailListAll';

const SearchResults = () => {
  const { categories, meals, drinks, categoryLoading, mealsLoading, drinksLoading } = useMealContext();

  return (
    <>
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <NotFound />
      ) : meals.length > 0 ? (
        <MealList meals={meals} />
      ) : (
        <p>No meals found. Please try a different search.</p>
      )}

    

      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
      <MealListAll/>
    </>
  );
};

export default SearchResults;
