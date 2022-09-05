import React from 'react'
import './ArticleItem.scss'
import { Link } from 'react-router-dom'

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
        <>
            <div className="article-img">
                <img src={image} alt="" />
                <div className="article-date">
                    <p className="article-date-content">{date}</p>
                </div>
            </div>
            <div className="article-links">
                <p>
                    <Link to={country}>{country}</Link>
                </p>
                <p>{dash}</p>
                <p>
                    <Link to={section}>{section}</Link>
                </p>
            </div>
            <div className="article-header">{header}</div>
            <div className="article-line"></div>
            <div className="article-text">{text}</div>
        </>
    )
}

export default ArticleItem
