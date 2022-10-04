import ArticleItem from 'components/ArticlesSection/ArticleItem'
import './ArticlesSection.scss'
import articlesArray from './articlesArray'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { onLoadMoreClick } from 'redux/loadMoreReducer'

type Props = {}

type ArticleProps = {
    id: number
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    text: string
}

const ArticlesSection = (props: Props) => {
    const firstColumn = useAppSelector(
        (state) => state.elementsCountState.firstColumn
    )
    const secondColumn = useAppSelector(
        (state) => state.elementsCountState.secondColumn
    )
    const thirdColumn = useAppSelector(
        (state) => state.elementsCountState.thirdColumn
    )
    const firstTabletColumn = useAppSelector(
        (state) => state.elementsCountState.firstTabletColumn
    )
    const secondTabletColumn = useAppSelector(
        (state) => state.elementsCountState.secondTabletColumn
    )
    const dispatch = useAppDispatch()

    return (
        <section className="articles">
            <div className="container">
                <div className="articles-header">Latest Articles</div>
                <div className="articles-wrapper">
                    <div className="articles-desktop-wrapper">
                        {articlesArray
                            .filter((element) => element.id <= firstColumn)
                            .map(
                                ({
                                    image,
                                    date,
                                    country,
                                    dash,
                                    section,
                                    header,
                                    text,
                                    id,
                                }: ArticleProps) => (
                                    <div className="article-item" key={id}>
                                        <ArticleItem
                                            image={image}
                                            date={date}
                                            country={country}
                                            dash={dash}
                                            section={section}
                                            header={header}
                                            text={text}
                                            id={id}
                                        />
                                    </div>
                                )
                            )}
                    </div>
                    <div className="articles-desktop-wrapper">
                        {articlesArray
                            .filter(
                                (element) =>
                                    element.id > firstColumn &&
                                    element.id <= secondColumn
                            )
                            .map(
                                ({
                                    image,
                                    date,
                                    country,
                                    dash,
                                    section,
                                    header,
                                    text,
                                    id,
                                }: ArticleProps) => (
                                    <div className="article-item" key={id}>
                                        <ArticleItem
                                            image={image}
                                            date={date}
                                            country={country}
                                            dash={dash}
                                            section={section}
                                            header={header}
                                            text={text}
                                            id={id}
                                        />
                                    </div>
                                )
                            )}
                    </div>
                    <div className="articles-desktop-wrapper">
                        {articlesArray
                            .filter(
                                (element) =>
                                    element.id > secondColumn &&
                                    element.id <= thirdColumn
                            )
                            .map(
                                ({
                                    image,
                                    date,
                                    country,
                                    dash,
                                    section,
                                    header,
                                    text,
                                    id,
                                }: ArticleProps) => (
                                    <div className="article-item" key={id}>
                                        <ArticleItem
                                            image={image}
                                            date={date}
                                            country={country}
                                            dash={dash}
                                            section={section}
                                            header={header}
                                            text={text}
                                            id={id}
                                        />
                                    </div>
                                )
                            )}
                    </div>
                    <div className="articles-tablet-wrapper">
                        {articlesArray
                            .filter(
                                (element) => element.id <= firstTabletColumn
                            )
                            .map(
                                ({
                                    image,
                                    date,
                                    country,
                                    dash,
                                    section,
                                    header,
                                    text,
                                    id,
                                }: ArticleProps) => (
                                    <div className="article-item" key={id}>
                                        <ArticleItem
                                            image={image}
                                            date={date}
                                            country={country}
                                            dash={dash}
                                            section={section}
                                            header={header}
                                            text={text}
                                            id={id}
                                        />
                                    </div>
                                )
                            )}
                    </div>
                    <div className="articles-tablet-wrapper">
                        {articlesArray
                            .filter(
                                (element) =>
                                    element.id > firstTabletColumn &&
                                    element.id <= secondTabletColumn
                            )
                            .map(
                                ({
                                    image,
                                    date,
                                    country,
                                    dash,
                                    section,
                                    header,
                                    text,
                                    id,
                                }: ArticleProps) => (
                                    <div className="article-item" key={id}>
                                        <ArticleItem
                                            image={image}
                                            date={date}
                                            country={country}
                                            dash={dash}
                                            section={section}
                                            header={header}
                                            text={text}
                                            id={id}
                                        />
                                    </div>
                                )
                            )}
                    </div>
                </div>
                <button
                    className={`articles-btn ${
                        firstColumn > 3 ? 'active-btn' : ''
                    }`}
                    onClick={() => dispatch(onLoadMoreClick())}
                    disabled={firstColumn > 3}
                >
                    Load more
                </button>
            </div>
        </section>
    )
}

export default ArticlesSection
