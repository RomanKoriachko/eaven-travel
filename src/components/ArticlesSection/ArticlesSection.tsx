import ArticleItem from 'components/ArticlesSection/ArticleItem'
import React from 'react'
import './ArticlesSection.scss'
import articlesArray from './articlesArray'

type Props = {}

type ArticleProps = {
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    text: string
}

const ArticlesSection = ({}: Props) => {
    return (
        <section className="articles">
            <div className="container">
                <div className="articles-header">Latest Articles</div>
                <div className="articles-wrapper">
                    {articlesArray.map(
                        ({
                            image,
                            date,
                            country,
                            dash,
                            section,
                            header,
                            text,
                        }: ArticleProps) => (
                            <div className="article-item">
                                <ArticleItem
                                    image={image}
                                    date={date}
                                    country={country}
                                    dash={dash}
                                    section={section}
                                    header={header}
                                    text={text}
                                />
                            </div>
                        )
                    )}
                </div>
                <button className="articles-btn">Load more</button>
            </div>
        </section>
    )
}

export default ArticlesSection
