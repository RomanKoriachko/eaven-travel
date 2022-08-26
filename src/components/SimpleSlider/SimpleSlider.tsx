import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './SimpleSlider.scss'
import SliderContent from 'components/SliderContent/SliderContent'

let windowHeight = window.innerHeight

export default function SimpleSlider() {
    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
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
                    className="slider-hover"
                    style={{ height: windowHeight }}
                ></div>
                <div className="slider-content">
                    <SliderContent
                        sliderTopCountry="France"
                        sliderDash="-"
                        sliderTopSection="Tips & Tricks"
                        sliderMainText="Nice and Cozy House for Stay – Travel Guide"
                        sliderBottomText="Things to do in Paris The most difficult thing is the decision to act, the rest is merely tenacity. Cras …"
                    />
                </div>
            </div>
            <div className="slider second-slide">
                <div
                    className="slider-bg"
                    style={{ height: windowHeight }}
                ></div>
                <div
                    className="slider-hover"
                    style={{ height: windowHeight }}
                ></div>
                <div className="slider-content">
                    <SliderContent
                        sliderTopCountry="Japan"
                        sliderDash="-"
                        sliderTopSection="Solo Travel"
                        sliderMainText="Fly to Tokyo for My Christmas 2019! And My Trip Plan Inspirations"
                        sliderBottomText="Vel aliquet diam. Suspendisse quis sodales risus. Quisque pharetra, lacus quis venenatis molestie, nibh tortor aliquam dui, id venenatis lectus …"
                    />
                </div>
            </div>
            <div className="slider third-slide">
                <div
                    className="slider-bg"
                    style={{ height: windowHeight }}
                ></div>
                <div
                    className="slider-hover"
                    style={{ height: windowHeight }}
                ></div>
                <div className="slider-content">
                    <SliderContent
                        sliderTopCountry="Europe"
                        sliderDash=""
                        sliderTopSection=""
                        sliderMainText="Travel to Santa’s Village: Modern Santa comes with Public Transport"
                        sliderBottomText="Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit …"
                    />
                </div>
            </div>
            <div className="slider fourth-slide">
                <div
                    className="slider-bg"
                    style={{ height: windowHeight }}
                ></div>
                <div
                    className="slider-hover"
                    style={{ height: windowHeight }}
                ></div>
                <div className="slider-content">
                    <SliderContent
                        sliderTopCountry="Australia"
                        sliderDash="-"
                        sliderTopSection="Guides"
                        sliderMainText="Penguin Parade Australia: Penguins Don’t Live Just in Antarctica"
                        sliderBottomText="Etiam sed enim vitae magna pretium tincidunt eget vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit …"
                    />
                </div>
            </div>
        </Slider>
    )
}
