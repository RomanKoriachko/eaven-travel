import './ArticleItem.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'

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
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
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
