import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleHeader.scss'

type Props = {
    id?: number
    image: string
    header: string
    country?: string
}

const ArticleHeader = ({ image, header }: Props) => {
    return (
        <>
            <div className="aricle-img">
                <img src={image} alt="" />
            </div>
            <div className="article-desc">{header}</div>
        </>
    )
}

export default ArticleHeader
