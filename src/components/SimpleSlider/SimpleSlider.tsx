import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './SimpleSlider.scss'

let windowHeight = window.innerHeight
console.log(windowHeight)

export default function SimpleSlider() {
    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
    }
    return (
        <Slider {...settings}>
            <div className="slider first-slide">
                <div
                    className="slider-bg"
                    style={{ height: windowHeight }}
                ></div>
                <div
                    className="slider-content"
                    style={{ height: windowHeight }}
                ></div>
            </div>
            <div className="slider second-slide">
                <div
                    className="slider-bg"
                    style={{ height: windowHeight }}
                ></div>
                <div
                    className="slider-content"
                    style={{ height: windowHeight }}
                ></div>
            </div>
            <div className="slider third-slide">
                <div
                    className="slider-bg"
                    style={{ height: windowHeight }}
                ></div>
                <div
                    className="slider-content"
                    style={{ height: windowHeight }}
                ></div>
            </div>
            <div className="slider fourth-slide">
                <div
                    className="slider-bg"
                    style={{ height: windowHeight }}
                ></div>
                <div
                    className="slider-content"
                    style={{ height: windowHeight }}
                ></div>
            </div>
        </Slider>
    )
}
