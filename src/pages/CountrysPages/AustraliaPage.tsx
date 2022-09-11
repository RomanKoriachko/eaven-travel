import articlesArray from 'components/ArticlesSection/articlesArray'
import CountryPage from 'components/CountryPage/CountryPage'
import PageArticleItem from 'components/PageArticleItem/PageArticleItem'
import React from 'react'
import { Link } from 'react-router-dom'
import './CountryPage.scss'

type Props = {}

type ArticleProps = {
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    id: number
}

const AustraliaPage = (props: Props) => {
    let filtredCountry = articlesArray.filter((element) =>
        element.country.includes('australia')
    )

    return (
        <div className="australia-page">
            <CountryPage image="australia-page-bg" text="Australia" />
            <div className="page-content">
                <div className="container">
                    <div className="articles-page-wrapper">
                        {filtredCountry.map(
                            ({
                                image,
                                date,
                                country,
                                dash,
                                section,
                                header,
                                id,
                            }: ArticleProps) => (
                                <div className="articles-page-item" key={id}>
                                    <Link to={`/destinations/${id}`}>
                                        <PageArticleItem
                                            image={image}
                                            date={date}
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
        </div>
    )
}

export default AustraliaPage
