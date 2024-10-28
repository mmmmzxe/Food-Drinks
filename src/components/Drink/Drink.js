import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchNonAlcoholicDrinks } from "../../actions/mealsActions";
import Loader from "../Loader/Loader";
import { CgArrowRight } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import DrinkAbout from "./DrinkAbout";
import { motion } from 'framer-motion';
import { fadeIn } from '../../reducers/variants';

const DrinkCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [drinks, setDrinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const nonAlcoholicDrinks = await fetchNonAlcoholicDrinks();
        setDrinks(nonAlcoholicDrinks);
      } catch (error) {
        console.error("Error fetching drinks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getDrinks();
  }, []);

  // Filter drinks based on search query
  const filteredDrinks = drinks.filter((drink) =>
    drink.strDrink.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <DrinkAbout />
      <div className="section-wrapper">
        <div className="container">
          <motion.div variants={fadeIn('up','tween', 0.2, 1.2)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false ,amount: 0.4}} 
 className="f">
            <div className="sc-title">Drinks</div>
            <div className="search-all">
              <div></div>
              {/* Area Filter Dropdown */}
              <div className="search">
                <input
                  type="text"
                  placeholder="Search drinks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <BiSearch />
              </div>
            </div>
          </motion.div>

          <section className="sc-meal grid">
            {filteredDrinks.slice(0, visibleCount).map((drink) => (
              <motion.div variants={fadeIn('left','tween', 0.4, 1.5)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false ,amount: 0.4}} className="meal-itm" key={drink.idDrink}>
                <div className="meal-itm-img">
                  {isLoading && <Loader />}
                  <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    loading="eager"
                    onLoad={() => setIsLoading(false)}
                    style={{ display: isLoading ? "none" : "block" }}
                  />
                </div>

                <div className="meal-itm-body">
                  <div className="meal-itm-body-info flex flex-column">
                    <h5 className="meal op-09">{drink.strDrink}</h5>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Link
                      to={`/drink/${drink.idDrink}`}
                      className="align-center link justify-center"
                    >
                      <p className="link-p">Read More</p>
                      <p className="fs-20">
                        <CgArrowRight className="link-i" />
                      </p>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>

          {visibleCount < filteredDrinks.length && (
            <div className="show-more-btn">
              <button onClick={handleSeeMore}>See More</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DrinkCategories;
