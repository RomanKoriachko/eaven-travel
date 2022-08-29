import React from 'react'
import './WhereINowItem.scss'

type Props = {
    whereImg: string
    country: string
    section: string
    content: string
}

const WhereINowItem = ({ whereImg, country, section, content }: Props) => {
    return (
        <div className="where-item">
            <div
                className="where-img"
                style={{ backgroundImage: `url(images/${whereImg}.jpg)` }}
            >
                <div className="where-img-blackout"></div>
            </div>
            <div className="where-content">
                <div className="where-link">
                    <p>{country}</p>
                    <p>-</p>
                    <p>{section}</p>
                </div>
                <div className="where-text">{content}</div>
            </div>
        </div>
    )
}

export default WhereINowItem
