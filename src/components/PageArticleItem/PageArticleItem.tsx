import React from 'react'
import './PageArticleItem.scss'
import { Link } from 'react-router-dom'

type Props = {
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
}

const PageArticleItem = ({
    image,
    date,
    country,
    dash,
    section,
    header,
}: Props) => {
    return (
        <>
            <div className="page-article-img">
                <img src={image} alt="" />
            </div>
            <div className="page-article-main">
                <div className="page-article-date">
                    <p className="page-article-date-content">{date}</p>
                </div>
                <div className="page-article-links">
                    <p>
                        <Link to={`/${country}`}>{country}</Link>
                    </p>
                    <p>{dash}</p>
                    <p>
                        <Link to={`/${section}`}>{section}</Link>
                    </p>
                </div>
            </div>
            <div className="page-article-header">{header}</div>
        </>
    )
}

export default PageArticleItem
