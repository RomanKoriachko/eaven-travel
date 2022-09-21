import PageArticleItem from 'components/PageArticleItem/PageArticleItem'
import PageHeader from 'components/PageHeader/PageHeader'
import { useAppSelector } from 'redux/hooks'

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

const LikedArticles = (props: Props) => {
    const likedArr = useAppSelector((state) => state.articlesArr)
    const delitetEmptyObject = likedArr.filter((element) => element.id !== 0)
    const filtredLikedArr = delitetEmptyObject.sort(function (a, b) {
        return a.id - b.id
    })

    console.log(filtredLikedArr)

    return (
        <div>
            <PageHeader header="Liked Articles" />
            <div className="page-content">
                <div className="container">
                    <div className="articles-page-wrapper">
                        {filtredLikedArr.map(
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

export default LikedArticles
