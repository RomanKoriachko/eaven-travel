import './ArticleItem.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { addToLikedPage, removeFromLikePage } from 'redux/likePageReducer'
import articlesArray from './articlesArray'

type ArticleProps = {
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    text: string
    id: number
}

const ArticleItem = ({
    image,
    date,
    country,
    dash,
    section,
    header,
    text,
    id,
}: ArticleProps) => {
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
                <div className="article-img">
                    <img src={image} alt="" />
                    <div className="article-date">
                        <p className="article-date-content">{date}</p>
                    </div>
                </div>
            </Link>
            <div className="article-links-and-like">
                <div className="article-links">
                    <p>
                        <Link to={country}>{country}</Link>
                    </p>
                    <p>{dash}</p>
                    <p>
                        <Link to={section}>{section}</Link>
                    </p>
                </div>
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
            <Link to={`/destinations/${id}`}>
                <div className="article-header">{header}</div>
                <div className="article-line"></div>
                <div className="article-text">{text}</div>
            </Link>
        </>
    )
}

export default ArticleItem
