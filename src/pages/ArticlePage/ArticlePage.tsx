import articlesArray from 'components/ArticlesSection/articlesArray'
import { useParams } from 'react-router-dom'
import './ArticlePage.scss'

type Props = {}

const ArticlePage = (props: Props) => {
    const { articleId } = useParams()

    let filtredId = articlesArray.filter(
        (element) => element.id === Number(articleId)
    )

    console.log(filtredId[0].image)

    return (
        <div className="article-page">
            <div
                className="article-page-header"
                style={{
                    backgroundImage: `url(./${filtredId[0].image})`,
                }}
            >
                <div className="container">
                    <div className="article-page-header-content">
                        <p>{filtredId[0].header}</p>
                        <div className="article-page-header-content-info">
                            <div className="header-content-info-autor">
                                <div className="header-content-info-autor-avatar">
                                    <img src="./images/kiko.png" alt="" />
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
                        <p>{filtredId[0].articleText}</p>
                        <img src="" alt="" />
                        <p className="article-page-main-header">
                            Things to do in <span>{filtredId[0].country}</span>
                        </p>
                        <p>
                            The most difficult thing is the decision to act, the
                            rest is merely tenacity. Cras purus turpis, laoreet
                            eget hendrerit id, ornare commodo augue. Integer sit
                            amet ante sollicitudin, luctus ipsum non, lobortis
                            nibh. Sed felis ipsum, ornare ac varius vel, mattis
                            sed sapien. Mauris nec tortor diam. Sed in ipsum
                            finibus, sollicitudin nisl at, malesuada nibh.
                        </p>
                        <p className="article-page-main-medium-header">
                            {filtredId[0].firstArticleParagraph}
                        </p>
                        <p>
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Fusce porttitor
                            metus eget lectus consequat, sit amet feugiat magna
                            vulputate. Phasellus iaculis tellus augue, at
                            ultrices lacus efficitur a. Mauris a nibh erat. In
                            sed massa sed erat consectetur convallis vel vitae
                            felis. Vivamus in tempus erat. Cras porta nisi sit
                            amet leo dictum, non suscipit neque tincidunt. Ut et
                            enim ligula.
                        </p>
                        <p>
                            Etiam sed enim vitae magna pretium tincidunt eget
                            vel massa. Maecenas porttitor at risus sit amet
                            facilisis. Cras et elit id velit semper bibendum et
                            vel purus.
                        </p>
                        <p className="article-page-main-medium-header">
                            {filtredId[0].secondArticleParagraph}
                        </p>
                        <p>
                            Aenean in fringilla dui, nec ullamcorper leo.
                            Curabitur lacus nulla, ultricies sit amet efficitur
                            quis, congue lobortis magna. Proin hendrerit dolor
                            sit amet erat convallis lobortis. Phasellus rhoncus
                            eros nec ultricies luctus. Morbi suscipit pretium
                            mi, eu faucibus odio fermentum sit amet.
                            Pellentesque finibus dui quis odio vehicula gravida
                            sit amet et nisi. Phasellus euismod sem nunc, ut
                            efficitur massa imperdiet vitae. Donec vitae congue
                            nulla. Vivamus non porta augue.
                        </p>
                        <div className="quote">
                            <div className="vertical-line"></div>
                            <div className="quote-content">
                                <p>
                                    I have seen many storms in my life. Most
                                    storms have caught me by surprise, so I had
                                    to learn very quickly to look further and
                                    understand that I am not capable of
                                    controlling the weather, to exercise the art
                                    of patience and to respect the fury of
                                    nature.
                                </p>
                                <p>Paulo Coelho</p>
                            </div>
                        </div>
                        <p className="article-page-main-header">Where to eat</p>
                        <p>
                            Vel aliquet diam. Suspendisse quis sodales risus.
                            Quisque pharetra, lacus quis venenatis molestie,
                            nibh tortor aliquam dui, id venenatis lectus metus
                            id ipsum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                        <ul>
                            <li>
                                Etiam sed enim vitae magna pretium tincidunt
                                eget vel massa.
                            </li>
                            <li>
                                Maecenas porttitor at risus sit amet facilisis.
                            </li>
                            <li>
                                Cras et elit id velit semper bibendum et vel
                                purus.
                            </li>
                        </ul>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <p className="article-page-main-header">
                            Comfortable Hotels
                        </p>
                        <p>
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Fusce porttitor
                            metus eget lectus consequat, sit amet feugiat magna
                            vulputate. Phasellus iaculis tellus augue, at
                            ultrices lacus efficitur a. Mauris a nibh erat. In
                            sed massa sed erat consectetur convallis vel vitae
                            felis. Vivamus in tempus erat. Cras porta nisi sit
                            amet leo dictum, non suscipit neque tincidunt. Ut et
                            enim ligula.
                        </p>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <ol>
                            <li>
                                Etiam sed enim vitae magna pretium tincidunt
                                eget vel massa.
                            </li>
                            <li>
                                Maecenas porttitor at risus sit amet facilisis.
                            </li>
                            <li>
                                Cras et elit id velit semper bibendum et vel
                                purus.
                            </li>
                        </ol>
                        <p className="article-page-main-header">
                            How to get around
                        </p>
                        <p>
                            Proin in est tincidunt, venenatis ligula et,
                            ultrices eros. Proin eget nisl ut augue viverra
                            scelerisque. Donec eget est non elit egestas viverra
                            sed eu justo. Pellentesque ultrices volutpat
                            tincidunt. Morbi mattis nibh auctor ex faucibus
                            fermentum. Sed quis metus vulputate, congue ex ac,
                            feugiat nulla. Maecenas auctor, elit nec iaculis
                            ullamcorper, dolor felis euismod est, ut efficitur
                            enim ipsum ac est. Sed quam purus, euismod vitae
                            molestie id, ultrices eu erat. Pellentesque
                            elementum libero ut nisl gravida faucibus.
                        </p>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean in fringilla dui, nec ullamcorper leo.
                            Curabitur lacus nulla, ultricies sit amet efficitur
                            quis, congue lobortis magna. Proin hendrerit dolor
                            sit amet erat convallis lobortis. Phasellus rhoncus
                            eros nec ultricies luctus. Morbi suscipit pretium
                            mi, eu faucibus odio fermentum sit amet.
                            Pellentesque finibus dui quis odio vehicula gravida
                            sit amet et nisi. Phasellus euismod sem nunc, ut
                            efficitur massa imperdiet vitae. Donec vitae congue
                            nulla. Vivamus non porta augue.
                        </p>
                        <ul>
                            <li>
                                By foot – Morbi mattis nibh auctor ex faucibus
                                fermentum. Sed quis metus vulputate.
                            </li>
                            <li>
                                Bike – Sed quam purus, euismod vitae molestie
                                id.
                            </li>
                            <li>
                                Taxi – Maecenas porttitor at risus sit amet
                                facilisis. Cras et elit id velit semper bibendum
                                et vel purus.
                            </li>
                        </ul>
                    </div>
                    <div className="article-page-main-sidebar"></div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage