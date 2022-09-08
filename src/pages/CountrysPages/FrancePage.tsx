import React from 'react'
import articlesArray from 'components/ArticlesSection/articlesArray'
import CountryPage from 'components/CountryPage/CountryPage'
import PageArticleItem from 'components/PageArticleItem/PageArticleItem'
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

const FrancePage = (props: Props) => {
    let filtredCountry = articlesArray.filter((element) =>
        element.country.includes('france')
    )

    return (
        <div className="france-page">
            <CountryPage image="france-page-bg" text="France" />
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
                                    <PageArticleItem
                                        image={image}
                                        date={date}
                                        country={country}
                                        dash={dash}
                                        section={section}
                                        header={header}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrancePage
