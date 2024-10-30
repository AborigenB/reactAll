import React from "react";
import s from './slider.module.css'
import Slider from 'react-slick';

import data from '../../data/data'


export function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={s.sliderBox}>
        <Slider {...settings}>            
            <div className={s.imgBlock}>
                <img src="https://cdn1.ozone.ru/s3/multimedia-g/6820132624.jpg" alt="sdf"/>
            </div>   
            <div className={s.imgBlock}>
                <img src="https://cdn1.ozone.ru/s3/multimedia-1-h/c600/7029631205.jpg" alt="sdf"/>
            </div>   
            <div className={s.imgBlock}>
                <img src="https://cdn1.ozone.ru/s3/multimedia-1-h/c600/7029631205.jpg" alt="sdf"/>
            </div>   
        </Slider>
    </div>
  );
}