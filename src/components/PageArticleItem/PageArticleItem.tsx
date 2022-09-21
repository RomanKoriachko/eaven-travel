import './PageArticleItem.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { addToLikedPage, removeFromLikePage } from 'redux/likePageReducer'
import articlesArray from 'components/ArticlesSection/articlesArray'

type Props = {
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    id: number
}

const PageArticleItem = ({
    image,
    date,
    country,
    dash,
    section,
    header,
    id,
}: Props) => {
    const isLiked = useAppSelector((state) => state.articlesLikeState[id])
    const dispatch = useAppDispatch()

    const liked = () => {
        dispatch(
            addToLikedPage({
                image: articlesArray[id - 1].image,
                date: articlesArray[id - 1].date,
                country: articlesArray[id - 1].country,
                dash: articlesArray[id - 1].dash,
                section: articlesArray[id - 1].section,
                header: articlesArray[id - 1].header,
                id: articlesArray[id - 1].id,
            })
        )
        dispatch(addLike(id))
    }
    const disliked = () => {
        dispatch(removeFromLikePage({ id: id - 1 }))
        dispatch(removeLike(id))
    }

    return (
        <>
            <Link to={`/destinations/${id}`}>
                <div className="page-article-img">
                    <img src={image} alt="" />
                </div>
            </Link>
            <div className="page-article-main">
                <div className="page-article-date">
                    <p className="page-article-date-content">{date}</p>
                </div>
                <div className="page-article-links">
                    <p>
                        <Link to={`/${country}`}>{country}</Link>
                    </p>
                    <p>{dash}</p>
                    <p>
                        <Link to={`/${section}`}>{section}</Link>
                    </p>
                </div>
            </div>
            <Link to={`/destinations/${id}`}>
                <div className="page-article-header">{header}</div>
            </Link>
            <div className="like-wrapper">
                <button
                    className="like"
                    onClick={() => (isLiked ? disliked() : liked())}
                >
                    {isLiked ? (
                        <img src="images/like.png" alt="" />
                    ) : (
                        <img src="images/dislike.png" alt="" />
                    )}
                </button>
            </div>
        </>
    )
}

export default PageArticleItem
