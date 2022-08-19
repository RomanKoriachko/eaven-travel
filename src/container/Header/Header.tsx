import React from 'react'
import ArticleHeader from 'components/ArticleHeader/ArticleHeader'
import './Header.scss'

type Props = {}

function tabs() {
    let tabsItem = document.querySelectorAll('.tab-title-item')
    let tabsContent = document.querySelectorAll('.tab-content')
    let tabsWrap = document.querySelector('.tab-title-items')

    function hideTabsContent() {
        tabsContent.forEach((tab) => {
            tab.classList.add('hide')
            tab.classList.remove('show-tab')
        })

        tabsItem.forEach((item) => {
            item.classList.remove('active-item')
        })
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show-tab')
        tabsContent[i].classList.remove('hide')
        tabsItem[i].classList.add('active-item')
    }

    hideTabsContent()
    showTabsContent()

    tabsWrap!.addEventListener('click', function (e) {
        let target = e.target as Element
        if (target && target.classList.contains('tab-title-item')) {
            tabsItem.forEach((item, i) => {
                if (target === item) {
                    hideTabsContent()
                    showTabsContent(i)
                }
            })
        }
    })
}

const Header = (props: Props) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <a href="">
                                <img src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="header-menu">
                            <ul className="row">
                                <li className="home">
                                    <a href="">
                                        HOME
                                        <div className="undeline show"></div>
                                    </a>
                                    <ul className="home-sub-menu">
                                        <li>
                                            <a href="">Eaven Abroad 1</a>
                                        </li>
                                        <li>
                                            <a href="">Eaven Abroad 2</a>
                                        </li>
                                        <li>
                                            <a href="">Eaven Abroad 3</a>
                                        </li>
                                        <li>
                                            <a href="">Our Voyage 1 (Map)</a>
                                        </li>
                                        <li>
                                            <a href="">Our Voyage 2 (Dark)</a>
                                        </li>
                                        <li>
                                            <a href="">Our Voyage 3</a>
                                        </li>
                                        <li className="sub-item-featured">
                                            <a href="">Home Featured Area</a>
                                            <ul className="sub-sub-menu-featured">
                                                <li>
                                                    <a href="">
                                                        Featured Slider Style 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        Featured Slider Style 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        Featured Slider Style 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="destinations">
                                    <a href="">
                                        DESTINATIONS
                                        <div className="undeline hide"></div>
                                    </a>
                                    <div className="destinations-hover">
                                        <div className="destinations-tabs row">
                                            <div className="tab-title-items">
                                                <div className="tab-title-item">
                                                    All
                                                </div>
                                                <div className="tab-title-item">
                                                    Asia
                                                </div>
                                                <div className="tab-title-item">
                                                    Australia
                                                </div>
                                                <div className="tab-title-item">
                                                    Europe
                                                </div>
                                            </div>
                                            <div className="tab-container">
                                                <div className="tab-content row">
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/europe-article-1.jpg"
                                                            desc="Nice and Cozy House for Stay – Travel Guide"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/asia-article-1.jpg"
                                                            desc="Fly to Tokyo for My Christmas 2019! And My Trip Plan Inspirations"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/europe-article-2.jpg"
                                                            desc="Travel to Santa’s Village: Modern Santa comes with Public Transport"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tab-content row">
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/asia-article-1.jpg"
                                                            desc="Fly to Tokyo for My Christmas 2019! And My Trip Plan Inspirations"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/asia-article-2.jpg"
                                                            desc="The Complete Guide – Singapore’s Gardens by the Bay"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/asia-article-3.jpg"
                                                            desc="Everything You Need to Know About Buddhism in Thailand"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tab-content row">
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/australia-article-1.jpg"
                                                            desc="Penguin Parade Australia: Penguins Don’t Live Just in Antarctica"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/australia-article-2.jpg"
                                                            desc="What’s the Best Cruise Tour to see Emperor Penguins?"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/australia-article-3.jpg"
                                                            desc="Just Cannot Miss! The Best Location for Whale Watching in Port Stephens"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tab-content row">
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/europe-article-1.jpg"
                                                            desc="Nice and Cozy House for Stay – Travel Guide"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/europe-article-2.jpg"
                                                            desc="Travel to Santa’s Village: Modern Santa comes with Public Transport"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="images/europe-article-3.jpg"
                                                            desc="Travel to Santa’s Village: Modern Santa comes with Public Transport"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="guides">
                                    <a href="">
                                        GUIDES
                                        <div className="undeline hide"></div>
                                    </a>
                                    <div className="guides-hover">
                                        <ArticleHeader
                                            img="images/australia-article-1.jpg"
                                            desc="Penguin Parade Australia: Penguins Don’t Live Just in Antarctica"
                                        />
                                        <ArticleHeader
                                            img="images/europe-article-3.jpg"
                                            desc="Seven Artisan Villages in Finland You Simply Must Visit"
                                        />
                                        <ArticleHeader
                                            img="images/australia-article-2.jpg"
                                            desc="What’s the Best Cruise Tour to see Emperor Penguins?"
                                        />
                                        <ArticleHeader
                                            img="images/australia-article-3.jpg"
                                            desc="Just Cannot Miss! The Best Location for Whale Watching in Port Stephens"
                                        />
                                    </div>
                                </li>
                                <li className="features">
                                    <a href="">
                                        FEATURES
                                        <div className="undeline hide"></div>
                                    </a>
                                    <div className="features-hover">
                                        <ul>
                                            <li>
                                                <a
                                                    href=""
                                                    className="features-logo"
                                                >
                                                    POST LAYOUT
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Standard</a>
                                            </li>
                                            <li>
                                                <a href="">Grid 2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="">Grid 3 Columns</a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    First Block + Grid 2 Cols
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    First Block + Grid 3 Cols
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Masonry 2 Columns</a>
                                            </li>
                                            <li>
                                                <a href="">Masonry 3 Columns</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a
                                                    href=""
                                                    className="features-logo"
                                                >
                                                    POST LAYOUT
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    First Block + Masonry 2 Cols
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    First Block + Masonry 3 Cols
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Block 1 Column</a>
                                            </li>
                                            <li>
                                                <a href="">Block 2 Columns </a>
                                            </li>
                                            <li>
                                                <a href="">Block Column 3</a>
                                            </li>
                                            <li>
                                                <a href="">Block Column 4</a>
                                            </li>
                                            <li>
                                                <a href="">Drop</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a
                                                    href=""
                                                    className="features-logo"
                                                >
                                                    SINGLE POST
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Fullwidth Overlay Post
                                                    Header
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Image As Post Background
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Image Background + Left
                                                    Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Fullwidth Post Header
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Regular Template</a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Regular Template + No
                                                    Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Regular Overlay Post Header
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Regular Overlay Header + No
                                                    Sidebar
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a
                                                    href=""
                                                    className="features-logo"
                                                >
                                                    SINGLE POST
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">Standard Post</a>
                                            </li>
                                            <li>
                                                <a href="">Gallery Post</a>
                                            </li>
                                            <li>
                                                <a href="">Video Post</a>
                                            </li>
                                            <li>
                                                <a href="">Audio Post</a>
                                            </li>
                                            <li>
                                                <a href="">Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="">No Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Content Navigation - Side
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Content Navigation - Top
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="elements">
                                    <a href="">
                                        ELEMENTS
                                        <div className="undeline hide"></div>
                                    </a>
                                    <ul className="elements-sub-menu">
                                        <li>
                                            <a href="">Posts Block</a>
                                        </li>
                                        <li>
                                            <a href="">Dropcaps</a>
                                        </li>
                                        <li>
                                            <a href="">Buttons & Dividers</a>
                                        </li>
                                        <li>
                                            <a href="">Rows & Columns</a>
                                        </li>
                                        <li>
                                            <a href="">Highlights</a>
                                        </li>
                                        <li>
                                            <a href="">Tabs & Accordions</a>
                                        </li>
                                        <li>
                                            <a href="">Tweet it</a>
                                        </li>
                                        <li>
                                            <a href="">Video Block</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Wide Image & Galleries
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="pages">
                                    <a href="">
                                        PAGES
                                        <div className="undeline hide"></div>
                                    </a>
                                    <ul className="pages-sub-menu">
                                        <li>
                                            <a href="">About Me</a>
                                        </li>
                                        <li>
                                            <a href="">Contact</a>
                                        </li>
                                        <li>
                                            <a href="">Author Page</a>
                                        </li>
                                        <li>
                                            <a href="">Category Page</a>
                                        </li>
                                        <li>
                                            <a href="">Search results</a>
                                        </li>
                                        <li>
                                            <a href="">404 Page</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="shop">
                                    <a href="">
                                        SHOP
                                        <div className="undeline hide"></div>
                                    </a>
                                    <ul className="shop-sub-menu">
                                        <li>
                                            <a href="">Products 3 Columns</a>
                                        </li>
                                        <li>
                                            <a href="">Products 4 Columns</a>
                                        </li>
                                        <li>
                                            <a href="">With Left Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="">Cart</a>
                                        </li>
                                        <li>
                                            <a href="">Checkout</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="header-buttons row">
                            <div className="cart"></div>
                            <div className="search"></div>
                            <div className="menu"></div>
                            <div className="burger-menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {tabs()}
        </>
    )
}

export default Header
