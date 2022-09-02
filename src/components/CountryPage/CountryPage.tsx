import React from 'react'
import './CountryPage.scss'

type Props = {
    image: string
    text: string
}

const CountryPage = ({ image, text }: Props) => {
    return (
        <>
            <div
                className="coutry-page"
                style={{
                    backgroundImage: `url(images/${image}.jpg)`,
                }}
            >
                <div className="coutry-page-opacity"></div>
                <p>{text}</p>
            </div>
        </>
    )
}

export default CountryPage
