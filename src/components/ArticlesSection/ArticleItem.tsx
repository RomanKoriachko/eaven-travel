import React from 'react'
import './ArticleItem.scss'

type ArticleProps = {
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    text: string
}

const ArticleItem = ({
    image,
    date,
    country,
    dash,
    section,
    header,
    text,
}: ArticleProps) => {
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
            <div className="article-header">{header}</div>
            <div className="article-line"></div>
            <div className="article-text">{text}</div>
        </div>
    )
}

export default ArticleItem
