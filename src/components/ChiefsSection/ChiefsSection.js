import React from 'react';
import Slider from 'react-slick';
import ChiefCard from "./ChiefCard";
import './Chief.scss';
import i1 from '../../assets/images/img_1.jpg';
import i2 from '../../assets/images/img_2.jpg';
import i3 from '../../assets/images/img_3.jpg';
import i4 from '../../assets/images/img_4.jpg';
import i5 from '../../assets/images/img_5.jpg';
import i6 from '../../assets/images/img_6.jpg';
import Imag from '../../assets/images/rosemary.png'
import { motion } from 'framer-motion';
import { fadeIn } from '../../reducers/variants';

export default function ChiefsSection() {
    const chiefs = [
        {
            name: "Juan Carlos",
            img: i1,
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: i2,
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: i3,
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: i4,
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: i5,
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: i6,
            recipesCount: "04",
            cuisine: "Indian"
        }
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
       
       
      
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <motion.div className="chiefs-section" variants={fadeIn('up','tween' , 0.2 , 1.6)}
        initial='hidden'
        whileInView={'show'}>
             <div className='s'></div>
            <h1 className="title">Our Top Chiefs</h1>
      
            <motion.div  variants={fadeIn('up','tween' , 0.4 , 1.6)}
     initial='hidden'
     whileInView={'show'}   className="slider-wrapper"> {/* Wrapper div for styling */}
                <Slider {...settings}>
                    {chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />)}
                </Slider>
            </motion.div>
        </motion.div>
    );
}
