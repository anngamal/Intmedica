import "./HomeSlider.css"
import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "./sliderOne.jpg"
import sliderImg3 from "./sliderTwoo.jpg"
import sliderImg2 from "./slider3.jpg"

export default function HomeSlider(){
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      };
    return(
        <>
        <Slider {...settings}>
            <div id="slider1" >
                <img src={sliderImg1} className="sliderImgs"/>
                
            </div>
            <div id="slider2" >
                <img src={sliderImg2} className="sliderImgs"/>
                
            </div>
            <div id="slider3" >
                <img src={sliderImg3} className="sliderImgs" />
                
            </div>
    
        </Slider>
        <div id='slider-wrapper'>
        </div>
        </>
        
    )
}
