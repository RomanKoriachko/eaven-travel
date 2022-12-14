import ArticleHeader from 'components/ArticleHeader/ArticleHeader'
import './Header.scss'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import { Link, NavLink } from 'react-router-dom'
import articlesArray from 'components/ArticlesSection/articlesArray'
import { Menu, Item } from 'burger-menu'
import 'burger-menu/lib/index.css'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { setClose, toggleState } from 'redux/burgerMenuReducer'
import { useEffect, useState } from 'react'

type Props = {}

export type ArticleProps = {
    id: number
    image: string
    header: string
    country: string
    section?: string
}

const Header = (props: Props) => {
    const filtredBySection = articlesArray.filter(
        ({ section }: ArticleProps) => section === 'GUIDES'
    )
    let filtredSlise = filtredBySection.slice(0, 4)

    const isOpen = useAppSelector((state) => state.isOpenState)
    const dispatch = useAppDispatch()

    if (isOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }

    // hiding header

    function useScrollDirection() {
        const [scrollDirection, setScrollDirection] = useState<string>('null')

        useEffect(() => {
            let lastScrollY = window.pageYOffset

            const updateScrollDirection = () => {
                const scrollY = window.pageYOffset
                const direction = scrollY > lastScrollY ? 'down' : 'up'
                if (
                    direction !== scrollDirection &&
                    (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
                ) {
                    setScrollDirection(() => {
                        return direction
                    })
                }
                lastScrollY = scrollY > 0 ? scrollY : 0
            }
            window.addEventListener('scroll', updateScrollDirection)
            return () => {
                window.removeEventListener('scroll', updateScrollDirection)
            }
        }, [scrollDirection])

        return scrollDirection
    }

    const scrollDirection = useScrollDirection()

    const [scroll, setScroll] = useState<number>(0)

    window.addEventListener('scroll', function () {
        setScroll(() => {
            return window.pageYOffset
        })
    })

    const [searchClass, setSearchClassClass] = useState<string>('hide-search')
    const [wrapperClass, setWrapperClass] = useState<string>('hide-wrapper')

    const openSearchInput = () => {
        setSearchClassClass((prevState: string) => {
            return prevState === 'hide-search' ? 'show-search' : 'hide-search'
        })
        setWrapperClass((prevState: string) => {
            return prevState === 'hide-wrapper'
                ? 'show-wrapper'
                : 'hide-wrapper'
        })
    }

    return (
        <>
            <header
                className={`header ${
                    scrollDirection === 'down' ? 'top-hide' : 'top-show'
                } ${scroll > 200 ? 'color' : 'transparent'}`}
            >
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <Link to="/">
                                <img src="/images/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="header-menu">
                            <ul className="header-menu-content row">
                                <li className="home">
                                    <div className="menu-item-name">
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'active'
                                                    : 'notActive'
                                            }
                                        >
                                            HOME
                                            <div className="underline"></div>
                                        </NavLink>
                                    </div>
                                    <ul className="home-sub-menu">
                                        <li className="home-sub-menu-item">
                                            Eaven Abroad 1
                                        </li>
                                        <li className="home-sub-menu-item">
                                            Eaven Abroad 2
                                        </li>
                                        <li className="home-sub-menu-item">
                                            Eaven Abroad 3
                                        </li>
                                        <li className="home-sub-menu-item">
                                            Our Voyage 1 (Map)
                                        </li>
                                        <li className="home-sub-menu-item">
                                            Our Voyage 2 (Dark)
                                        </li>
                                        <li className="home-sub-menu-item">
                                            Our Voyage 3
                                        </li>
                                        <li className="sub-item-featured">
                                            <div className="home-sub-menu-item">
                                                Home Featured Area
                                            </div>
                                            <ul className="sub-sub-menu-featured">
                                                <li>Featured Slider Style 1</li>
                                                <li>Featured Slider Style 2</li>
                                                <li>Featured Slider Style 3</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="destinations">
                                    <div className="menu-item-name">
                                        <NavLink
                                            to="/destinations"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'active'
                                                    : 'notActive'
                                            }
                                        >
                                            DESTINATIONS
                                            <div className="underline"></div>
                                        </NavLink>
                                    </div>
                                    <div className="destinations-hover">
                                        <div className="destinations-tabs">
                                            <Tabs>
                                                <TabList className="tab-title-items">
                                                    <Tab className="tab-title-item">
                                                        All
                                                    </Tab>
                                                    <Tab className="tab-title-item">
                                                        Asia
                                                    </Tab>
                                                    <Tab className="tab-title-item">
                                                        Australia
                                                    </Tab>
                                                    <Tab className="tab-title-item">
                                                        Europe
                                                    </Tab>
                                                </TabList>
                                                <TabPanel>
                                                    <div className="tab-content row">
                                                        {articlesArray
                                                            .filter(
                                                                ({
                                                                    id,
                                                                }: ArticleProps) =>
                                                                    id <= 3
                                                            )
                                                            .map(
                                                                ({
                                                                    id,
                                                                    image,
                                                                    header,
                                                                    country,
                                                                }: ArticleProps) => (
                                                                    <div
                                                                        className="article-preview"
                                                                        key={id}
                                                                    >
                                                                        <Link
                                                                            to={`/destinations/${id}`}
                                                                        >
                                                                            <ArticleHeader
                                                                                image={
                                                                                    image
                                                                                }
                                                                                header={
                                                                                    header
                                                                                }
                                                                                country={
                                                                                    country
                                                                                }
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            )}
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="tab-content row">
                                                        {articlesArray
                                                            .filter(
                                                                ({
                                                                    country,
                                                                }: ArticleProps) =>
                                                                    country ===
                                                                    'japan'
                                                            )
                                                            .map(
                                                                ({
                                                                    id,
                                                                    image,
                                                                    header,
                                                                    country,
                                                                }: ArticleProps) => (
                                                                    <div
                                                                        className="article-preview"
                                                                        key={id}
                                                                    >
                                                                        <Link
                                                                            to={`/destinations/${id}`}
                                                                        >
                                                                            <ArticleHeader
                                                                                image={
                                                                                    image
                                                                                }
                                                                                header={
                                                                                    header
                                                                                }
                                                                                country={
                                                                                    country
                                                                                }
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            )}
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="tab-content row">
                                                        {articlesArray
                                                            .filter(
                                                                ({
                                                                    country,
                                                                }: ArticleProps) =>
                                                                    country ===
                                                                    'australia'
                                                            )
                                                            .map(
                                                                ({
                                                                    id,
                                                                    image,
                                                                    header,
                                                                    country,
                                                                }: ArticleProps) => (
                                                                    <div
                                                                        className="article-preview"
                                                                        key={id}
                                                                    >
                                                                        <Link
                                                                            to={`/destinations/${id}`}
                                                                        >
                                                                            <ArticleHeader
                                                                                image={
                                                                                    image
                                                                                }
                                                                                header={
                                                                                    header
                                                                                }
                                                                                country={
                                                                                    country
                                                                                }
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            )}
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="tab-content row">
                                                        {articlesArray
                                                            .filter(
                                                                ({
                                                                    country,
                                                                }: ArticleProps) =>
                                                                    country ===
                                                                    'europe'
                                                            )
                                                            .map(
                                                                ({
                                                                    id,
                                                                    image,
                                                                    header,
                                                                    country,
                                                                }: ArticleProps) => (
                                                                    <div
                                                                        className="article-preview"
                                                                        key={id}
                                                                    >
                                                                        <Link
                                                                            to={`/destinations/${id}`}
                                                                        >
                                                                            <ArticleHeader
                                                                                image={
                                                                                    image
                                                                                }
                                                                                header={
                                                                                    header
                                                                                }
                                                                                country={
                                                                                    country
                                                                                }
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            )}
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                    </div>
                                </li>
                                <li className="guides">
                                    <div className="menu-item-name">
                                        <NavLink
                                            to="/guides"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'active'
                                                    : 'notActive'
                                            }
                                        >
                                            GUIDES
                                            <div className="underline"></div>
                                        </NavLink>
                                    </div>
                                    <div className="guides-hover">
                                        {filtredSlise.map(
                                            ({
                                                id,
                                                image,
                                                header,
                                                country,
                                            }: ArticleProps) => (
                                                <div
                                                    className="article-preview"
                                                    key={id}
                                                >
                                                    <Link
                                                        to={`/destinations/${id}`}
                                                    >
                                                        <ArticleHeader
                                                            image={image}
                                                            header={header}
                                                            country={country}
                                                        />
                                                    </Link>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </li>
                                <li className="features">
                                    <div className="menu-item-name">
                                        <NavLink
                                            to="/features"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'active'
                                                    : 'notActive'
                                            }
                                        >
                                            FEATURES
                                            <div className="underline hide"></div>
                                        </NavLink>
                                    </div>
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
                                    <div className="menu-item-name">
                                        <NavLink
                                            to="/liked"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'active'
                                                    : 'notActive'
                                            }
                                        >
                                            LIKED
                                            <div className="underline"></div>
                                        </NavLink>
                                    </div>
                                </li>
                                <li className="pages">
                                    <div className="menu-item-name">
                                        <NavLink
                                            to="/pages"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'active'
                                                    : 'notActive'
                                            }
                                        >
                                            PAGES
                                            <div className="underline hide"></div>
                                        </NavLink>
                                    </div>
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
                                    <div className="menu-item-name">
                                        <NavLink
                                            to="/shop"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'active'
                                                    : 'notActive'
                                            }
                                        >
                                            SHOP
                                            <div className="underline hide"></div>
                                        </NavLink>
                                    </div>
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
                        <div className={`header-buttons row ${wrapperClass}`}>
                            <Link to="/cart">
                                <div className="cart"></div>
                            </Link>
                            <div
                                className="search"
                                onClick={openSearchInput}
                            ></div>
                            <input
                                type="text"
                                className={`search-input ${searchClass}`}
                            />
                            <div
                                className="burger-menu"
                                onClick={() => dispatch(toggleState())}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Menu
                className="burger-menu"
                isOpen={isOpen}
                selectedKey={'entry'}
                onClose={() => dispatch(setClose())}
                width={'100%'}
            >
                <Link to="/">
                    <Item
                        itemKey={'home'}
                        text={'Home'}
                        onClick={() => dispatch(setClose())}
                    ></Item>
                </Link>
                <Link to="/destinations">
                    <Item
                        itemKey={'destinations'}
                        text={'Destinations'}
                        onClick={() => dispatch(setClose())}
                    ></Item>
                </Link>
                <Link to="/guides">
                    <Item
                        itemKey={'guides'}
                        text={'Guides'}
                        onClick={() => dispatch(setClose())}
                    ></Item>
                </Link>
                <Link to="/features">
                    <Item
                        itemKey={'features'}
                        text={'Features'}
                        onClick={() => dispatch(setClose())}
                    ></Item>
                </Link>
                <Link to="/liked">
                    <Item
                        itemKey={'liked'}
                        text={'Liked'}
                        onClick={() => dispatch(setClose())}
                    ></Item>
                </Link>
                <Link to="/pages">
                    <Item
                        itemKey={'pages'}
                        text={'Pages'}
                        onClick={() => dispatch(setClose())}
                    ></Item>
                </Link>
                <Link to="/shop">
                    <Item
                        itemKey={'shop'}
                        text={'Shop'}
                        onClick={() => dispatch(setClose())}
                    ></Item>
                </Link>
            </Menu>
        </>
    )
}

export default Header
