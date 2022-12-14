import articlesArray from 'components/ArticlesSection/articlesArray'
import { Link, useParams } from 'react-router-dom'
import StickyBox from 'react-sticky-box'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import './ArticlePage.scss'
import ArticlePageSidebar from './ArticlePageSidebar'
import Comments from './Comments'
import Recomendations from './Recomendations'
import * as Scroll from 'react-scroll'

type Props = {}

const ArticlePage = (props: Props) => {
    const { articleId } = useParams()

    let filtredId = articlesArray.filter(
        (element) => element.id === Number(articleId)
    )

    const isLiked = useAppSelector(
        (state) => state.articlesLikeState[filtredId[0].id]
    )
    const dispatch = useAppDispatch()

    //

    let NavLink = Scroll.Link
    let Element = Scroll.Element

    return (
        <div className="article-page">
            <div className="article-header-dark"></div>
            <div
                className="article-page-header"
                style={{
                    backgroundImage: `url(${filtredId[0].image})`,
                }}
            >
                <div className="container">
                    <div className="article-page-header-content">
                        <div className="article-page-header-content-buttons">
                            <button>
                                <Link to={`/${filtredId[0].country}`}>
                                    {filtredId[0].country}
                                </Link>
                            </button>
                            {filtredId[0].section.length > 0 ? (
                                <button>
                                    <Link to={`/${filtredId[0].section}`}>
                                        {filtredId[0].section}
                                    </Link>
                                </button>
                            ) : undefined}
                        </div>
                        <p>{filtredId[0].header}</p>
                        <div className="article-page-header-content-info">
                            <div className="header-content-info-autor">
                                <div className="header-content-info-autor-avatar">
                                    <img src="/images/kiko.png" alt="" />
                                </div>
                                <div className="header-content-info-autor-name">
                                    Kiko Morris
                                </div>
                            </div>
                            <p>.</p>
                            <div>{filtredId[0].date}</div>
                            <p>.</p>
                            <div>4.4K Vievs</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="article-page-main">
                    <div className="article-page-main-center">
                        <div className="article-page-main-center-text">
                            <div className="nav-buttons">
                                <NavLink to="like" smooth={true} offset={-100}>
                                    <div className="nav-button-item nav-item-1">
                                        <button className="nav-button-like"></button>
                                        <div className="nav-like-button-description">
                                            Things to do
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="food" smooth={true} offset={-100}>
                                    <div className="nav-button-item nav-item-2">
                                        <button className="nav-button-food"></button>
                                        <div className="nav-food-button-description">
                                            Where to eat
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to="hotels"
                                    smooth={true}
                                    offset={-100}
                                >
                                    <div className="nav-button-item nav-item-3">
                                        <button className="nav-button-hotels"></button>
                                        <div className="nav-hotels-button-description">
                                            Comfortable Hotels
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to="transportation"
                                    smooth={true}
                                    offset={-100}
                                >
                                    <div className="nav-button-item nav-item-4">
                                        <button className="nav-button-transportation"></button>
                                        <div className="nav-transportation-button-description">
                                            Transportation
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to="comments"
                                    smooth={true}
                                    offset={-100}
                                >
                                    <div className="nav-button-item nav-item-5">
                                        <button className="nav-button-comments"></button>
                                        <div className="nav-comments-button-description">
                                            Comments
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="margin-top">
                                <p>{filtredId[0].articleText}</p>
                                <img
                                    className="article-page-main-img"
                                    src={filtredId[0].articleImg1}
                                    alt=""
                                />
                                <Element name="like">
                                    <p className="article-page-main-header">
                                        Things to do in{' '}
                                        <span>{filtredId[0].country}</span>
                                    </p>
                                </Element>
                                <p>
                                    The most difficult thing is the decision to
                                    act, the rest is merely tenacity.{' '}
                                    <span className="bold-text">Cras</span>{' '}
                                    purus turpis, laoreet eget hendrerit id,
                                    ornare commodo augue. Integer sit amet ante
                                    sollicitudin, luctus ipsum non, lobortis
                                    nibh. Sed felis ipsum, ornare ac varius vel,
                                    mattis sed sapien. Mauris nec tortor diam.
                                    Sed in ipsum finibus, sollicitudin nisl at,
                                    malesuada nibh.
                                </p>
                                <p className="article-page-main-medium-header">
                                    {filtredId[0].firstArticleParagraph}
                                </p>
                                <p>
                                    Vestibulum ante ipsum primis in faucibus
                                    orci luctus et ultrices posuere cubilia
                                    Curae;{' '}
                                    <span className="bold-text">
                                        Fusce porttitor metus
                                    </span>{' '}
                                    eget lectus consequat, sit amet feugiat
                                    magna vulputate. Phasellus iaculis tellus
                                    augue, at ultrices lacus efficitur a. Mauris
                                    a nibh erat. In sed massa sed erat
                                    consectetur convallis vel vitae felis.
                                    Vivamus in tempus erat. Cras porta nisi sit
                                    amet leo dictum, non suscipit neque
                                    tincidunt. Ut et enim ligula.
                                </p>
                                <p>
                                    Etiam sed enim vitae magna pretium tincidunt
                                    eget vel massa. Maecenas porttitor at risus
                                    sit amet facilisis. Cras et elit id velit
                                    semper bibendum et vel purus.
                                </p>
                                <p className="article-page-main-medium-header">
                                    {filtredId[0].secondArticleParagraph}
                                </p>
                                <p>
                                    Aenean in fringilla dui, nec ullamcorper
                                    leo. Curabitur lacus nulla, ultricies sit
                                    amet efficitur quis, congue lobortis magna.
                                    Proin hendrerit dolor sit amet erat
                                    convallis lobortis. Phasellus rhoncus eros
                                    nec ultricies luctus. Morbi suscipit pretium
                                    mi, eu faucibus odio fermentum sit amet.
                                    Pellentesque finibus dui quis odio vehicula
                                    gravida sit amet et nisi. Phasellus euismod
                                    sem nunc, ut efficitur massa imperdiet
                                    vitae. Donec vitae congue nulla. Vivamus non
                                    porta augue.
                                </p>
                                <div className="quote">
                                    <div className="vertical-line"></div>
                                    <div className="quote-content">
                                        <p>
                                            I have seen many storms in my life.
                                            Most storms have caught me by
                                            surprise, so I had to learn very
                                            quickly to look further and
                                            understand that I am not capable of
                                            controlling the weather, to exercise
                                            the art of patience and to respect
                                            the fury of nature.
                                        </p>
                                        <p>Paulo Coelho</p>
                                    </div>
                                </div>
                                <Element name="food">
                                    <p className="article-page-main-header">
                                        Where to eat
                                    </p>
                                </Element>
                                <p>
                                    Vel aliquet diam. Suspendisse quis sodales
                                    risus. Quisque pharetra, lacus quis
                                    venenatis molestie, nibh tortor aliquam dui,
                                    id venenatis lectus metus id ipsum. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </p>
                                <ul>
                                    <li>
                                        Etiam sed enim vitae magna pretium
                                        tincidunt eget vel massa.
                                    </li>
                                    <li>
                                        Maecenas porttitor at risus sit amet
                                        facilisis.
                                    </li>
                                    <li>
                                        Cras et elit id velit semper bibendum et
                                        vel purus.
                                    </li>
                                </ul>
                                <div className="article-page-main-img-wrapper">
                                    <div className="article-page-main-img-wrapper-item">
                                        <img
                                            className="article-page-main-img"
                                            src={filtredId[0].articleImg2}
                                            alt=""
                                        />
                                    </div>
                                    <div className="article-page-main-img-wrapper-item">
                                        <img
                                            className="article-page-main-img"
                                            src={filtredId[0].articleImg3}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <Element name="hotels">
                                    <p className="article-page-main-header">
                                        Comfortable Hotels
                                    </p>
                                </Element>
                                <p>
                                    Vestibulum ante ipsum primis in faucibus
                                    orci luctus et ultrices posuere cubilia
                                    Curae; Fusce porttitor metus eget lectus
                                    consequat, sit amet feugiat magna{' '}
                                    <span className="bold-text">
                                        vulputate.
                                    </span>{' '}
                                    Phasellus iaculis tellus augue, at ultrices
                                    lacus efficitur a. Mauris a nibh erat. In
                                    sed massa sed erat consectetur convallis vel
                                    vitae felis. Vivamus in tempus erat. Cras
                                    porta nisi sit amet leo dictum, non suscipit
                                    neque tincidunt. Ut et enim ligula.
                                </p>
                                <div>
                                    <img
                                        className="article-page-main-img"
                                        src={filtredId[0].articleImg4}
                                        alt=""
                                    />
                                </div>
                                <ol>
                                    <li>
                                        Etiam sed enim vitae magna pretium
                                        tincidunt eget vel massa.
                                    </li>
                                    <li>
                                        Maecenas porttitor at risus sit amet
                                        facilisis.
                                    </li>
                                    <li>
                                        Cras et elit id velit semper bibendum et
                                        vel purus.
                                    </li>
                                </ol>
                                <Element name="transportation">
                                    <p className="article-page-main-header">
                                        How to get around
                                    </p>
                                </Element>
                                <p>
                                    <span className="bold-text">
                                        Proin in est tincidunt, venenatis ligula
                                        et, ultrices eros.
                                    </span>{' '}
                                    Proin eget nisl ut augue viverra
                                    scelerisque. Donec eget est non elit egestas
                                    viverra sed eu justo. Pellentesque ultrices
                                    volutpat tincidunt. Morbi mattis nibh auctor
                                    ex faucibus fermentum. Sed quis metus
                                    vulputate, congue ex ac, feugiat nulla.
                                    Maecenas auctor, elit nec iaculis
                                    ullamcorper, dolor felis euismod est, ut
                                    efficitur enim ipsum ac est. Sed quam purus,
                                    euismod vitae molestie id, ultrices eu erat.
                                    Pellentesque elementum libero ut nisl
                                    gravida faucibus.
                                </p>
                                <div>
                                    <img
                                        className="article-page-main-img"
                                        src={filtredId[0].articleImg5}
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aenean in fringilla dui,
                                    nec ullamcorper leo. Curabitur lacus nulla,
                                    ultricies sit amet efficitur quis, congue
                                    lobortis magna. Proin hendrerit dolor sit
                                    amet erat convallis lobortis. Phasellus
                                    rhoncus eros nec ultricies luctus. Morbi
                                    suscipit pretium mi, eu faucibus odio
                                    fermentum sit amet. Pellentesque finibus dui
                                    quis odio vehicula gravida sit amet et nisi.
                                    Phasellus euismod sem nunc, ut efficitur
                                    massa imperdiet vitae. Donec vitae congue
                                    nulla. Vivamus non porta augue.
                                </p>
                                <ul className="article-page-main-list">
                                    <li>
                                        <span className="bold-text">
                                            By foot
                                        </span>{' '}
                                        ??? Morbi mattis nibh auctor ex faucibus
                                        fermentum. Sed quis metus vulputate.
                                    </li>
                                    <li>
                                        <span className="bold-text">Bike</span>{' '}
                                        ??? Sed quam purus, euismod vitae molestie
                                        id.
                                    </li>
                                    <li>
                                        <span className="bold-text">Taxi</span>{' '}
                                        ??? Maecenas porttitor at risus sit amet
                                        facilisis. Cras et elit id velit semper
                                        bibendum et vel purus.
                                    </li>
                                </ul>
                            </div>
                            <NavLink to="comments" smooth={true} offset={-50}>
                                <button className="article-page-main-comment-btn"></button>
                            </NavLink>
                            <button
                                className="like"
                                onClick={() =>
                                    isLiked
                                        ? dispatch(removeLike(filtredId[0].id))
                                        : dispatch(addLike(filtredId[0].id))
                                }
                            >
                                {isLiked ? (
                                    <img src="/images/like.png" alt="" />
                                ) : (
                                    <img src="/images/dislike.png" alt="" />
                                )}
                            </button>
                            <div className="article-page-main-underline"></div>
                        </div>
                        <div>
                            <div className="article-page-main-author">
                                <div className="article-page-main-author-wrapper">
                                    <div className="author-img">
                                        <img src="/images/kiko.png" alt="" />
                                    </div>
                                    <div className="author-content">
                                        <div className="author-name">
                                            Kiko Morris
                                        </div>
                                        <div className="author-description">
                                            Traveller. Blogger. Writer. I have
                                            traveled to over 60 countries around
                                            the world! Like all great
                                            travellers, I have seen more than I
                                            remember and remember more than I
                                            have seen.
                                        </div>
                                        <div className="author-links">
                                            <button></button>
                                            <button></button>
                                            <button></button>
                                            <button></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Element name="comments">
                            <div className="article-page-main-comments">
                                <Comments id={filtredId[0].id} />
                            </div>
                        </Element>
                        <Recomendations currentId={filtredId[0].id} />
                    </div>
                    <StickyBox
                        offsetTop={20}
                        offsetBottom={20}
                        className="sidebar-desktop"
                    >
                        <ArticlePageSidebar currentId={filtredId[0].id} />
                    </StickyBox>
                    <div className="sidebar-tablet">
                        <ArticlePageSidebar currentId={filtredId[0].id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage
