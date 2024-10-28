import React, { useState } from 'react';
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import {  startFetchMealsBySearch } from '../../actions/mealsActions';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch } = useMealContext();

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Validate input
    if (value.trim().length === 0) {
      setErrorMsg("Invalid search term ...");
    } else {
      setErrorMsg(""); // Clear error message for valid input
    }
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length === 0) {
      setErrorMsg("Please enter a search term.");
      return; // Prevent search if invalid term
    }

    navigate("/search");
    startFetchMealsBySearch(dispatch, searchTerm);

  };

  return (
    <form className='search-form flex align-center' onSubmit={handleSearchResult}>
      <input 
        type="text" 
        className='form-control-input text-dark-gray fs-15' 
        placeholder='Search recipes here ...' 
        value={searchTerm} 
        onChange={handleSearchTerm} 
      />
      <button type='submit' className='form-submit-btn text-white text-uppercase fs-14'>
        <BsSearch className='btn-icon' size={12} />
      </button>
      {errorMsg && <p className="error-message">{errorMsg}</p>} {/* Display error message */}
    </form>
  );
};

export default SearchForm;
