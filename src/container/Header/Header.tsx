import ArticleHeader from 'components/ArticleHeader/ArticleHeader'
import React from 'react'
import './Header.scss'
// import logo from 'assets/logo.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <a href="">{/* <img src={logo} alt="" /> */}</a>
                        </div>
                        <div className="header-menu">
                            <ul className="row">
                                <li className="home">
                                    <a href="" className="active">
                                        HOME
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
                                    <a href="">DESTINATIONS</a>
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
                                                            img="img"
                                                            desc="Nice and Cozy House for Stay – Travel Guide"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="img"
                                                            desc="Fly to Tokyo for My Christmas 2019! And My Trip Plan Inspirations"
                                                        />
                                                    </div>
                                                    <div className="tab-content-all">
                                                        <ArticleHeader
                                                            img="img"
                                                            desc="Travel to Santa’s Village: Modern Santa comes with Public Transport"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-content-asia"></div>
                                                    <div className="tab-content-asia"></div>
                                                    <div className="tab-content-asia"></div>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-content-australia"></div>
                                                    <div className="tab-content-australia"></div>
                                                    <div className="tab-content-australia"></div>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-content-europe"></div>
                                                    <div className="tab-content-europe"></div>
                                                    <div className="tab-content-europe"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="guides">
                                    <a href="">GUIDES</a>
                                    <div className="guides-hover">
                                        <ArticleHeader
                                            img="img"
                                            desc="Penguin Parade Australia: Penguins Don’t Live Just in Antarctica"
                                        />
                                        <ArticleHeader
                                            img="img"
                                            desc="Seven Artisan Villages in Finland You Simply Must Visit"
                                        />
                                        <ArticleHeader
                                            img="img"
                                            desc="What’s the Best Cruise Tour to see Emperor Penguins?"
                                        />
                                        <ArticleHeader
                                            img="img"
                                            desc="Just Cannot Miss! The Best Location for Whale Watching in Port Stephens"
                                        />
                                    </div>
                                </li>
                                <li className="features">
                                    <a href="">FEATURES</a>
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
                                    <a href="">ELEMENTS</a>
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
                                    <a href="">PAGES</a>
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
                                    <a href="">SHOP</a>
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
        </>
    )
}

export default Header
