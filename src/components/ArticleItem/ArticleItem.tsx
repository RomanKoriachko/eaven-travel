import React from 'react'
import './ArticleItem.scss'

type Props = {
    image: string
    date: string
    country: string
    dash: string
    section: string
    logo: string
    text: string
}

const ArticleItem = ({
    image,
    date,
    country,
    dash,
    section,
    logo,
    text,
}: Props) => {
    return (
        <div className="article-item">
            <div className="article-img">
                <img src={image} alt="" />
                <div className="article-date">
                    <p className="article-date-content">{date}</p>
                </div>
            </div>
            <div className="article-links">
                <p>{country}</p>
                <p>{dash}</p>
                <p>{section}</p>
            </div>
            <div className="article-header">{logo}</div>
            <div className="article-line"></div>
            <div className="article-text">{text}</div>
        </div>
    )
}

export default ArticleItem
