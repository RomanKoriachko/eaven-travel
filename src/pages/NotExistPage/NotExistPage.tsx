import './NotExistPage.scss'

type Props = {}

const NotExistPage = (props: Props) => {
    return (
        <div className="not-exist-page">
            <div className="not-exist-page-header"></div>
            <div className="not-exist-page-img">
                <img src="/images/under-construction.png" alt="" />
            </div>
            <div className="not-exist-page-content">
                <p>Ooops...</p>
                <p>This page is under construction</p>
            </div>
        </div>
    )
}

export default NotExistPage
