import articlesArray, {
    Articles,
    getArticlesObject,
} from 'components/ArticlesSection/articlesArray'
import PageHeader from 'components/PageHeader/PageHeader'
import { useAppSelector } from 'redux/hooks'
import LikedArticlesItem from './LikedArticlesItem'
import NoLikedArticles from './NoLikedArticles'

type Props = {}

type ArticleObject = {
    [key: number]: Articles
}

const LikedArticles = (props: Props) => {
    const articlesLikeState = useAppSelector((state) => state.articlesLikeState)
    const articlesObject: ArticleObject = getArticlesObject(articlesArray)
    const likedArticles = Object.keys(articlesLikeState).map((articleId) => (
        <LikedArticlesItem
            key={articleId}
            article={articlesObject[parseInt(articleId)]}
        />
    ))

    return (
        <div>
            <PageHeader header="Liked Articles" />
            <div className="page-content">
                <div className="container">
                    {Object.keys(articlesLikeState).length === 0 ? (
                        <div
                            className="articles-page-wrapper"
                            style={{
                                display: 'block',
                                textAlign: 'center',
                            }}
                        >
                            <NoLikedArticles />
                        </div>
                    ) : (
                        <div className="articles-page-wrapper">
                            {likedArticles}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LikedArticles
