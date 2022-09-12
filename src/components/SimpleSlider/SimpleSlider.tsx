import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './SimpleSlider.scss'
import SliderContent from 'components/SliderContent/SliderContent'
import articlesArray from 'components/ArticlesSection/articlesArray'

let windowHeight = window.innerHeight

type ArticleProps = {
    id: number
    country: string
    dash: string
    section: string
    header: string
    text: string
}

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
                    className="slider-hover"
                    style={{ height: windowHeight }}
                ></div>
                {articlesArray
                    .filter(({ id }: ArticleProps) => id === 1)
                    .map(
                        ({
                            id,
                            country,
                            dash,
                            section,
                            header,
                            text,
                        }: ArticleProps) => (
                            <div className="slider-content" key={id}>
                                <SliderContent
                                    id={id}
                                    key={id}
                                    country={country}
                                    dash={dash}
                                    section={section}
                                    header={header}
                                    text={text}
                                />
                            </div>
                        )
                    )}
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
                {articlesArray
                    .filter(({ id }: ArticleProps) => id === 2)
                    .map(
                        ({
                            id,
                            country,
                            dash,
                            section,
                            header,
                            text,
                        }: ArticleProps) => (
                            <div className="slider-content" key={id}>
                                <SliderContent
                                    id={id}
                                    country={country}
                                    dash={dash}
                                    section={section}
                                    header={header}
                                    text={text}
                                />
                            </div>
                        )
                    )}
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

                {articlesArray
                    .filter(({ id }: ArticleProps) => id === 3)
                    .map(
                        ({
                            id,
                            country,
                            dash,
                            section,
                            header,
                            text,
                        }: ArticleProps) => (
                            <div className="slider-content" key={id}>
                                <SliderContent
                                    id={id}
                                    country={country}
                                    dash={dash}
                                    section={section}
                                    header={header}
                                    text={text}
                                />
                            </div>
                        )
                    )}
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

                {articlesArray
                    .filter(({ id }: ArticleProps) => id === 4)
                    .map(
                        ({
                            id,
                            country,
                            dash,
                            section,
                            header,
                            text,
                        }: ArticleProps) => (
                            <div className="slider-content" key={id}>
                                <SliderContent
                                    id={id}
                                    country={country}
                                    dash={dash}
                                    section={section}
                                    header={header}
                                    text={text}
                                />
                            </div>
                        )
                    )}
            </div>
        </Slider>
    )
}
