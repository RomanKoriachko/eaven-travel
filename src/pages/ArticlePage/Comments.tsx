import articlesArray, {
    CommentsProp,
    ReplyProp,
} from 'components/ArticlesSection/articlesArray'
import ColorButton from 'components/ColorButton/ColorButton'
import React, { useState } from 'react'
import './Comments.scss'

type Props = {
    id: number
    commentsId: number
}

const Comments = ({ id, commentsId }: Props) => {
    let time = new Date()
    let timeNow = time.toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })

    let replyArr: ReplyProp[] = []
    const commentsArr = articlesArray[id - 1].comments
    if (commentsArr.length > 0) {
        replyArr = articlesArray[id - 1].comments[commentsId].reply
    } else {
        replyArr = []
    }

    const [comments, setComments] = useState<CommentsProp[]>(commentsArr)
    const [newComment, setNewComment] = useState<CommentsProp>({
        avatar: '/images/unregistered-user.png',
        name: '',
        isAdmin: false,
        date: timeNow.toString(),
        text: '',
        reply: [],
        email: '',
    })
    const [replies, setReplies] = useState<ReplyProp[]>(replyArr)
    const [newReply, setNewReply] = useState<ReplyProp>({
        avatar: '/images/unregistered-user.png',
        name: '',
        isAdmin: false,
        date: timeNow.toString(),
        text: '',
        email: '',
    })

    // Comments
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment((prevState: CommentsProp) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prevState: CommentsProp) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prevState: CommentsProp) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (
            newComment.name === '' ||
            newComment.text === '' ||
            newComment.email === ''
        ) {
            alert('All fields are required')
        } else {
            setComments((prevState: CommentsProp[]) => {
                return [...prevState, newComment]
            })
            setNewComment({
                avatar: '/images/unregistered-user.png',
                name: '',
                isAdmin: false,
                date: timeNow,
                text: '',
                reply: [],
                email: '',
            })
        }
    }

    // Replies

    const onReplyClick = (i: number) => {
        let reply = document.querySelectorAll('.reply-form')
        if (reply[i].classList.contains('hide')) {
            reply[i].classList.add('show')
            reply[i].classList.remove('hide')
        } else {
            reply[i].classList.add('hide')
            reply[i].classList.remove('show')
        }
    }

    const handleChangeTextInReply = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setNewReply((prevState: ReplyProp) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const handleChangeNameInReply = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewReply((prevState: ReplyProp) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleChangeEmailInReply = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewReply((prevState: ReplyProp) => ({
            ...prevState,
            email: e.target.value,
        }))
    }
    const hideReplyForm = () => {
        let reply = document.querySelectorAll('.reply-form')
        for (let i = 0; i <= reply.length; i++) {
            reply[i].classList.add('hide')
            reply[i].classList.remove('show')
        }
    }
    const onSendReply = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (
            newReply.name === '' ||
            newReply.text === '' ||
            newReply.email === ''
        ) {
            alert('All fields are required')
        } else {
            setReplies((prevState: ReplyProp[]) => {
                return [...prevState, newReply]
            })
            setNewReply({
                avatar: '/images/unregistered-user.png',
                name: '',
                isAdmin: false,
                date: timeNow,
                text: '',
                email: '',
            })
            hideReplyForm()
        }
    }

    let lastLetter: string
    if (comments.length + replies.length === 1) {
        lastLetter = ''
    } else {
        lastLetter = 's'
    }

    return (
        <>
            <div className="comments-logo">
                {comments.length + replies.length} comment{lastLetter}
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
                                        {comment.isAdmin ? (
                                            <div className="comment-autor-state">
                                                Author
                                            </div>
                                        ) : undefined}
                                    </div>
                                    <div className="comment-text-date">
                                        {comment.date}
                                    </div>
                                </div>
                                <div className="comment-text-content">
                                    {comment.text}
                                </div>
                                <button onClick={() => onReplyClick(i)}>
                                    Reply
                                </button>
                            </div>
                        </div>
                        <div>
                            <form
                                className="reply-form hide"
                                onSubmit={onSendReply}
                            >
                                <div className="form-header">
                                    Reply to {comment.name}
                                </div>
                                <div className="form-text">
                                    Your email address will not be published.
                                    All fields are requared
                                </div>
                                <div className="form-comment">
                                    <p className="form-field-name">Comment</p>
                                    <textarea
                                        name=""
                                        id=""
                                        value={newReply.text}
                                        onChange={handleChangeTextInReply}
                                    ></textarea>
                                </div>
                                <div className="form-name-and-email">
                                    <div className="form-name">
                                        <p className="form-field-name">Name</p>
                                        <input
                                            type="text"
                                            value={newReply.name}
                                            onChange={handleChangeNameInReply}
                                        />
                                    </div>
                                    <div className="form-email">
                                        <p className="form-field-name">Email</p>
                                        <input
                                            type="email"
                                            value={newReply.email}
                                            onChange={handleChangeEmailInReply}
                                        />
                                    </div>
                                </div>
                                <ColorButton
                                    buttonText="Post Reply"
                                    type="submit"
                                />
                            </form>
                            {comments[i].reply.map(
                                (reply: ReplyProp, i: number) => (
                                    <div key={i} className="comment reply">
                                        <div className="comment-user-avatar">
                                            <img src={reply.avatar} alt="" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="comment-row">
                                                <div className="comment-text-name">
                                                    {reply.name}
                                                    {reply.isAdmin ? (
                                                        <div className="comment-autor-state">
                                                            Author
                                                        </div>
                                                    ) : undefined}
                                                </div>

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
                <div>
                    <form className="comment-form show" onSubmit={onSend}>
                        <div className="form-header">Leave a Reply</div>
                        <div className="form-text">
                            Your email address will not be published. All fields
                            are requared
                        </div>
                        <div className="form-comment">
                            <p className="form-field-name">Comment</p>
                            <textarea
                                name=""
                                id=""
                                value={newComment.text}
                                onChange={handleChangeText}
                            ></textarea>
                        </div>
                        <div className="form-name-and-email">
                            <div className="form-name">
                                <p className="form-field-name">Name</p>
                                <input
                                    type="text"
                                    value={newComment.name}
                                    onChange={handleChangeName}
                                />
                            </div>
                            <div className="form-email">
                                <p className="form-field-name">Email</p>
                                <input
                                    type="email"
                                    value={newComment.email}
                                    onChange={handleChangeEmail}
                                />
                            </div>
                        </div>
                        <ColorButton buttonText="Post Comment" type="submit" />
                    </form>
                </div>
            </div>
            <div className="article-page-main-underline"></div>
        </>
    )
}

export default Comments
