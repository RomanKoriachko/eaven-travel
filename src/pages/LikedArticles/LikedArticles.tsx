import articlesArray, {
    Articles,
    getArticlesObject,
} from 'components/ArticlesSection/articlesArray'
import PageHeader from 'components/PageHeader/PageHeader'
import { useAppSelector } from 'redux/hooks'
import LikedArticlesItem from './LikedArticlesItem'

type Props = {}

type ArticleObject = {
    [key: number]: Articles
}

const LikedArticles = (props: Props) => {
    const articlesLikeState = useAppSelector((state) => state.articlesLikeState)
    const articlesObject: ArticleObject = getArticlesObject(articlesArray)

    return (
        <div>
            <PageHeader header="Liked Articles" />
            <div className="page-content">
                <div className="container">
                    <div className="articles-page-wrapper">
                        {Object.keys(articlesLikeState).map((articleId) => (
                            <LikedArticlesItem
                                key={articleId}
                                article={articlesObject[parseInt(articleId)]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikedArticles
