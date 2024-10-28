import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home, MealDetails, Error, Category } from './pages/index';

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import SearchResults from './components/Header/search';

import MealListAllPage from './components/Meal/MealListAllpage';

import DrinkCategories from './components/Drink/Drink';
import DrinkDetailsPage from './pages/DrinkDetailsPage/DrinkDetailsPage';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading
  const { pathname } = useLocation();
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null; // لا حاجة لعرض أي شيء
  }
  useEffect(() => {
    setLoading(true);
    // Simulate a data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading ? ( // Show loading component while loading
        <Loader />
      ) : (
      <>
          <Navbar />
          <Sidebar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mealListAll" element={<MealListAllPage />} />
            <Route path="/meal/:id" element={<MealDetails />} />
            <Route path="/meal/category/:name" element={<Category />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/drink" element={<DrinkCategories />} />
            <Route path="/drink/:id" element={<DrinkDetailsPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </>
      )}
    </>
  );
}

export default App;
