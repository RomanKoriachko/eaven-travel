import articlesArray, {
    CommentsProp,
    ReplyProp,
} from 'components/ArticlesSection/articlesArray'
import { useState } from 'react'
import './Comments.scss'

type Props = {
    id: number
    commentsId: number
}

const Comments = ({ id, commentsId }: Props) => {
    const commentsArr = articlesArray[id - 1].comments
    const replyArr = articlesArray[id - 1].comments[commentsId].reply
    const [comments, setComments] = useState<CommentsProp[]>(commentsArr)
    const [replays, setReplays] = useState<ReplyProp[]>(replyArr)

    let lastLetter: string
    if (comments.length + replays.length === 1) {
        lastLetter = ''
    } else {
        lastLetter = 's'
    }

    return (
        <>
            <div className="comments-logo">
                {comments.length + replays.length} comment{lastLetter}
            </div>
            <div className="comments-content">
                {comments.map((comment: CommentsProp, i: number) => (
                    <div className="comment-and-reply" key={i}>
                        <div className="comment">
                            <div className="comment-user-avatar">
                                <img src={comment.avatar} alt="" />
                            </div>
                            <div className="comment-text">
                                <div className="comment-row">
                                    <div className="comment-text-name">
                                        {comment.name}
                                    </div>
                                    {comment.isAdmin ? (
                                        <div className="comment-autor-state">
                                            Author
                                        </div>
                                    ) : undefined}
                                    <div className="comment-text-date">
                                        {comment.date}
                                    </div>
                                </div>
                                <div className="comment-text-content">
                                    {comment.text}
                                </div>
                                <button>Reply</button>
                            </div>
                        </div>
                        <div>
                            {comment.reply.map(
                                (reply: ReplyProp, i: number) => (
                                    <div key={i} className="comment reply">
                                        <div className="comment-user-avatar">
                                            <img src={reply.avatar} alt="" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="comment-row">
                                                <div className="comment-text-name">
                                                    {reply.name}
                                                </div>
                                                {reply.isAdmin ? (
                                                    <div className="comment-autor-state">
                                                        Author
                                                    </div>
                                                ) : undefined}
                                                <div className="comment-text-date">
                                                    {reply.date}
                                                </div>
                                            </div>
                                            <div className="comment-text-content">
                                                {reply.text}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="article-page-main-underline"></div>
        </>
    )
}

export default Comments
