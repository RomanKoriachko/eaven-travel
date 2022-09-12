import React from 'react'
import './WhereINowItem.scss'

type Props = {
    id?: number
    image: string
    country: string
    dash: string
    section: string
    header: string
}

const WhereINowItem = ({ image, country, dash, section, header }: Props) => {
    return (
        <>
            <div
                className="where-img"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="where-img-blackout"></div>
            </div>
            <div className="where-content">
                <div className="where-link">
                    <p>{country}</p>
                    <p>{dash}</p>
                    <p>{section}</p>
                </div>
                <div className="where-text">{header}</div>
            </div>
        </>
    )
}

export default WhereINowItem
