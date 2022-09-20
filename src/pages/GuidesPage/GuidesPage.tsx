import articlesArray from 'components/ArticlesSection/articlesArray'
import PageArticleItem from 'components/PageArticleItem/PageArticleItem'
import PageHeader from 'components/PageHeader/PageHeader'

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

const GuidesPage = (props: Props) => {
    let filtredGuides = articlesArray.filter((element) =>
        element.section.toLowerCase().includes('guides')
    )

    return (
        <div className="guides-page">
            <PageHeader header="Guides" />
            <div className="page-content">
                <div className="container">
                    <div className="articles-page-wrapper">
                        {filtredGuides.map(
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

export default GuidesPage
