import articlesArray from 'components/ArticlesSection/articlesArray'
import DestinationItem from 'components/DestinationItem/DestinationItem'
import { Link } from 'react-router-dom'
import './ArticlePageSidebar.scss'
import SidebarItem from './SidebarItem'

type Props = {
    currentId: number
}

type ArticleProps = {
    image: string
    country: string
    dash: string
    section: string
    header: string
    date: string
    id: number
}

const ArticlePageSidebar = ({ currentId }: Props) => {
    let articlesArrayCopy: ArticleProps[] = []
    let newArr: ArticleProps[] = []

    articlesArrayCopy = [...articlesArray]
    articlesArrayCopy.splice(currentId - 1, 1)

    articlesArrayCopy.map((arrayItem: ArticleProps, i: number) => {
        if (i < 3) {
            return newArr.splice(0, 0, arrayItem)
        } else {
            return undefined
        }
    })

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src="/images/admin-img.png" alt="" />
            </div>
            <div className="sidebar-description">
                <p>About Kiko</p>
                <p>
                    Traveller. Blogger. Writer. I have traveled to over 60
                    countries around the world since 2015! Like all great
                    travellers, I have seen more than I remember and remember
                    more than I have seen.
                </p>
            </div>
            <div className="sidebar-signature">
                <img src="/images/sidebar-signature.png" alt="" />
            </div>
            <div className="sidebar-social">
                <div className="sidebar-section-name">
                    <div></div>
                    <div>Follow Us</div>
                </div>
                <div className="sidebar-social-buttons">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className="sidebar-popular-articles">
                <div className="sidebar-section-name">
                    <div></div>
                    <div>Most Popular</div>
                </div>
                <div>
                    {newArr.map(
                        ({
                            image,
                            country,
                            dash,
                            section,
                            header,
                            date,
                            id,
                        }: ArticleProps) => (
                            <div className="sidebar-most-popular-item" key={id}>
                                <SidebarItem
                                    image={image}
                                    country={country}
                                    dash={dash}
                                    section={section}
                                    header={header}
                                    date={date}
                                    id={id}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="sidebar-destinations">
                <div className="sidebar-section-name">
                    <div></div>
                    <div>Hot Destinations</div>
                </div>
                <div>
                    <Link to="/australia">
                        <DestinationItem country="australia" />
                    </Link>
                    <Link to="/france">
                        <DestinationItem country="france" />
                    </Link>
                    <Link to="/italy">
                        <DestinationItem country="italy" />
                    </Link>
                    <Link to="/japan">
                        <DestinationItem country="japan" />
                    </Link>
                    <Link to="/singapore">
                        <DestinationItem country="singapore" />
                    </Link>
                </div>
            </div>
            <div className="sidebar-newsletter">
                <div className="sidebar-section-name">
                    <div></div>
                    <div>Newsletter</div>
                </div>
                <p>
                    Sign up to the weekly travel newsletter for the latest
                    posts, city guides, and the useful travel tips and secrets.
                </p>
                <div className="sidebar-newsletter-input">
                    <input type="email" placeholder="Your Email" />
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default ArticlePageSidebar
