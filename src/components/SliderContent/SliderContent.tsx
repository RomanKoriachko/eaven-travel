import React from 'react'
import './SliderContent.scss'

type Props = {
    sliderTopCountry: string
    sliderTopSection: string
    sliderDash: string
    sliderMainText: string
    sliderBottomText: string
}

const SliderContent = ({
    sliderTopCountry,
    sliderTopSection,
    sliderDash,
    sliderMainText,
    sliderBottomText,
}: Props) => {
    return (
        <>
            <div className="topText">
                <p>{sliderTopCountry}</p>
                <p>{sliderDash}</p>
                <p>{sliderTopSection}</p>
            </div>
            <p className="mainText">{sliderMainText}</p>
            <p className="bottomText">{sliderBottomText}</p>
            <button className="sliderButton">Read More</button>
        </>
    )
}

export default SliderContent
