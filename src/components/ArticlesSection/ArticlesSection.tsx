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
    const elementCount = useAppSelector(
        (state) => state.elementsCountState.count
    )
    let wrapperHeight = useAppSelector(
        (state) => state.elementsCountState.height
    )
    const dispatch = useAppDispatch()

    return (
        <section className="articles">
            <div className="container">
                <div className="articles-header">Latest Articles</div>
                <div
                    className="articles-wrapper"
                    style={{
                        height: `${wrapperHeight}px`,
                    }}
                >
                    {articlesArray
                        .filter((element) => element.id <= elementCount)
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
                {document.documentElement.clientWidth <= 992 ? (
                    <button
                        className="articles-btn"
                        onClick={() =>
                            dispatch(
                                onLoadMoreClick({
                                    newCount: 10,
                                    newHeight: 2750,
                                })
                            )
                        }
                        disabled={elementCount > 15}
                    >
                        Load more
                    </button>
                ) : (
                    <button
                        className="articles-btn"
                        onClick={() =>
                            dispatch(
                                onLoadMoreClick({
                                    newCount: 10,
                                    newHeight: 1300,
                                })
                            )
                        }
                        disabled={elementCount > 15}
                    >
                        Load more
                    </button>
                )}
                {/* <button
                    className="articles-btn"
                    onClick={() =>
                        dispatch(
                            onLoadMoreClick({
                                newCount: 10,
                                newHeight: 1300,
                            })
                        )
                    }
                    disabled={elementCount > 15}
                >
                    Load more
                </button> */}
            </div>
        </section>
    )
}

export default ArticlesSection
