import { Articles } from 'components/ArticlesSection/articlesArray'
import PageArticleItem from 'components/PageArticleItem/PageArticleItem'

type Props = {
    article: Articles
}

const LikedArticlesItem = ({ article }: Props) => {
    return (
        <div className="articles-page-item">
            <PageArticleItem
                image={article.image}
                date={article.date}
                country={article.country}
                dash={article.dash}
                section={article.section}
                header={article.header}
                id={article.id}
            />
        </div>
    )
}

export default LikedArticlesItem
