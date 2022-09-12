import articlesArray from 'components/ArticlesSection/articlesArray'
import WhereINowItem from 'components/WhereINowItem/WhereINowItem'
import React from 'react'
import { Link } from 'react-router-dom'
import './WhereINowSection.scss'

type Props = {}

type ArticleProps = {
    id?: number
    image: string
    country: string
    dash: string
    section: string
    header: string
}

const WhereINowSection = (props: Props) => {
    return (
        <section className="where-section">
            <div className="container">
                <div className="where-wrapper">
                    <div className="where-logo">Where I Am Now – ASIA</div>
                    <div className="where-items">
                        {articlesArray
                            .filter(
                                ({ country }: ArticleProps) =>
                                    country === 'japan' ||
                                    country === 'singapore'
                            )
                            .map(
                                ({
                                    id,
                                    image,
                                    country,
                                    dash,
                                    section,
                                    header,
                                }: ArticleProps) => (
                                    <div className="where-item" key={id}>
                                        <Link to={`/destinations/${id}`}>
                                            <WhereINowItem
                                                image={image}
                                                country={country}
                                                dash={dash}
                                                section={section}
                                                header={header}
                                            />
                                        </Link>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhereINowSection
