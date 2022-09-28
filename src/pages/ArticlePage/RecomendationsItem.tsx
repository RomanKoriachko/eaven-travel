import { Link } from 'react-router-dom'
import './RecomendationsItem.scss'

type Props = {
    image: string
    country: string
    dash: string
    section: string
    header: string
    id: number
}

const RecomendationsItem = ({
    image,
    country,
    dash,
    section,
    header,
    id,
}: Props) => {
    return (
        <>
            <Link to={`/destinations/${id}`}>
                <div className="page-article-img">
                    <img src={image} alt="" />
                </div>
            </Link>
            <div className="page-article-main">
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
        </>
    )
}

export default RecomendationsItem
