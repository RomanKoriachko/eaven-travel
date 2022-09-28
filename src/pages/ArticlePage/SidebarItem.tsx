import { Link } from 'react-router-dom'
import './SidebarItem.scss'

type ArticleProps = {
    image: string
    country: string
    dash: string
    section: string
    header: string
    date: string
    id: number
}

const SidebarItem = ({
    image,
    country,
    dash,
    section,
    header,
    date,
    id,
}: ArticleProps) => {
    return (
        <>
            <Link to={`/destinations/${id}`}>
                <div className="article-img">
                    <img src={image} alt="" />
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
            </div>
            <Link to={`/destinations/${id}`}>
                <div className="article-header">{header}</div>
                <div className="article-line"></div>
            </Link>
            <div className="article-date">{date}</div>
        </>
    )
}

export default SidebarItem
