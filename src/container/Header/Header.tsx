import React from 'react'
import ArticleHeader from 'components/ArticleHeader/ArticleHeader'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <img src="images/logo.png" alt="" />
                        </div>
                        <div className="header-menu">
                            <ul className="row">
                                <li className="home">
                                    <div className="home-content">HOME</div>
                                    <div className="undeline show"></div>
                                    <ul className="home-sub-menu">
                                        <li>Eaven Abroad 1</li>
                                        <li>Eaven Abroad 2</li>
                                        <li>Eaven Abroad 3</li>
                                        <li>Our Voyage 1 (Map)</li>
                                        <li>Our Voyage 2 (Dark)</li>
                                        <li>Our Voyage 3</li>
                                        <li className="sub-item-featured">
                                            Home Featured Area
                                            <ul className="sub-sub-menu-featured">
                                                <li>Featured Slider Style 1</li>
                                                <li>Featured Slider Style 2</li>
                                                <li>Featured Slider Style 3</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="destinations">
                                    <div className="destinations-content">
                                        DESTINATIONS
                                    </div>
                                    <div className="undeline hide"></div>
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
                                    <div className="guides-content">GUIDES</div>
                                    <div className="undeline hide"></div>
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
                                    <div className="features-content">
                                        FEATURES
                                    </div>
                                    <div className="undeline hide"></div>
                                    <div className="features-hover">
                                        <ul>
                                            <li>
                                                <div className="features-logo">
                                                    POST LAYOUT
                                                </div>
                                            </li>
                                            <li>Standard</li>
                                            <li>Grid 2 Columns</li>
                                            <li>Grid 3 Columns</li>
                                            <li>First Block + Grid 2 Cols</li>
                                            <li>First Block + Grid 3 Cols</li>
                                            <li>Masonry 2 Columns</li>
                                            <li>Masonry 3 Columns</li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <div className="features-logo">
                                                    POST LAYOUT
                                                </div>
                                            </li>
                                            <li>
                                                First Block + Masonry 2 Cols
                                            </li>
                                            <li>
                                                First Block + Masonry 3 Cols
                                            </li>
                                            <li>Block 1 Column</li>
                                            <li>Block 2 Columns</li>
                                            <li>Block Column 3</li>
                                            <li>Block Column 4</li>
                                            <li>Drop</li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <div className="features-logo">
                                                    SINGLE POST
                                                </div>
                                            </li>
                                            <li>
                                                Fullwidth Overlay Post Header
                                            </li>
                                            <li>Image As Post Background</li>
                                            <li>
                                                Image Background + Left Sidebar
                                            </li>
                                            <li>Fullwidth Post Header</li>
                                            <li>Regular Template</li>
                                            <li>
                                                Regular Template + No Sidebar
                                            </li>
                                            <li>Regular Overlay Post Header</li>
                                            <li>
                                                Regular Overlay Header + No
                                                Sidebar
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <div className="features-logo">
                                                    SINGLE POST
                                                </div>
                                            </li>
                                            <li>Standard Post</li>
                                            <li>Gallery Post</li>
                                            <li>Video Post</li>
                                            <li>Audio Post</li>
                                            <li>Left Sidebar</li>
                                            <li>No Sidebar</li>
                                            <li>Content Navigation - Side</li>
                                            <li>Content Navigation - Top</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="elements">
                                    <div className="elements-content">
                                        ELEMENTS
                                    </div>
                                    <div className="undeline hide"></div>
                                    <ul className="elements-sub-menu">
                                        <li>Posts Block</li>
                                        <li>Dropcaps</li>
                                        <li>Buttons & Dividers</li>
                                        <li>Rows & Columns</li>
                                        <li>Highlights</li>
                                        <li>Tabs & Accordions</li>
                                        <li>Tweet it</li>
                                        <li>Video Block</li>
                                        <li>Wide Image & Galleries</li>
                                    </ul>
                                </li>
                                <li className="pages">
                                    <div className="pages-content">PAGES</div>
                                    <div className="undeline hide"></div>
                                    <ul className="pages-sub-menu">
                                        <li>About Me</li>
                                        <li>Contact</li>
                                        <li>Author Page</li>
                                        <li>Category Page</li>
                                        <li>Search results</li>
                                        <li>404 Page</li>
                                    </ul>
                                </li>
                                <li className="shop">
                                    <div className="shop-content">SHOP</div>
                                    <div className="undeline hide"></div>
                                    <ul className="shop-sub-menu">
                                        <li>Products 3 Columns</li>
                                        <li>Products 4 Columns</li>
                                        <li>With Left Sidebar</li>
                                        <li>Cart</li>
                                        <li>Checkout</li>
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
