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

const SingaporePage = (props: Props) => {
    let filtredCountry = articlesArray.filter((element) =>
        element.country.includes('singapore')
    )

    return (
        <div className="singapore-page">
            <CountryPage image="singapore-page-bg" text="Singapore" />
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
                                        id={id}
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

export default SingaporePage
