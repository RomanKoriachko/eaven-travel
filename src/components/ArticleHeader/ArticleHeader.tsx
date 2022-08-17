import React from 'react'
import './ArticleHeader.scss'

type Props = {
    img: string
    desc: string
}

const ArticleHeader = ({ img, desc }: Props) => {
    return (
        <div className="article-preview">
            <div className="aricle-img">
                <img src={img} alt="" />
            </div>
            <div className="article-desc">{desc}</div>
        </div>
    )
}

export default ArticleHeader
